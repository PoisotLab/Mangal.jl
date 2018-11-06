using Pkg
using Documenter

push!(LOAD_PATH,"../src/")

Pkg.activate(".")
using Mangal

# Compile pages for the database status -- do it locally at first
#=
using Weave
_need_compilation = ["datasets.Jmd", "networks.Jmd"]
for f in _need_compilation
    weave("docs/src/data/"*f, doctype="github")
end
=#

makedocs(
   sitename = "Mangal.jl",
   authors = "Timothée Poisot",
   modules = [Mangal],
   pages = [
      "index.md",
      "Data" => [
         "Datasets" => "data/datasets.md",
         "Networks" => "data/networks.md"
      ],
      "Package documentation" => [
         "Getting data" => "pkg/gettingdata.md",
         "Data types" => "pkg/types.md",
         "Methods for data retrieval" => "pkg/methods.md",
         "Internal functions" => "pkg/internals.md"
      ]
   ]
)

deploydocs(
   deps   = Deps.pip("pygments", "python-markdown-math"),
   repo   = "github.com/PoisotLab/Mangal.jl.git",
   devbranch = "master"
)
