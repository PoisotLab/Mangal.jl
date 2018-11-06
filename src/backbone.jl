"""
    backbone()

Returns the most recent entries in the taxonomic backbone.
"""
function backbone()
    results = search_objects_by_query(
        Mangal.api_endpoints.taxonomy,
        nothing,
        Mangal.format_backbone_response
    )
    Mangal.cache(results)
    return results
end

"""
    backbone(q::Vector{Pair{String,T}}) where {T <: Any}

Returns the most recent entries in the taxonomic backbone that match a given
query.
"""
function backbone(q::Vector{Pair{String,T}}) where {T <: Any}
    results = search_objects_by_query(
        Mangal.api_endpoints.taxonomy,
        q,
        Mangal.format_backbone_response
    )
    Mangal.cache(results)
    return results
end

"""
    backbone(name::AbstractString)

Returns the backbone entry for a taxon, matched by *exact* name.
"""
function backbone(name::AbstractString)
    return first(backbone([Pair("name", name)]))
end

"""
    backbone(id::Int64)

Returns the backbone entry for a taxon by id. This function will get the
*cached* version of the backbone if it exists.
"""
function backbone(id::Int64)
    return get(_MANGAL_CACHES[MangalReferenceTaxon], id, first(backbone([Pair("id", id)])))
end
