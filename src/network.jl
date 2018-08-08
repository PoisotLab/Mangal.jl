function format_network_response(d::Dict{T,Any}) where {T <: AbstractString}

    point_type = d["localisation"]["type"] == "Point" ? Point : Polygon
    if point_type == Polygon
        coords = [float.(x) for x in first(d["localisation"]["coordinates"])]
        point_coordinates = point_type(coords)
    else
        coords = float.(d["localisation"]["coordinates"])
        point_coordinates = point_type(coords...)
    end


    obj_id = d["id"]
    obj_public = d["public"]
    obj_name = d["name"]
    obj_date = DateTime(d["date"][1:19])
    obj_position = point_coordinates
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])
    obj_user = d["user_id"]
    obj_description = d["description"]
    obj_environment = d["environment_id"]
    obj_complete = d["all_interactions"]
    obj_dataset = d["dataset_id"]

    return MangalNetwork(obj_id, obj_public, obj_name, obj_date, obj_position,
        obj_created, obj_updated, obj_user, obj_description, obj_environment,
        obj_complete, obj_dataset)

end

function search_network_by_query(query::AbstractString)
    # Endpoints
    headers = Mangal.generate_base_header()
    endpoint = Mangal.api_root * Mangal.api_endpoints.network

    # Perform the request
    this_request = HTTP.get(endpoint*query, headers)

    request_body = String(this_request.body)

    # This fixes a temporary issue in the Ponisio et al. dataset
    request_body = replace(request_body, "" => "-")

    # Return the collection
    return [Mangal.format_network_response(d) for d in JSON.parse.(request_body)]
end

function networks(;count::Int64=200, page::Int64=1, q::Union{AbstractString,Nothing}=nothing)
    @assert 0 < count <= 1000
    @assert 0 < page

    # Make the query
    query = Mangal.generate_base_query(count, page - 1, q)
    return Mangal.search_network_by_query(query)
end

function networks(dataset::MangalDataset; count::Int64=200, page::Int64=1)
    @assert 0 < count <= 1000
    @assert 0 < page

    # Make the query
    query = Mangal.generate_base_query(count, page - 1, nothing)
    query = query * "&dataset_id=$(dataset.id)"

    # Get results
    results = Mangal.search_network_by_query(query)
    return results
end

function network(name::AbstractString)
    # Make the query
    query = Mangal.generate_base_query(1, 0, nothing)
    query = query * "&name=$(name)"

    # Get results
    results = Mangal.search_network_by_query(query)
    @assert length(results) == 1
    return first(results)
end

function network(id::Int64)
    @assert id > 0

    # Make the query
    query = Mangal.generate_base_query(1, 0, nothing)
    query = query * "&id=$(id)"

    # Get results
    results = Mangal.search_network_by_query(query)
    @assert length(results) == 1
    return first(results)
end
