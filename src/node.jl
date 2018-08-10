function nodes()
    return search_objects_by_query(
        Mangal.api_endpoints.node,
        nothing,
        Mangal.format_node_response
    )
end

function nodes(q::Vector{Pair{String,T}}) where {T <: Any}
    return search_objects_by_query(
        Mangal.api_endpoints.node,
        q,
        Mangal.format_node_response
    )
end


function nodes(network::MangalNetwork)
    query = [Pair("network_id", network.id)]
    return nodes(query)
end

function nodes(network::MangalNetwork, query::Vector{Pair{String,T}}) where {T <: Any}
    push!(query, Pair("network_id", network.id))
    return nodes(query)
end


function nodes(taxon::MangalReferenceTaxon)
    query = [Pair("taxo_id", taxon.id)]
    return nodes(query)
end

function nodes(taxon::MangalReferenceTaxon, query::Vector{Pair{String,T}}) where {T <: Any}
    push!(query, Pair("taxo_id", taxon.id))
    return nodes(query)
end


function node(id::Int64)
    return first(nodes([Pair("id", id)]))
end
