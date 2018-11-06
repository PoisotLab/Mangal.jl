"""
A `MangalDataset` identifies a collection of networks, possibly containing
a single element. A dataset is identified by its `id` or `name` (both of
which are *unique*).

`id` (`Int64`): a unique identifier for the dataset.

`name` (`AbstractString`): a unique name describing the dataset.

`public` (`Bool`): indicates whether the dataset details are available to others
than its owner.

`date` (`DateTime`): date and time at which the dataset was assembled. This can
refer to the sampling time of networks, or to the date at which the dataset was
finalized.

`created` (`DateTime`): date and time at which the dataset was created in the database.

`updated` (`DateTime`): date and time at which the dataset was last modified in
the database. For most datasets, this will be equal to `created`.

`reference` (`Union{Int64,Nothing}`) (*optional*): a reference to the `id` of
the `MangalReference`, or `nothing` if there is no associated reference for this
dataset.

`user` (`Int64`): `id` of the user who added the dataset to the database. This
is *not necessarily* the author of the dataset, see `reference` (and the same
field in the `MangalNetwork`) to get the actual authorship.

`description` (`AbstractString`): a free-form description of the dataset.
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
