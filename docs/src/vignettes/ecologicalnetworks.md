# Integration with `EcologicalNetworks.jl`

````julia
using Mangal
using EcologicalNetworks
````



````julia
db_version = network("johnston_1956_19560101_947")
````


````
MangalNetwork(947, true, "johnston_1956_19560101_947", 1956-01-01T05:00:00,
 GeoInterface.Point([-122.363, 38.0037]), 2019-02-25T20:51:26, 2019-02-25T2
0:51:26, 3, "Predation by short-eared owls on a salicornia salt marsh", fal
se, MangalDataset(14, true, "johnston_1956", 1956-01-01T05:00:00, 2019-02-2
2T21:10:45, 2019-02-22T21:10:45, MangalReference(14, 1956, missing, missing
, missing, "@article{Johnston_1956, ISSN = {00435643}, URL = {http://www.js
tor.org/stable/4158481}, abstract = {The Short-eared Owl is a common winter
 visitant to the salt marshes around San Francisco Bay. Between four and te
n owls live in the winter on the study plot of some 200 acres on San Pablo
salt marsh. The owls forage mainly at night there. Of 638 items found in pe
llets, 75 per cent were mammals, 20 per cent birds, and 5 per cent insects.
 Mammals were responsible for about 90 per cent of the mass consumed, Micro
tus and Rattus being the most important kinds. The relationship of Short-ea
red Owl predation to the community food web is indicated by means of a diag
ram.}, author = {Richard F. Johnston}, journal = {The Wilson Bulletin}, num
ber = {2}, pages = {91--102}, publisher = {Wilson Ornithological Society},
title = {Predation by Short-Eared Owls on a Salicornia Salt Marsh}, volume
= {68}, year = {1956}}", "http://www.jstor.org/stable/4158481", "https://gl
obalwebdb.com/"), 3, "Predation by short-eared owls on a salicornia salt ma
rsh"))
````



````julia
N = convert(UnipartiteNetwork, db_version)
````


````
19×19 unipartite  ecological network (Bool, MangalNode) (L: 58)
````



````julia
count(MangalInteraction, db_version) == links(N)
````


````
true
````



````julia
count(MangalNode, db_version) == richness(N)
````


````
true
````
