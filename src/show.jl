function _short_desc(s::String)
    return length(s) < 80 ? s : strip(s[1:79]*"…")
end

function Base.show(io::IO, dataset::MangalDataset)
    print(io, """🗃️  Mangal dataset #$(dataset.id) ($(dataset.name))""")
end

function Base.show(io::IO, network::MangalNetwork)
    print(io, """🕸️  Mangal network #$(network.id) ($(network.name))""")
end

function Base.show(io::IO, interaction::MangalInteraction)
    print(io, """🔄  Mangal int° #$(interaction.id): from $(interaction.from.name) to $(interaction.to.name)""")
end

function Base.show(io::IO, user::MangalUser)
    print(io, """🫂  Mangal contributor #$(user.id): $(user.name) - $(user.orcid)""")
end

function Base.show(io::IO, node::MangalNode)
    print(io, """🦝  Mangal node #$(node.id): $(node.name)""")
end

function Base.show(io::IO, taxon::MangalReferenceTaxon)
    print(io, """🌲  Mangal taxon #$(taxon.id): $(taxon.name)""")
end