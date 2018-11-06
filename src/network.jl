"""
    networks()

Returns the latest `MangalNetwork` objects.
"""
function networks()
    return search_objects_by_query(
        Mangal.api_endpoints.network,
        nothing,
        Mangal.format_network_response
    )
end

"""
    networks(q::Vector{Pair{String,T}}) where {T <: Any}

Returns the latest `MangalNetwork` objects matching a given query.
"""
function networks(q::Vector{Pair{String,T}}) where {T <: Any}
    return search_objects_by_query(
        Mangal.api_endpoints.network,
        q,
        Mangal.format_network_response
    )
end

"""
    networks(dataset::MangalDataset)

Returns networks that are part of a `MangalDataset`.
"""
function networks(dataset::MangalDataset)
    query = [Pair("dataset_id", dataset.id)]
    return networks(query)
end

"""
    networks(dataset::MangalDataset, query::Vector{Pair{String,T}}) where {T <: Any}

Returns networks that are part of a `MangalDataset`. Allows additional query parameters.
"""
function networks(dataset::MangalDataset, query::Vector{Pair{String,T}}) where {T <: Any}
    push!(query, Pair("dataset_id", dataset.id))
    return networks(query)
end

"""
    network(name::AbstractString)

Returns a network of a given name.
"""
function network(name::AbstractString)
    return first(networks([Pair("name", name)]))
end

"""
    network(id::Int64)

Returns a network of a given identifier.
"""
function network(id::Int64)
    return first(networks([Pair("id", id)]))
end
