module MangalTestDataset
    using Mangal
    using Test
    include("setup.jl")

    @assert typeof(datasets()) <: Vector{MangalDataset}
    @assert typeof(dataset(1)) <: MangalDataset

end
