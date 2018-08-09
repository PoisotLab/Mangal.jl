module MangalTestDataset
    using Mangal
    using Test
    include("test/setup.jl")

    ds_1 = dataset(1)

    @assert tyepof(ds_1) <: MangalDataset

end
