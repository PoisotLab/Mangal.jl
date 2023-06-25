"""
    interactions(from::MangalNode, ::Colon, query::Pair...)

Returns interactions established *by* the species given as its first argument.
"""
function interactions(from::MangalNode, ::Colon, query::Pair...)
    return interactions(Pair("node_from", string(from.id)), query...)
end

"""
    interactions(::Colon, to::MangalNode, query::Pair...)

Returns interactions established *to* the species given as its second argument.
"""
function interactions(::Colon, to::MangalNode, query::Pair...)
    return interactions(Pair("node_to", string(to.id)), query...)
end

"""
    interactions(with::MangalNode, query::Pair...)

Returns interactions established *around* the species given as its first argument.
"""
function interactions(with::MangalNode, query::Pair...)
    to = interactions(with, :, query...)
    fr = interactions(:, with, query...)
    append!(to, fr)
    return unique(to)
end

"""
    interactions(from::MangalNode, to::MangalNode, query::Pair...)

Returns interactions between two nodes.
"""
function interactions(from::MangalNode, to::MangalNode, query::Pair...)
    return interactions(Pair("node_from", string(from.id)), Pair("node_to", string(to.id)), query...)
end

"""
    interactions(n::MangalNetwork, query::Pair...)

Returns interactions within a network.
"""
function interactions(n::MangalNetwork, query::Pair...)
    return interactions("network_id" => n.id, query...)
end

@testitem "We can get all interactions" begin
    @test typeof(interactions()) <: Vector{MangalInteraction}
end

@testitem "We can get all interactions by type" begin
    @test typeof(interactions(Pair("type", "mutualism"))) <: Vector{MangalInteraction}
end

@testitem "We can get all interactions to a node" begin
    @test typeof(interactions(:, node(31863))) <: Vector{MangalInteraction}
end

@testitem "We can get all interactions from a node" begin
    @test typeof(interactions(node(31904), :)) <: Vector{MangalInteraction}    
end

@testitem "We can get all interactions to a node by type" begin
    @test typeof(interactions(:, node(31863), Pair("type", "predation"))) <: Vector{MangalInteraction}
end

@testitem "We can get all interactions from a node by type" begin
    @test typeof(interactions(node(31904), :, Pair("type", "predation"))) <: Vector{MangalInteraction}
end

@testitem "We can get interactions between nodes" begin
    @test typeof(interactions(node(31904), node(31863))) <: Vector{MangalInteraction}
end

@testitem "We can get interactions between nodes by type" begin
    @test typeof(interactions(node(31904), node(31863), Pair("type", "predation"))) <: Vector{MangalInteraction}
end
