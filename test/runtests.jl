using Mangal

Mangal.login(my_bearer_token)


struct Interaction
    public::Bool
    from::ReferenceTaxon
    to::ReferenceTaxon
    from_name::AbstractString
    to_name::AbstractString
end

headers = Mangal.generate_base_header()
endpoint = Mangal.api_root * Mangal.api_endpoints.interaction

# Perform the request
query="?count=10"
this_request = HTTP.get(endpoint*query, headers)

JSON.parse.(String(this_request.body))

network(1)

backbone(996)

# Return the collection
return [Mangal.format_dataset_response(d) for d in JSON.parse.(String(this_request.body))]

backbone(2)
