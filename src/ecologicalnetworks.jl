function get_all_nodes(n::MangalNetwork)
    page_size = 200
    nodes_to_get = count(MangalNode, ["network_id" => n.id])
    pages_to_do = convert(Int64, ceil(nodes_to_get/page_size))
    network_nodes = MangalNode[]
    for page in 1:pages_to_do
        paging_query = ["page" => page-1, "count" => page_size]
        append!(network_nodes, nodes(n, paging_query))
    end
    return network_nodes
end

function get_all_interactions(n::Array{MangalNode,1})
    page_size = 200
    network_interactions = MangalInteraction[]
    for this_node in n
        interactions_to_get = count(MangalInteraction, ["taxon_1" => this_node.id])
        pages_to_do = convert(Int64, ceil(interactions_to_get/page_size))
        for page in 1:pages_to_do
            paging_query = ["page" => "$(page-1)", "count" => "page_size"]
            append!(network_interactions, interactions(this_node, :, paging_query))
        end
    end
    return network_interactions
end

"""
    UnipartiteNetwork(n::MangalNetwork; resolution::Type=MangalNode)

Returns a `UnipartiteNetwork` object representation of the `MangalNetwork`
passed as its first argument. The optional keyword `resolution` (can be
`MangalNode` or `MangalReferenceTaxon`) is determined to use which level of
aggregation should be used. The default (`MangalNode`) is raw data, and
`MangalReferenceTaxon` is the cleaned version.
"""
function UnipartiteNetwork(n::MangalNetwork; resolution::Type=MangalNode)
    resolution ∈ [MangalNode, MangalReferenceTaxon] || throw(ArgumentError("The resolution argument can only be MangalNode or MangalReferenceTaxon - you used $(resolution)"))

    network_nodes = get_all_nodes(n)
    network_interactions = get_all_interactions(network_nodes)

    object_nodes = NodeType == MangalReferenceTaxon ? unique([n.taxon for n in network_nodes]) : network_nodes
    A = zeros(Bool, (length(object_nodes),length(object_nodes)))
    N = UnipartiteNetwork(A, object_nodes)
    for i in network_interactions
        t_from = NodeType == MangalReferenceTaxon ? i.from.taxon : i.from
        t_to   = NodeType == MangalReferenceTaxon ? i.to.taxon : i.to
        N[t_from, t_to] = true
    end

    return N

end

"""
    UnipartiteQuantitativeNetwork(n::MangalNetwork; resolution::Type=MangalNode)

Returns a `UnipartiteQuantitativeNetwork` object representation of the
`MangalNetwork` passed as its first argument. The optional keyword `resolution`
(can be `MangalNode` or `MangalReferenceTaxon`) is determined to use which level
of aggregation should be used. The default (`MangalNode`) is raw data, and
`MangalReferenceTaxon` is the cleaned version.

The quantitative interaction value comes from the `strength` field of the
`MangalInteraction` object. In the case of `MangalReferenceTaxon` aggregation,
these strengths are *added*.
"""
function UnipartiteQuantitativeNetwork(n::MangalNetwork; resolution::Type=MangalNode)
    resolution ∈ [MangalNode, MangalReferenceTaxon] || throw(ArgumentError("The resolution argument can only be MangalNode or MangalReferenceTaxon - you used $(resolution)"))

    network_nodes = get_all_nodes(n)
    network_interactions = get_all_interactions(network_nodes)

    object_nodes = NodeType == MangalReferenceTaxon ? unique([n.taxon for n in network_nodes]) : network_nodes
    i_type = (network_interactions .|> x -> x.strength) |> eltype
    A = zeros(i_type, (length(object_nodes),length(object_nodes)))
    N = UnipartiteQuantitativeNetwork(A, object_nodes)
    for i in network_interactions
        t_from = NodeType == MangalReferenceTaxon ? i.from.taxon : i.from
        t_to   = NodeType == MangalReferenceTaxon ? i.to.taxon : i.to
        N[t_from, t_to] = N[t_from, t_to] + i.strength
    end

    return N

end
