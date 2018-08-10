function backbone()
    results = search_objects_by_query(
        Mangal.api_endpoints.taxonomy,
        nothing,
        Mangal.format_backbone_response
    )
    Mangal.cache(results)
    return results
end

function backbone(q::Vector{Pair{String,T}}) where {T <: Any}
    results = search_objects_by_query(
        Mangal.api_endpoints.taxonomy,
        q,
        Mangal.format_backbone_response
    )
    Mangal.cache(results)
    return results
end

function backbone(name::AbstractString)
    return first(backbone([Pair("name", name)]))
end

function backbone(id::Int64)
    return get(_MANGAL_CACHES[MangalReferenceTaxon], id, first(backbone([Pair("id", id)])))
end
