function datasets()
    return search_objects_by_query(
        Mangal.api_endpoints.dataset,
        nothing,
        Mangal.format_dataset_response
    )
end

function datasets(q::Vector{Pair{String,T}}) where {T <: Any}
    return search_objects_by_query(
        Mangal.api_endpoints.dataset,
        q,
        Mangal.format_dataset_response
    )
end

function dataset(name::AbstractString)
    return first(datasets([Pair("name", name)]))
end

function dataset(id::Int64)
    return first(datasets([Pair("id", id)]))
end
