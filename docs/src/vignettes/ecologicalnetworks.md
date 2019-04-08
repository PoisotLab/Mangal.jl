# Integration with `EcologicalNetworks.jl`

The **Mangal** package is integrated with **EcologicalNetworks** for analysis.

````julia
using Mangal
using EcologicalNetworks
````





## A simple example

In this simple example, we will look at a food web from 1956, retrieve it from
the Mangal database, then convert it into a usable object:

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





The conversion to the network is done using the `convert` method, which by
default will return a `UnipartiteNetwork`, where species are the `MangalNode` of
the original network:

````julia
N = convert(UnipartiteNetwork, db_version)
````


````
19×19 unipartite  ecological network (Bool, MangalNode) (L: 58)
````





We can check that the type of the network is correct:

````julia
eltype(N)
````


````
(Bool, MangalNode)
````





## Sanity check

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



````julia
species(N)
````


````
19-element Array{MangalNode,1}:
 MangalNode(8470, "Rattus", 2019-02-25T20:52:25, 2019-02-25T20:52:25, Manga
lReferenceTaxon(3810, "Rattus", 3156, 135059, 10114, 12221616, missing, 201
9-02-22T14:05:53, 2019-02-22T14:05:53))                  
 MangalNode(8456, "terrestrial invertebrates", 2019-02-25T20:52:25, 2019-02
-25T20:52:25, missing)                                                     
                                                         
 MangalNode(8473, "terrestrial plants", 2019-02-25T20:52:25, 2019-02-25T20:
52:25, missing)                                                            
                                                         
 MangalNode(8457, "intertidal invertebrates", 2019-02-25T20:52:25, 2019-02-
25T20:52:25, missing)                                                      
                                                         
 MangalNode(8474, "marine plants", 2019-02-25T20:52:25, 2019-02-25T20:52:25
, missing)                                                                 
                                                         
 MangalNode(8459, "fishes", 2019-02-25T20:52:25, 2019-02-25T20:52:25, missi
ng)                                                                        
                                                         
 MangalNode(8458, "marine invertebrates", 2019-02-25T20:52:25, 2019-02-25T2
0:52:25, missing)                                                          
                                                         
 MangalNode(8461, "herons", 2019-02-25T20:52:25, 2019-02-25T20:52:25, Manga
lReferenceTaxon(4346, "Ardeidae", 1444, 174771, 8899, 11144384, missing, 20
19-02-23T16:25:14, 2019-02-23T16:25:14))                 
 MangalNode(8463, "Anas", 2019-02-25T20:52:25, 2019-02-25T20:52:25, MangalR
eferenceTaxon(3803, "Anas", 3235, 5914, 8835, 10254288, missing, 2019-02-22
T14:05:52, 2019-02-22T14:05:52))                         
 MangalNode(8462, "Rallus", 2019-02-25T20:52:25, 2019-02-25T20:52:25, Manga
lReferenceTaxon(3802, "Rallus", 3288, 113088, 54360, 5730650, missing, 2019
-02-22T14:05:52, 2019-02-22T14:05:52))                   
 MangalNode(8465, "waterfowl", 2019-02-25T20:52:25, 2019-02-25T20:52:25, Ma
ngalReferenceTaxon(3805, "Waterfowl", missing, 174982, 8830, missing, missi
ng, 2019-02-22T14:05:52, 2019-02-22T14:05:52))           
 MangalNode(8464, "migrant shorebirds", 2019-02-25T20:52:25, 2019-02-25T20:
52:25, missing)                                                            
                                                         
 MangalNode(8466, "passerines", 2019-02-25T20:52:25, 2019-02-25T20:52:25, M
angalReferenceTaxon(4985, "Passeriformes", 321, 178265, 9126, 11144180, mis
sing, 2019-02-25T20:51:32, 2019-02-25T20:51:32))         
 MangalNode(8468, "Reithrodontomys", 2019-02-25T20:52:25, 2019-02-25T20:52:
25, MangalReferenceTaxon(3808, "Reithrodontomys", 73424, 180344, 44233, 731
2617, missing, 2019-02-22T14:05:53, 2019-02-22T14:05:53))
 MangalNode(8467, "Microtus", 2019-02-25T20:52:25, 2019-02-25T20:52:25, Man
galReferenceTaxon(3807, "Microtus", 6899, 180300, 10053, 7245360, missing, 
2019-02-22T14:05:52, 2019-02-22T14:05:52))               
 MangalNode(8469, "Mus", 2019-02-25T20:52:25, 2019-02-25T20:52:25, MangalRe
ferenceTaxon(3809, "Mus", 6916, 856, 10088, 12091880, missing, 2019-02-22T1
4:05:53, 2019-02-22T14:05:53))                           
 MangalNode(8472, "Asio", 2019-02-25T20:52:25, 2019-02-25T20:52:25, MangalR
eferenceTaxon(3812, "Asio", 4888, 6396, 56266, 10197460, missing, 2019-02-2
2T14:05:53, 2019-02-22T14:05:53))                        
 MangalNode(8460, "Sorex", 2019-02-25T20:52:25, 2019-02-25T20:52:25, Mangal
ReferenceTaxon(3800, "Sorex", 3032, 179928, 9379, 6984339, missing, 2019-02
-22T14:05:52, 2019-02-22T14:05:52))                      
 MangalNode(8471, "Circus", 2019-02-25T20:52:25, 2019-02-25T20:52:25, Manga
lReferenceTaxon(3811, "Circus", 4452, 175433, 8963, 11145902, missing, 2019
-02-22T14:05:53, 2019-02-22T14:05:53))
````



