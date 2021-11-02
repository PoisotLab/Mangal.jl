"""
    dataset(name::AbstractString)

Return a single dataset by its name.
"""
function dataset(name::AbstractString)
    q = datasets(Pair("name", name))
    return isequal(1)(length(q)) ? only(q) : nothing
end
