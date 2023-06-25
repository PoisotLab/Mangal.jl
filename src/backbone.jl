"""
    backbone(name::AbstractString)

Returns the backbone entry for a taxon, matched by *exact* name.
"""
function backbone(name::AbstractString)
    q = backbones(Pair("name", name))
    return isequal(1)(length(q)) ? only(q) : nothing
end


@testitem "We can get data from the backbone" begin
    @test typeof(backbones()) <: Vector{MangalReferenceTaxon}
end

@testitem "We can get data from the backbone with a search" begin
    @test typeof(backbones("q" => "Salix")) <: Vector{MangalReferenceTaxon}
end

@testitem "We can get specific taxa from the backbone" begin
    @test backbone(1).name == "Abutilon theophrasti"
    @test backbone("Abutilon theophrasti").id == 1
end

@testitem "We can get paged data from the backbone" begin
    @test length(backbones(Pair("count", 10))) == 10
end