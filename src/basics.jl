function generate_base_query(c::Int64, p::Int64, q::Union{AbstractString,Void})
    query = "?count=$(c)&page=$(p)"
    if !(typeof(q) <: Void)
        query = query * "&q=$(q)"
    end
    query = replace(query, " ", "+")
    return query
end
