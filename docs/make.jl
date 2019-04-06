using Pkg
using Documenter

push!(LOAD_PATH,"../src/")

Pkg.activate(".")
using Mangal

_pkg_doc = [
   "Getting data" => "pkg/gettingdata.md",
   "Data types" => "pkg/types.md",
   "Methods for data retrieval" => "pkg/methods.md",
   "Internal functions" => "pkg/internals.md"
]

_pkg_vig = [
   "Introduction" => "vignettes/introduction.md"
]

_list_of_pages = [
   "index.md",
   "Vignettes" => _pkg_vig,
   "Package documentation" => _pkg_doc
]

makedocs(
   sitename = "Mangal.jl",
   authors = "Timothée Poisot",
   modules = [Mangal],
   pages = _list_of_pages
)

deploydocs(
   deps   = Deps.pip("pygments", "python-markdown-math"),
   repo   = "github.com/PoisotLab/Mangal.jl.git",
   devbranch = "master"
)
