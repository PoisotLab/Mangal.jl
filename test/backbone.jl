module MangalTestBackbone
    using Mangal
    using Test
    include("setup.jl")

    # Backbone only
    @test typeof(backbone()) <: Vector{MangalReferenceTaxon}

    @test backbone(1).name == "Abutilon theophrasti"
    @test backbone("Abutilon theophrasti").id == 1

    @test length(backbone([Pair("count", 10)])) == 10

end
