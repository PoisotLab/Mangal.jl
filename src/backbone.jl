"""
    backbone(name::AbstractString)

Returns the backbone entry for a taxon, matched by *exact* name.
"""
function backbone(name::AbstractString)
    q = backbones(Pair("name", name))
    return isequal(1)(length(q)) ? only(q) : nothing
end
