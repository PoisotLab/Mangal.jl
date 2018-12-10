import Base.count

function count(::Type{MangalDataset}, query::Pair...)
    return Mangal.number_of_objects(Mangal.api_endpoints.dataset, query...)
end

function count(::Type{MangalNetwork}, query::Pair...)
    return Mangal.number_of_objects(Mangal.api_endpoints.network, query...)
end

function count(::Type{MangalReferenceTaxon}, query::Pair...)
    return Mangal.number_of_objects(Mangal.api_endpoints.taxonomy, query...)
end

function count(::Type{MangalNode}, query::Pair...)
    return Mangal.number_of_objects(Mangal.api_endpoints.node, query...)
end

function count(::Type{MangalInteraction}, query::Pair...)
    return Mangal.number_of_objects(Mangal.api_endpoints.interaction, query...)
end
