function _short_desc(s::String)
    return length(s) < 80 ? s : strip(s[1:79]*"…")
end

function Base.show(io::IO, ::MIME"text/plain", dataset::MangalDataset)
    print(io, """Mangal dataset #$(dataset.id) ($(dataset.name))
    → $(_short_desc(dataset.description))""")
end

function Base.show(io::IO, dataset::MangalDataset)
    print(io, """Mangal dataset #$(dataset.id) ($(dataset.name))""")
end

function Base.show(io::IO, ::MIME"text/plain", network::MangalNetwork)
    print(io, """Mangal network #$(network.id) ($(network.name))
    → $(_short_desc(network.description))
    → Part of dataset #$(network.dataset.id) ($(network.dataset.name))
    """)
end

function Base.show(io::IO, network::MangalNetwork)
    print(io, """Mangal network #$(network.id) ($(network.name))""")
end