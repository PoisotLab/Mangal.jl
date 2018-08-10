module Mangal

using HTTP
using JSON
using GeoInterface
using Dates

const web_root = "http://poisotlab.biol.umontreal.ca/"
const api_root = web_root * "api/v2/"

   # Endpoints
const api_endpoints = (
    taxonomy = "taxonomy",
    node = "taxon",
    interaction = "interaction",
    network = "network",
    dataset = "dataset",
    user = "user",
    trait = "trait",
    reference = "reference",
    attribute = "attribute"
)

# Login
include(joinpath(".", "login.jl"))

# Types
include(joinpath(".", "types.jl"))
export MangalDataset
export MangalNetwork
export MangalReferenceTaxon
export MangalNode
export MangalInteraction

# The cache!
global _MANGAL_CACHES = Dict(
    MangalNode => Dict{Int64, MangalNode}(),
    MangalReferenceTaxon => Dict{Int64, MangalReferenceTaxon}()
    )

# Response formatters
include("response_format.jl")

# Basic functions
include(joinpath(".", "basics.jl"))

# Datasets
include(joinpath(".", "dataset.jl"))
export datasets
export dataset

# Networks
include(joinpath(".", "network.jl"))
export networks
export network

# Taxonomy backbone(s)
include(joinpath(".", "backbone.jl"))
export backbone

# Network nodes
include(joinpath(".", "node.jl"))
export nodes
export node

# Interactions
include(joinpath(".", "interaction.jl"))
export interactions
export interaction

end # module
