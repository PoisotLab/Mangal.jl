module MangalTestKnownBugs

    using Mangal
    using EcologicalNetworks
    using Test

    _problematic_ids = [28, 83, 86, 100, 101, 102, 103, 1280, 2463, 2464, 3258, 922, 924, 889, 890, 907, 906, 1516]

    for (idx,netid) in enumerate(_problematic_ids)
        thisnet = Mangal.network(netid)
        @test typeof(thisnet) <: MangalNetwork
        U = convert(UnipartiteNetwork, thisnet) 
        @test tyepof(U) <: UnipartiteNetwork
    end

end
