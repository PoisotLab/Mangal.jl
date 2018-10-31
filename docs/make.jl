using Pkg
using Documenter

push!(LOAD_PATH,"../src/")

Pkg.activate(".")
using Mangal

makedocs(
    sitename = "Mangal.jl",
    modules = [Mangal]
)

deploydocs(
    deps   = Deps.pip("pygments", "mkdocs", "python-markdown-math"),
    repo   = "github.com/PoisotLab/Mangal.jl.git",
    devbranch = "master"
)
