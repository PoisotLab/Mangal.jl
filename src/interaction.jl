function interactions()
    return search_objects_by_query(
        Mangal.api_endpoints.interaction,
        nothing,
        Mangal.format_interaction_response
    )
end

function interactions(q::Vector{Pair{String,T}}) where {T <: Any}
    return search_objects_by_query(
        Mangal.api_endpoints.interaction,
        q,
        Mangal.format_interaction_response
    )
end

function interactions(from::MangalNode, ::Colon )
    query = [Pair("taxon_1", string(from.id))]
    return interactions(query)
end

function interactions(from::MangalNode, ::Colon, query::Vector{Pair{String,T}}) where {T <: Any}
    push!(query, Pair("taxon_1", string(from.id)))
    return interactions(query)
end

function interactions(::Colon, to::MangalNode)
    query = [Pair("taxon_2", string(to.id))]
    return interactions(query)
end

function interactions(::Colon, to::MangalNode, query::Vector{Pair{String,T}}) where {T <: Any}
    push!(query, Pair("taxon_2", string(to.id)))
    return interactions(query)
end

function interactions(from::MangalNode, to::MangalNode)
    query = [Pair("taxon_1", string(from.id)), Pair("taxon_2", string(to.id))]
    return interactions(query)
end

function interactions(from::MangalNode, to::MangalNode, query::Vector{Pair{String,T}}) where {T <: Any}
    push!(query, Pair("taxon_1", string(from.id)))
    push!(query, Pair("taxon_2", string(to.id)))
    return interactions(query)
end

function interactions(network::MangalNetwork)
    network_nodes = nodes(network)
    network_interactions = MangalInteraction[]
    for network_node in network_nodes
        append!(network_interactions, interactions(n_from, :))
        append!(network_interactions, interactions(:, n_from))
    end
    return unique(network_interactions)
end

function interactions(network::MangalNetwork, query::Vector{Pair{String,T}}) where {T <: Any}
    network_nodes = nodes(network)
    network_interactions = MangalInteraction[]
    for network_node in network_nodes
        append!(network_interactions, interactions(network_node, :, query))
        append!(network_interactions, interactions(:, network_node, query))
    end
    return unique(network_interactions)
end

function interaction(id::Int64)
    return first(interactions([Pair("id", id)]))
end
