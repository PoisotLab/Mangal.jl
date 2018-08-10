function backbone()
    return search_objects_by_query(
        Mangal.api_endpoints.taxonomy,
        nothing,
        Mangal.format_backbone_response
    )
end

function backbone(q::Vector{Pair{String,T}}) where {T <: Any}
    return search_objects_by_query(
        Mangal.api_endpoints.taxonomy,
        q,
        Mangal.format_backbone_response
    )
end

function backbone(name::AbstractString)
    return first(backbone([Pair("name", name)]))
end

function backbone(id::Int64)
    return first(backbone([Pair("id", id)]))
end
