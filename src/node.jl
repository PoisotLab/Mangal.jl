"""
    nodes(network::MangalNetwork, query::Pair...)

Returns the nodes that are part of a `MangalNetwork`, with an additional optional query.
"""
function nodes(network::MangalNetwork, query::Pair...)
    return nodes(Pair("network_id", network.id), query...)
end

"""
    nodes(taxon::MangalReferenceTaxon, query::Pair...)

Returns the nodes that are instance of a `MangalReferenceTaxon`, with an additional query.
"""
function nodes(taxon::MangalReferenceTaxon, query::Pair...)
    return nodes(Pair("taxonomy_id", taxon.id), query...)
end

@testitem "We can get node data" begin
    @test typeof(nodes()) <: Vector{MangalNode}
end

@testitem "We can get nodes of a network" begin
    N1 = network(19)
    nN1 = nodes(N1)
    @test typeof(nN1) <: Vector{MangalNode}
end


@testitem "We can get taxonomic data in nodes" begin
    n1 = node(2158)
    @test typeof(n1) <: MangalNode
    @test typeof(n1.taxon) <: MangalReferenceTaxon
end

@testitem "We can get nodes from backbone data" begin
    b1 = backbone(1)
    nb1 = nodes(b1)
    @test first(nb1).taxon == b1
end