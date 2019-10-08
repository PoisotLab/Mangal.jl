module MangalTestAttributes
    using Mangal
    using Test
    include("setup.jl")

    @test typeof(attributes()) <: Vector{MangalAttributes}

    n1 = attribute(6)
    @test typeof(n1) <: MangalAttribute

end
