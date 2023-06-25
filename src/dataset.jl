"""
    dataset(name::AbstractString)

Return a single dataset by its name.
"""
function dataset(name::AbstractString)
    q = datasets(Pair("name", name))
    return isequal(1)(length(q)) ? only(q) : nothing
end

@testitem "We can get dataset data" begin
    @test typeof(datasets()) <: Vector{MangalDataset}

    # Datasets with count
    count_2 = datasets(Pair("count", 2))
    @test typeof(count_2) <: Vector{MangalDataset}
    @test length(count_2) == 2

    # Dataset by id
    @test typeof(dataset(1)) <: MangalDataset

    # Dataset by name
    @test typeof(dataset("roberson_1929")) <: MangalDataset

    @test isnothing(dataset("This_DOESNOT_exist"))
end