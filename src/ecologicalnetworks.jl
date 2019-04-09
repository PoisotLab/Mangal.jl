EcologicalNetworks.is_valid_species(::Type{MangalNode}) = true
EcologicalNetworks.is_valid_species(::Type{MangalReferenceTaxon}) = true

function get_all_interactions(n::MangalNetwork, query::Pair...)
    page_size = 250
    network_interactions = MangalInteraction[]
    interactions_to_get = count(MangalInteraction, n, query...)
    pages_to_do = convert(Int64, ceil(interactions_to_get/page_size))
    for page in 1:pages_to_do
        paging_query = ["page" => "$(page-1)", "count" => page_size, query...]
        append!(network_interactions, Mangal.interactions(n, paging_query...))
    end
    return network_interactions
end

import Base.convert

"""
    convert(::Type{EcologicalNetworks.UnipartiteNetwork}, n::MangalNetwork, query::Pair...)

TODO
"""
function convert(::Type{EcologicalNetworks.UnipartiteNetwork}, n::MangalNetwork, query::Pair...)
    all_interactions = Mangal.get_all_interactions(n, query...)
    return convert(EcologicalNetworks.UnipartiteNetwork, all_interactions)
end

"""
    convert(::Type{EcologicalNetworks.UnipartiteNetwork}, n::MangalNetwork, query::Pair...)

TODO
"""
function convert(::Type{EcologicalNetworks.UnipartiteQuantitativeNetwork}, n::MangalNetwork, query::Pair...)
    all_interactions = Mangal.get_all_interactions(n, query...)
    return convert(EcologicalNetworks.UnipartiteQuantitativeNetwork, all_interactions)
end

"""
    convert(::Type{UnipartiteNetwork}, i::Vector{MangalInteraction})

TODO
"""
function convert(::Type{EcologicalNetworks.UnipartiteNetwork}, i::Vector{MangalInteraction})

    all_object_nodes = resolution[]

    for i in network_interactions
        append!(all_object_nodes, [i.from, i.to])
    end

    object_nodes = unique(all_object_nodes)
    S = length(object_nodes)
    A = zeros(Bool, (S,S))
    N = EcologicalNetworks.UnipartiteNetwork(A, object_nodes)
    for i in network_interactions
        if i.strength != 0
            N[i.from, i.to] = true
        end
    end

    return N
end

"""
    convert(::Type{UnipartiteNetwork}, i::Vector{MangalInteraction})

TODO
"""
function convert(::Type{EcologicalNetworks.UnipartiteQuantitativeNetwork}, i::Vector{MangalInteraction})

    all_object_nodes = resolution[]

    for i in network_interactions
        append!(all_object_nodes, [i.from, i.to])
    end

    object_nodes = unique(all_object_nodes)
    S = length(object_nodes)
    A = zeros(Float64, (S,S))
    N = EcologicalNetworks.UnipartiteQuantitativeNetwork(A, object_nodes)
    for i in network_interactions
        if i.strength != 0
            N[i.from, i.to] = convert(Float64, i.strength)
        end
    end

    return N
end
