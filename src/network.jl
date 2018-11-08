"""
    networks(query::Pair...)

Returns the latest `MangalNetwork` objects matching a given query.
"""
function networks(query::Pair...)
    return search_objects_by_query(
        Mangal.api_endpoints.network,
        Mangal.format_network_response,
        query...
    )
end

"""
    networks(dataset::MangalDataset, query::Pair...)

Returns networks that are part of a `MangalDataset`. Allows additional query parameters.
"""
function networks(dataset::MangalDataset, query::Pair...)
    return networks(Pair("dataset_id", dataset.id), query...)
end

"""
    network(name::AbstractString)

Returns a network of a given name.
"""
function network(name::AbstractString)
    return first(networks(Pair("name", name)))
end

"""
    network(id::Int64)

Returns a network of a given identifier.
"""
function network(id::Int64)
    return first(networks(Pair("id", id)))
end
