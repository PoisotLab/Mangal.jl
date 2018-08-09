function datasets(;q::Union{Vector{Pair{String,Any}},Nothing}=nothing)
    return search_objects_by_query(
        Mangal.api_endpoints.dataset,
        q,
        Mangal.format_dataset_response
    )
end

function dataset(name::AbstractString)
    return first(search_objects_by_query(
        Mangal.api_endpoints.dataset,
        [Pair("name", name)],
        Mangal.format_dataset_response
    ))
end

function dataset(id::Int64)
    return first(search_objects_by_query(
        Mangal.api_endpoints.dataset,
        [Pair("id", id)],
        Mangal.format_dataset_response
    ))
end
