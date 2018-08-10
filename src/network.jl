function networks()
    return search_objects_by_query(
        Mangal.api_endpoints.network,
        nothing,
        Mangal.format_network_response
    )
end

function networks(q::Vector{Pair{String,T}}) where {T <: Any}
    return search_objects_by_query(
        Mangal.api_endpoints.network,
        q,
        Mangal.format_network_response
    )
end

function networks(dataset::MangalDataset)
    query = [Pair("dataset_id", dataset.id)]
    return networks(query)
end

function networks(dataset::MangalDataset, query::Vector{Pair{String,T}}) where {T <: Any}
    push!(query, Pair("dataset_id", dataset.id))
    return networks(query)
end

function network(name::AbstractString)
    return first(networks([Pair("name", name)]))
end

function network(id::Int64)
    return first(networks([Pair("id", id)]))
end
