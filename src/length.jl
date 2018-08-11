import Base.length

function length(::Type{MangalDataset})
    return number_of_objects(Mangal.api_endpoints.dataset, nothing)
end

function length(::Type{MangalNetwork})
    return number_of_objects(Mangal.api_endpoints.network, nothing)
end

function length(::Type{MangalReferenceTaxon})
    return number_of_objects(Mangal.api_endpoints.taxonomy, nothing)
end

function length(::Type{MangalNode})
    return number_of_objects(Mangal.api_endpoints.node, nothing)
end
