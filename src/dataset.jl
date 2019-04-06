"""
    datasets(query::Pair...)

Will return the most recent datasets.
"""
function datasets(query::Pair...)
    return search_objects_by_query(
        Mangal.api_endpoints.dataset,
        MangalDataset,
        query...
    )
end

"""
    dataset(name::AbstractString)

Return a single dataset by its name.
"""
function dataset(name::AbstractString)
    return first(datasets(Pair("name", name)))
end

"""
    dataset(id::Int64)

Return a single dataset by its unique numerical ID.
"""
function dataset(id::Int64)
    return first(datasets(Pair("id", id)))
end
