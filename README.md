### Mangal.jl

[![Build Status](https://travis-ci.org/PoisotLab/Mangal.jl.svg?branch=master)](https://travis-ci.org/PoisotLab/Mangal.jl) [![Coverage Status](https://coveralls.io/repos/github/PoisotLab/Mangal.jl/badge.svg?branch=master)](https://coveralls.io/github/PoisotLab/Mangal.jl?branch=master)

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
