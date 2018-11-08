"""
    nodes(query::Pair...)

Get the latest `MangalNode` objects. The `query` argument is optional.
"""
function nodes(query::Pair...)
    results = search_objects_by_query(
        Mangal.api_endpoints.node,
        Mangal.format_node_response,
        query...
    )
    Mangal.cache(results)
    return results
end

"""
    nodes(network::MangalNetwork, query::Pair...)

Returns the nodes that are part of a `MangalNetwork`, with an additional optional query.
"""
function nodes(network::MangalNetwork, query::Pair...)
    return nodes(Pair("network_id", network.id), query...)
end

"""
    nodes(taxon::MangalReferenceTaxon, query::Pair...)

Returns the nodes that are instance of a `MangalReferenceTaxon`, with an additional query.
"""
function nodes(taxon::MangalReferenceTaxon, query::Pair...)
    return nodes(Pair("taxo_id", taxon.id), query...)
end

"""
    node(id::Int64)

Returns a node object by id.
"""
function node(id::Int64)
    return get(_MANGAL_CACHES[MangalNode], id, first(nodes(Pair("id", id))))
end
