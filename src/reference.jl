"""
TODO
"""
function references(query::Pair...)
    return search_objects_by_query(
        Mangal.api_endpoints.reference,
        MangalReference,
        query...
    )
end

"""
TODO
"""
function reference(id::Int64)
    return first(references("id" => id))
end
