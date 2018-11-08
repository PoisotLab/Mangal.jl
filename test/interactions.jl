module MangalTestInteractions

    using Mangal
    using Test

    @test typeof(interactions()) <: Vector{MangalInteraction}
    @test typeof(interactions(Pair("type", "mutualism"))) <: Vector{MangalInteraction}

    @test typeof(interactions(:, node(2016))) <: Vector{MangalInteraction}
    @test typeof(interactions(node(2045), :)) <: Vector{MangalInteraction}

    @test typeof(interactions(:, node(2016), Pair("type", "mutualism"))) <: Vector{MangalInteraction}
    @test typeof(interactions(node(2045), :, Pair("type", "mutualism"))) <: Vector{MangalInteraction}

    @test typeof(interactions(node(2045), node(2016))) <: Vector{MangalInteraction}
    @test typeof(interactions(node(2045), node(2016), Pair("type", "mutualism"))) <: Vector{MangalInteraction}

    n2 = network(2)
    @test typeof(interactions(n2)) <: Vector{MangalInteraction}

end
