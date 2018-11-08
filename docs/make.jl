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

function format_dsname(x)
   x = replace(x, "dataset_" => "")
   x = replace(x, ".md" => "")
   x = replace(x, "_" => " ")
   return titlecase(x)
end

_path_elements = ["docs", "src", "data", "dataset"]
_dataset_files = filter(x -> endswith(x, ".md"), readdir(joinpath(_path_elements...)))
_files_to_include = [hide(format_dsname(f) => joinpath("data", "dataset", f)) for f in _dataset_files]

_list_of_pages = [
   "index.md",
   "Data list" => "data/index.md",
   hide("Dataset details" => _files_to_include),
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
