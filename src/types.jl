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

The `taxon` field is a `MangalReferenceTaxon` object, so that one can, for
example, query the TSN identifier of a node through `object.taxon.tsn`.

This approach has been chosen because (i) names of nodes in networks can be non
unique and (ii) nodes within the same networks can refer to various taxonomic
levels. As an example, if a network has four distinct nodes identified as
`Ascariasis sp.`, they will represent four nodes in the networks, but map onto
the same `MangalReferenceTaxon` (representing the entire *Ascariasis* genus).
This approach provides a seemless representation of the same taxon across
different networks, but also of the same taxon *within* networks.
"""
struct MangalNode
    id::Int64
    name::AbstractString
    created::DateTime
    updated::DateTime
    taxon::MangalReferenceTaxon
end

"""
Interaction
"""
struct MangalInteraction
    id::Int64
    from::MangalNode
    to::MangalNode
    level::NTuple{2,Symbol}
    date::DateTime
    directed::Bool
    interaction::Symbol
    method::AbstractString
    strength::Union{Number,Nothing}
    user::Int64
    attribute::Int64
    created::DateTime
    updated::DateTime
    description::Union{AbstractString,Nothing}
end
