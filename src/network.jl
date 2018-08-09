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