````julia
[s.taxon for s in species(N)]
````


````
19-element Array{Union{Missing, MangalReferenceTaxon},1}:
 MangalReferenceTaxon(3810, "Rattus", 3156, 135059, 10114, 12221616, missin
g, 2019-02-22T14:05:53, 2019-02-22T14:05:53)         
 missing                                                                   
                                                     
 missing                                                                   
                                                     
 missing                                                                   
                                                     
 missing                                                                   
                                                     
 missing                                                                   
                                                     
 missing                                                                   
                                                     
 MangalReferenceTaxon(4346, "Ardeidae", 1444, 174771, 8899, 11144384, missi
ng, 2019-02-23T16:25:14, 2019-02-23T16:25:14)        
 MangalReferenceTaxon(3803, "Anas", 3235, 5914, 8835, 10254288, missing, 20
19-02-22T14:05:52, 2019-02-22T14:05:52)              
 MangalReferenceTaxon(3802, "Rallus", 3288, 113088, 54360, 5730650, missing
, 2019-02-22T14:05:52, 2019-02-22T14:05:52)          
 MangalReferenceTaxon(3805, "Waterfowl", missing, 174982, 8830, missing, mi
ssing, 2019-02-22T14:05:52, 2019-02-22T14:05:52)     
 missing                                                                   
                                                     
 MangalReferenceTaxon(4985, "Passeriformes", 321, 178265, 9126, 11144180, m
issing, 2019-02-25T20:51:32, 2019-02-25T20:51:32)    
 MangalReferenceTaxon(3808, "Reithrodontomys", 73424, 180344, 44233, 731261
7, missing, 2019-02-22T14:05:53, 2019-02-22T14:05:53)
 MangalReferenceTaxon(3807, "Microtus", 6899, 180300, 10053, 7245360, missi
ng, 2019-02-22T14:05:52, 2019-02-22T14:05:52)        
 MangalReferenceTaxon(3809, "Mus", 6916, 856, 10088, 12091880, missing, 201
9-02-22T14:05:53, 2019-02-22T14:05:53)               
 MangalReferenceTaxon(3812, "Asio", 4888, 6396, 56266, 10197460, missing, 2
019-02-22T14:05:53, 2019-02-22T14:05:53)             
 MangalReferenceTaxon(3800, "Sorex", 3032, 179928, 9379, 6984339, missing, 
2019-02-22T14:05:52, 2019-02-22T14:05:52)            
 MangalReferenceTaxon(3811, "Circus", 4452, 175433, 8963, 11145902, missing
, 2019-02-22T14:05:53, 2019-02-22T14:05:53)
````


