function search_node_by_query(query::AbstractString)

    # Endpoints
    headers = Mangal.generate_base_header()
    endpoint = Mangal.api_root * Mangal.api_endpoints.node

    # Perform the request
    this_request = HTTP.get(endpoint*query, headers)

    # Return the collection
    return [Mangal.format_node_response(d) for d in JSON.parse.(String(this_request.body))]

end

function nodes(network::MangalNetwork; count::Int64=5000, page::Int64=1)
    @assert 0 < count <= 5000
    @assert 0 < page

    # Make the query
    query = Mangal.generate_base_query(count, page - 1, nothing)
    query = query * "&network_id=$(network.id)"

    # Get results
    results = Mangal.search_node_by_query(query)
    return results
end

function node(id::Int64)
    @assert id > 0

    # Make the query
    query = Mangal.generate_base_query(1, 0, nothing)
    query = query * "&id=$(id)"

    # Get results
    results = Mangal.search_node_by_query(query)
    @assert length(results) == 1
    return first(results)
end
