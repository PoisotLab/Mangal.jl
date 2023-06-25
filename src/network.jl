"""
    networks(dataset::MangalDataset, query::Pair...)

Returns networks that are part of a `MangalDataset`. Allows additional query parameters.
"""
function networks(dataset::MangalDataset, query::Pair...)
    return networks(Pair("dataset_id", dataset.id), query...)
end

"""
    network(name::AbstractString)

Returns a network of a given name.
"""
function network(name::AbstractString)
    q = networks(Pair("name", name))
    return isequal(1)(length(q)) ? only(q) : nothing
end

@testitem "We can get networks" begin
    @test typeof(networks()) <: Vector{MangalNetwork} 
end

@testitem "We can get a network by ID" begin
    @test typeof(network(19)) <: MangalNetwork
end

@testitem "We can get a network by name" begin
    @test typeof(network("howking_1968_19680601_12")) <: MangalNetwork
end

@testitem "We can get a network by dataset" begin
    ds = dataset(62)
    n_ds = networks(ds)
    @test typeof(n_ds) <: Vector{MangalNetwork}
end

@testitem "We can get a network by dataset with additional arguments" begin
    ds = dataset(62)
    n_ds_q = networks(ds, Pair("count", 2))
    @test typeof(n_ds_q) <: Vector{MangalNetwork}
    @test length(n_ds_q) == 2
end

@testitem "We can page through multiple network queries" begin
    this_page = 1
    networks_ponisio = networks(dataset("ponisio_2017"), Pair("count", 10), Pair("page", this_page))
    keep_querying = true
    while keep_querying
        global this_page += 1
        response = networks(dataset("ponisio_2017"), Pair("count", 10), Pair("page", this_page))
        append!(networks_ponisio, response)
        global keep_querying = length(response) > 0
    end
    @test length(networks_ponisio) == 131
end