function interactions(query::Pair...)
    return search_objects_by_query(
        Mangal.api_endpoints.interaction,
        Mangal.format_interaction_response,
        query...
    )
end

function interactions(from::MangalNode, ::Colon, query::Pair...)
    return interactions(Pair("taxon_1", string(from.id)), query...)
end

function interactions(::Colon, to::MangalNode, query::Pair...)
    return interactions(Pair("taxon_2", string(to.id)), query...)
end

function interactions(from::MangalNode, to::MangalNode, query::Pair...)
    return interactions(Pair("taxon_1", string(from.id)), Pair("taxon_2", string(to.id)), query...)
end

function interactions(network::MangalNetwork, query::Pair...)
    network_nodes = nodes(network)
    network_interactions = MangalInteraction[]
    for network_node in network_nodes
        append!(network_interactions, interactions(network_node, :, query...))
    end
    return unique(network_interactions)
end

"""
    interaction(id::Int64)

Returns an interaction by its id.
"""
function interaction(id::Int64)
    return first(interactions(Pair("id", id)))
end
