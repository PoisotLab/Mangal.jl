function format_backbone_response(d::Dict{T,Any}) where {T <: AbstractString}

    obj_id = d["id"]
    obj_name = d["name"]
    obj_status = Symbol(d["status"])
    obj_bold = d["bold"]
    obj_tsn = d["tsn"]
    obj_ncbi = d["ncbi"]
    obj_eol = d["eol"]
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])
    obj_description = d["description"]

    return MangalReferenceTaxon(obj_id, obj_name, obj_status, obj_bold, obj_tsn,
        obj_ncbi, obj_eol, obj_created, obj_updated, obj_description)

end

function search_backbone_by_query(query::AbstractString)

    # Endpoints
    headers = Mangal.generate_base_header()
    endpoint = Mangal.api_root * Mangal.api_endpoints.taxonomy

    # Perform the request
    this_request = HTTP.get(endpoint*query, headers)

    # Return the collection
    return [Mangal.format_backbone_response(d) for d in JSON.parse.(String(this_request.body))]

end

function backbone(;count::Int64=200, page::Int64=1, q::Union{AbstractString,Nothing}=nothing)
    @assert 0 < count <= 1000
    @assert 0 < page

    # Make the query
    query = Mangal.generate_base_query(count, page - 1, q)
    return Mangal.search_backbone_by_query(query)
end

function backbone(name::AbstractString)
    # Make the query
    query = Mangal.generate_base_query(1, 0, nothing)
    query = query * "&name=$(name)"

    # Get results
    results = Mangal.search_backbone_by_query(query)
    @assert length(results) == 1
    return first(results)
end

function backbone(id::Int64)
    @assert id > 0

    # Make the query
    query = Mangal.generate_base_query(1, 0, nothing)
    query = query * "&id=$(id)"

    # Get results
    results = Mangal.search_backbone_by_query(query)
    @assert length(results) == 1
    return first(results)
end
