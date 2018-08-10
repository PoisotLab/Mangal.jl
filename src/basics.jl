function verbose()
    Mangal.verbose(true)
end

function verbose(vrb::Bool)
    ENV["MANGAL_VERBOSE"] = vrb
end

function isverbose()
    return parse(Bool, get(ENV, "MANGAL_VERBOSE", "false"))
end

function cache(results::Vector{T}) where {T <: Union{MangalReferenceTaxon,MangalNode}}
    for result in results
        if !haskey(_MANGAL_CACHES[T], result.id)
            global _MANGAL_CACHES[T][result.id] = result
        end
    end
end

function generate_base_header()
    if haskey(ENV, "MANGAL_BEARER_TOKEN")
        return ["Authorization" => "bearer $(ENV["MANGAL_BEARER_TOKEN"])"]
    else
        return []
    end
end

function generate_request_query(parameters::Vector{Pair{String,T}}) where {T <: Any}
    query = ""
    for (i, pair) in enumerate(parameters)
        i == 1 || (query *= "&")
        i == 1 && (query *= "?")
        query *= pair.first * "=" * string(pair.second)
    end
    return replace(query, Pair(" ", "+"))
end

"""

Depending on the verbosity of the package (see documentation for
`Mangal.isverbose`), this function will let the user know when more objects than
requested exist. In all cases, it is assumed that the functions will be wrapepd
in calls to query objects until no further objects are found.
"""
function search_objects_by_query(endpoint::AbstractString, query::Union{Vector{Pair{String,T}},Nothing}, formatter::Function) where {T <: Any}
    # Headers
    headers = Mangal.generate_base_header()

    # Full endpoint
    endpoint = Mangal.api_root * endpoint

    # Convert query parameters
    request_url = query == nothing ? endpoint : endpoint*generate_request_query(query)

    # Perform the request
    this_request = HTTP.get(request_url, headers)
    request_body = String(this_request.body)
    request_body = replace(request_body, "" => "-") # There are some weird chars in the DB

    # Content-range?
    if Mangal.isverbose()
        content_range = first(filter(head -> head.first == "Content-Range", this_request.headers))
        positions = parse.(Int64, split(content_range.second, [' ', '-', '/'])[2:end])
        range_begin = positions[1]+1
        range_stop = positions[2]+1
        range_ends = positions[3]
        if range_ends > range_stop
            @info "Returning object $(range_begin) to $(range_stop) (of $(range_ends) total)"
        end
    end

    # Returns the collection
    parsed_json = JSON.parse.(request_body)

    # Return the formatted object(s)
    return formatter.(parsed_json)
end
