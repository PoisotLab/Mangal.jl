import Base.count

"""
a
"""
function count(::Type{MangalDataset})
    return Mangal.number_of_objects(Mangal.api_endpoints.dataset, nothing)
end

function count(::Type{MangalDataset}, q::Vector{Pair{String,T}}) where {T <: Any}
    return Mangal.number_of_objects(Mangal.api_endpoints.dataset, q)
end


function count(::Type{MangalNetwork})
    return Mangal.number_of_objects(Mangal.api_endpoints.network, nothing)
end

function count(::Type{MangalNetwork}, q::Vector{Pair{String,T}}) where {T <: Any}
    return Mangal.number_of_objects(Mangal.api_endpoints.network, q)
end


function count(::Type{MangalReferenceTaxon})
    return Mangal.number_of_objects(Mangal.api_endpoints.taxonomy, nothing)
end

function count(::Type{MangalReferenceTaxon}, q::Vector{Pair{String,T}}) where {T <: Any}
    return Mangal.number_of_objects(Mangal.api_endpoints.taxonomy, q)
end


function count(::Type{MangalNode})
    return Mangal.number_of_objects(Mangal.api_endpoints.node, nothing)
end

function count(::Type{MangalNode}, q::Vector{Pair{String,T}}) where {T <: Any}
    return Mangal.number_of_objects(Mangal.api_endpoints.node, q)
end


function count(::Type{MangalInteraction})
    return Mangal.number_of_objects(Mangal.api_endpoints.interaction, nothing)
end

function count(::Type{MangalInteraction}, q::Vector{Pair{String,T}}) where {T <: Any}
    return Mangal.number_of_objects(Mangal.api_endpoints.interaction, q)
end
