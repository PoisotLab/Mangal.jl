# Counting objects

````julia
using Mangal
````



````julia
count(MangalNetwork)
````


````
1386
````



````julia
Kolpelke_data = first(datasets("q" => "kolpelke"))
````


````
MangalDataset(6, true, "kolpelke_et_al_2017", 1982-06-15T04:00:00, 2019-02-
22T17:25:01, 2019-03-26T16:27:22, MangalReference(6, 2017, "10.1002/ecy.183
2", missing, missing, "@article{Kopelke_2017,doi = {10.1002/ecy.1832},url =
 {https://doi.org/10.1002%2Fecy.1832},year = 2017,month = {may},publisher =
 {Wiley-Blackwell},volume = {98},number = {6},pages = {1730--1730},author =
 {Jens-Peter Kopelke and Tommi Nyman and Kevin Cazelles and Dominique Grave
l and Steve Vissault and Tomas Roslin},title = {Food-web structure of willo
w-galling sawflies and their natural enemies across Europe},journal = {Ecol
ogy}}", "https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1002/ecy.18
32", "https://github.com/TheoreticalEcosystemEcology/reshapeSalix.git"), 3,
 "Food-web structure of willow-galling sawflies and their natural enemies a
cross Europe.")
````



````julia
c = count(MangalNetwork, "dataset_id" => Kolpelke_data.id)
````


````
783
````



````julia
Kolpelke_networks = networks(Kolpelke_data)
page = 0
while length(Kolpelke_networks) < c
  global page = page + 1
  append!(Kolpelke_networks, networks(Kolpelke_data, "page" => page))
end
````



````julia
LS = [(count(MangalInteraction, n), count(MangalNode, n)) for n in Kolpelke_networks]
````


````
Error: MethodError: no method matching iterate(::MangalNetwork)
Closest candidates are:
  iterate(!Matched::Core.SimpleVector) at essentials.jl:568
  iterate(!Matched::Core.SimpleVector, !Matched::Any) at essentials.jl:568
  iterate(!Matched::ExponentialBackOff) at error.jl:199
  ...
````


