module MangalTestInteractions

    using Mangal
    using Test

    @test typeof(interactions()) <: Vector{MangalInteraction}
    @test typeof(interactions(Pair("type", "mutualism"))) <: Vector{MangalInteraction}

    @test typeof(interactions(:, node(22481))) <: Vector{MangalInteraction}
    @test typeof(interactions(node(22483), :)) <: Vector{MangalInteraction}

    @test typeof(interactions(:, node(22481), Pair("type", "predation"))) <: Vector{MangalInteraction}
    @test typeof(interactions(node(22483), :, Pair("type", "predation"))) <: Vector{MangalInteraction}

    @test typeof(interactions(node(22483), node(22481))) <: Vector{MangalInteraction}
    @test typeof(interactions(node(22483), node(22481), Pair("type", "predation"))) <: Vector{MangalInteraction}

end
