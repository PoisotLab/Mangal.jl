module MangalTestNodes
    using Mangal
    using Test
    include("setup.jl")

    @test typeof(nodes()) <: Vector{MangalNode}

end
