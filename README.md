### Mangal.jl

[![Build Status](https://travis-ci.org/PoisotLab/Mangal.jl.svg?branch=master)](https://travis-ci.org/PoisotLab/Mangal.jl) [![Coverage Status](https://coveralls.io/repos/github/PoisotLab/Mangal.jl/badge.svg?branch=master)](https://coveralls.io/github/PoisotLab/Mangal.jl?branch=master)
[![Manual](https://img.shields.io/badge/manual-latest-orange.svg)](http://poisotlab.io/Mangal.jl/latest/)

This package is a wrapper around the *new* API for the mangal ecological
interactions database. It uses [Julia 1.0][jl] to provide a programmatic
interface to *read* the data. Development of this package and the underlying
database was funded by the [Canadian Foundation for Innovation][cfi].

[cfi]: https://www.innovation.ca/

[jl]: https://julialang.org/

#### Short introduction

This version is currently *not* tagged, you can install the package from the Pkg
mode (`]`) with:

~~~
add https://github.com/PoisotLab/Mangal.jl
~~~


Read access to the data currently requires to use ORCID -- to get the instructions,

~~~ julia
using Mangal
Mangal.login()
~~~

To get a list of datasets,

~~~ julia
datasets()
~~~

To get networks within a given dataset,

~~~ julia
networks(dataset(10))
~~~

#### Counting objects

~~~ julia
using Mangal

base_q = ["type" => "parasitism"]

n_parasitism = count(MangalInteraction, base_q)
page_size = 200
n_pages = ceil(n_parasitism/page_size)
parasitism_int = MangalInteraction[]
@progress for p in 1:n_pages
    @info "Starting page $p"
    paging_q = ["count" => "$page_size", "page" => "$p"]
    append!(paging_q, base_q)
    append!(parasitism_int, interactions(paging_q))
    @info "Page $p -- $length(parasitism_int) done"
end
~~~
