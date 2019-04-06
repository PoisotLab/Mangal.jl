module Mangal

using HTTP
using JSON
using GeoInterface
using Dates

const web_root = "http://poisotlab.biol.umontreal.ca/"
const api_root = web_root * "api/v2/"

# Login
include(joinpath(".", "login.jl"))

# Types
include(joinpath(".", "types.jl"))
export MangalDataset
export MangalNetwork
export MangalReferenceTaxon
export MangalNode
export MangalInteraction
export MangalReference

# Endpoints
const _MANGAL_ENDPOINTS = Dict(
 MangalReferenceTaxon => "taxonomy",
 MangalNode => "node",
 MangalInteraction => "interaction",
 MangalNetwork => "network",
 MangalDataset => "dataset",
 MangalReference => "reference"
)

#user = "user",
#trait = "trait",
#attribute = "attribute"

# The cache!
global _MANGAL_CACHES = Dict(
    MangalNode => Dict{Int64, MangalNode}(),
    MangalReferenceTaxon => Dict{Int64, MangalReferenceTaxon}(),
    MangalNetwork => Dict{Int64, MangalNetwork}()
    )

# Counting objects
include(joinpath(".", "count.jl"))

# Response formatters
include("response_format.jl")

# Basic functions
include(joinpath(".", "basics.jl"))

# Generate code to write most of the API
include(joinpath(".", "generators.jl"))
export nodes, node
export backbones, backbone
export datasets, dataset
export networks, network
export references, reference
export interactions, interaction

# Datasets
include(joinpath(".", "dataset.jl"))

# Networks
include(joinpath(".", "network.jl"))

# Taxonomy backbone(s)
include(joinpath(".", "backbone.jl"))

# Network nodes
include(joinpath(".", "node.jl"))

# Interactions
include(joinpath(".", "interaction.jl"))

# References
include(joinpath(".", "reference.jl"))

end # module
