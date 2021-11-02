module MangalTestUsers

    using Mangal
    using Test

    @test typeof(users()) <: Vector{MangalUser}
    
end
