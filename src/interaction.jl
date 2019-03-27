"""
    interactions(query::Pair...)

Returns the most recent interactions.
"""
function interactions(query::Pair...)
    return search_objects_by_query(
        Mangal.api_endpoints.interaction,
        Mangal.format_interaction_response,
        query...
    )
end

"""
    interactions(from::MangalNode, ::Colon, query::Pair...)

Returns interactions established *by* the species given as its first argument.
"""
function interactions(from::MangalNode, ::Colon, query::Pair...)
    return interactions(Pair("node_from", string(from.id)), query...)
end

"""
    interactions(::Colon, to::MangalNode, query::Pair...)

Returns interactions established *to* the species given as its second argument.
"""
function interactions(::Colon, to::MangalNode, query::Pair...)
    return interactions(Pair("node_to", string(to.id)), query...)
end

"""
    interactions(from::MangalNode, to::MangalNode, query::Pair...)

Returns interactions between two nodes.
"""
function interactions(from::MangalNode, to::MangalNode, query::Pair...)
    return interactions(Pair("node_from", string(from.id)), Pair("node_to", string(to.id)), query...)
end

"""
    interactions(n::MangalNetwork, query::Pair...)

Returns interactions within a network.
"""
function interactions(n::MangalNetwork, query::Pair...)
    return interactions("network_id" => n.id, query...)
end

"""
    interaction(id::Int64)

Returns an interaction by its id.
"""
function interaction(id::Int64)
    return first(interactions(Pair("id", id)))
end
