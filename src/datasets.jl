struct Dataset
    id::Int64
    public::Bool
    name::AbstractString
    date::DateTime
    created::DateTime
    updated::DateTime
    reference::Union{Int64,Void}
    user::Int64
    description::AbstractString
end

function format_dataset_response{T<:AbstractString}(d::Dict{T,Any})
    obj_id = d["id"]
    obj_public = d["public"]
    obj_name = d["name"]
    obj_date = DateTime(d["date"][1:19])
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])
    obj_reference = d["ref_id"]
    obj_user = d["user_id"]
    obj_description = d["description"]

    return Dataset(obj_id, obj_public, obj_name, obj_date, obj_created,
        obj_updated, obj_reference, obj_user, obj_description
        )
end

function search_dataset_by_query(query::AbstractString)
    # Endpoints
    headers = Mangal.generate_base_header()
    endpoint = Mangal.api_root * Mangal.api_endpoints.dataset

    # Perform the request
    this_request = HTTP.get(endpoint*query, headers)

    # Return the collection
    return [Mangal.format_dataset_response(d) for d in JSON.parse.(String(this_request.body))]
end

function datasets(;count::Int64=200, page::Int64=1, q::Union{AbstractString,Void}=nothing)
    @assert 0 < count <= 1000
    @assert 0 < page

    # Make the query
    query = Mangal.generate_base_query(count, page - 1, q)
    return Mangal.search_dataset_by_query(query)
end

function dataset(name::AbstractString)
    # Make the query
    query = Mangal.generate_base_query(1, 0, nothing)
    query = query * "&name=$(name)"

    # Get results
    results = Mangal.search_dataset_by_query(query)
    @assert length(results) == 1
    return first(results)
end

function dataset(id::Int64)
    @assert id > 0

    # Make the query
    query = Mangal.generate_base_query(1, 0, nothing)
    query = query * "&id=$(id)"

    # Get results
    results = Mangal.search_dataset_by_query(query)
    @assert length(results) == 1
    return first(results)
end
