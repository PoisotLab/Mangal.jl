"""
    nodes(query::Union{Nothing,Vector{Pair{String,T}}}=nothing) where {T <: Any}

Get the latest `MangalNode` objects. The `query` argument is optional.
"""
function nodes(query::Union{Nothing,Vector{Pair{String,T}}}=nothing) where {T <: Any}
    results = search_objects_by_query(
        Mangal.api_endpoints.node,
        query,
        Mangal.format_node_response
    )
    Mangal.cache(results)
    return results
end

"""
    nodes(network::MangalNetwork, query::Union{Nothing,Vector{Pair{String,T}}}=nothing) where {T <: Any}

Returns the nodes that are part of a `MangalNetwork`, with an additional optional query.
"""
function nodes(network::MangalNetwork, query::Union{Nothing,Vector{Pair{String,T}}}=nothing) where {T <: Any}
    push!(query, Pair("network_id", network.id))
    return nodes(query)
end

"""
    nodes(taxon::MangalReferenceTaxon, query::Union{Nothing,Vector{Pair{String,T}}}=nothing) where {T <: Any}

Returns the nodes that are instance of a `MangalReferenceTaxon`, with an additional query.
"""
function nodes(taxon::MangalReferenceTaxon, query::Union{Nothing,Vector{Pair{String,T}}}=nothing) where {T <: Any}
    push!(query, Pair("taxo_id", taxon.id))
    return nodes(query)
end

"""
    node(id::Int64)

Returns a node object by id.
"""
function node(id::Int64)
    return get(_MANGAL_CACHES[MangalNode], id, first(nodes([Pair("id", id)])))
end
