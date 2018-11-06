#=

This file will generate multiple md files, both from Jmd, and from Mustache
templates. In a nutshell, it will serve the data as a static website, and give
information about how to get them from the package.

=#

push!(LOAD_PATH,"../src/")

using Pkg
Pkg.activate(".")

using Mangal
using Weave
using Mustache

_path_elements = ["docs", "src", "data"]
_jmd_files = filter(x -> endswith(x, ".Jmd"), readdir(joinpath(_path_elements...)))
_files_to_compile = [joinpath(_path_elements..., f) for f in _jmd_files]

for _file in _files_to_compile
    weave(_file, doctype="github")
end
