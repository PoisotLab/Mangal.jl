function count(::Type{MangalNetwork}, d::MangalDataset, query::Pair...)
    return count(MangalNetwork, "dataset_id" => d.id, query...)
end

function count(::Type{MangalInteraction}, n::MangalNetwork, query::Pair...)
    return count(MangalInteraction, "network_id" => n.id, query...)
end

function count(::Type{MangalNode}, n::MangalNetwork, query::Pair...)
    return count(MangalNode, "network_id" => n.id, query...)
end
