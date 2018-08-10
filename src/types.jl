"""
Dataset of networks

"""
struct MangalDataset
    id::Int64
    public::Bool
    name::AbstractString
    date::DateTime
    created::DateTime
    updated::DateTime
    reference::Union{Int64,Nothing}
    user::Int64
    description::AbstractString
end

"""
Wrapper for species interactions
"""
struct MangalNetwork
    id::Int64
    public::Bool
    name::AbstractString
    date::DateTime
    position::AbstractGeometry
    created::DateTime
    updated::DateTime
    user::Int64
    description::AbstractString
    environment::Union{Int64,Nothing}
    complete::Bool
    dataset::Int64
end

"""
Reference taxon (unique identifier of network nodes)
"""
struct MangalReferenceTaxon
    id::Int64
    name::AbstractString
    status::Symbol
    bold::Union{Int64,Nothing}
    tsn::Union{Int64,Nothing}
    ncbi::Union{Int64,Nothing}
    eol::Union{Int64,Nothing}
    created::DateTime
    updated::DateTime
    description::Union{AbstractString,Nothing}
end

"""
Node in a network
"""
struct MangalNode
    id::Int64
    name::AbstractString
    created::DateTime
    updated::DateTime
    taxon::MangalReferenceTaxon
end