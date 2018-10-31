"""
    datasets()

When called with no arguments, this function will return a list of the most
recent datasets.  The results will be returned as a vector of `MangalDataset`
object.
"""
function datasets()
    return search_objects_by_query(
        Mangal.api_endpoints.dataset,
        nothing,
        Mangal.format_dataset_response
    )
end

"""
    datasets(q::Vector{Pair{String,T}}) where {T <: Any}

Will return the most recent datasets that match a given query. The results will
be returned as a vector of `MangalDataset` object.
"""
function datasets(q::Vector{Pair{String,T}}) where {T <: Any}
    return search_objects_by_query(
        Mangal.api_endpoints.dataset,
        q,
        Mangal.format_dataset_response
    )
end

"""
    dataset(name::AbstractString)

Return a single dataset by its name.
"""
function dataset(name::AbstractString)
    return first(datasets([Pair("name", name)]))
end

"""
    dataset(id::Int64)

Return a single dataset by its unique numerical ID.
"""
function dataset(id::Int64)
    return first(datasets([Pair("id", id)]))
end
