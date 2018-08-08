function generate_base_query(c::Int64, p::Int64, q::Union{AbstractString,Nothing})
    query = "?count=$(c)&page=$(p)"
    if !(typeof(q) <: Nothing)
        query = query * "&q=$(q)"
    end
    query = replace(query, " " => "+")
    return query
end
