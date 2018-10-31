using Pkg
using Documenter

push!(LOAD_PATH,"../src/")

Pkg.activate(".")
using Mangal

makedocs(
    sitename = "Mangal.jl",
    authors = "Timothée Poisot",
    modules = [Mangal],
    pages = [
        "index.md",
        "Data types" => "types.md",
        "Getting data" => "methods.md",
        "Internal functions" => "internals.md"
    ]
)

deploydocs(
    deps   = Deps.pip("pygments", "python-markdown-math"),
    repo   = "github.com/PoisotLab/Mangal.jl.git",
    devbranch = "master"
)
