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
