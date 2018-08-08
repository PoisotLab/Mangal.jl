module Mangal

using HTTP
using JSON
using GeoInterface

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

# Basic functions
include(joinpath(".", "basics.jl"))

# Datasets
include(joinpath(".", "dataset.jl"))
export Dataset
export datasets
export dataset

# Networks
include(joinpath(".", "network.jl"))
export Network
export networks
export network

# Taxonomy backbone(s)
include(joinpath(".", "taxonomy.jl"))
export ReferenceTaxon
export backbone

# Interactions

# Network-level taxonomy

end # module
