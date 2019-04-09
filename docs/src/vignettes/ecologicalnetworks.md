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
db_version = network("johnston_1956_19560101_947");
db_version.description
````


````
"Predation by short-eared owls on a salicornia salt marsh"
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





We can also confirm that all interactions and node counts match:

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





## A more complex example

In this

````julia
hp_dataset = dataset("hadfield_2014");
hp_networks = networks(hp_dataset);
````





The next step might take a minute or two, but will consist in downloading every
information related to the network, and converting it into one
`UnipartiteNetwork` for every network in the dataset.

````julia
N = [convert(UnipartiteNetwork, n) for n in hp_networks];
````





Note that the previous step could use queries too, so it would be possible to
restrict the interactions to, *e.g.* a certain type, for networks with multiple
interaction types.

````julia
B = [convert(BipartiteNetwork, n) for n in N];
````



````julia
using Plots
histogram(η.(B), frame=:box, c=:white)
xaxis!("Nestedness", (0,1))
yaxis!("", (0, 25))
````


![](figures/ecologicalnetworks_10_1.png)



## Building custom networks

Converting to a network is *always* a wrapper around converting an array of
interactions. Let's imagine that we are interested in representing the network
of species that either consume, or are consumed by, salmonids. The first step
will be to retrieve the `MangalReferenceTaxon` that correspond to these species:

````julia
salmonids = backbones("q" => "Salmo")
````


````
5-element Array{MangalReferenceTaxon,1}:
 MangalReferenceTaxon(4173, "Salmo trutta", 47318, 161997, 8032, 10237843, 
missing, 2019-02-22T22:40:06, 2019-02-22T22:40:06)      
 MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 857570, mis
sing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12)
 MangalReferenceTaxon(4286, "Salmoninae", 71162, 623286, 504568, missing, m
issing, 2019-02-23T03:04:02, 2019-02-23T03:04:02)       
 MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, mis
sing, 2019-02-27T04:10:07, 2019-02-27T04:10:07)         
 MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 11144931, m
issing, 2019-03-19T19:16:54, 2019-03-19T19:16:54)
````





For every `MangalReferenceTaxon`, we need to retrieve its number of `MangalNode`
-- let's see how many there are, using the shorthand `count` method for this:

````julia
count.(MangalNode, salmonids)
````


````
5-element Array{Int64,1}:
 12
  1
  1
  5
  1
````





Since none of these are very high, we can retrieve the nodes directly:


````julia
salmonids_nodes = vcat(nodes.(salmonids)...);
````





At this point, we may want to count the number of interactions for all of the
nodes, but let us (for the sake of simplicity) trust that there are fewer than
500 in all cases:

````julia
all_int = [Mangal.interactions(salmo, "count" => 500) for salmo in salmonids_nodes];
salmonids_interactions = vcat(all_int...);
````





At this point, we end up with a `Vector{MangalInteraction}`, *i.e.* an array of
interactions.

An interesting consequence of this approach is that we now can look at all the
datasets that are part of this query, and *e.g.* retrieve their DOI:

````julia
salmonids_datasets = unique([i.network.dataset for i in salmonids_interactions])
[d.reference.doi for d in salmonids_datasets]
````


````
9-element Array{Union{Missing, String},1}:
 missing                          
 "10.1126/science.257.5073.1107"  
 "10.2307/1604"                   
 missing                          
 "10.1080/00288330.2004.9517265"  
 "10.1016/j.ecolmodel.2010.10.024"
 missing                          
 "10.1016/j.pocean.2012.02.002"   
 "10.2307/1599"
````





Finally, the array of interactions can be converted into a `UnipartiteNetwork`:

````julia
salmonid_network = convert(UnipartiteNetwork, salmonids_interactions)
````


````
408×408 unipartite  ecological network (Bool, MangalNode) (L: 406)
````





Get the taxa

````julia
salmonid_resolved_network = taxonize(salmonid_network)
````


````
59×59 unipartite  ecological network (Bool, MangalReferenceTaxon) (L: 57)
````





show interactions

````julia
for i in salmonid_resolved_network
  println(i)
end
````


````
(from = MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 8575
70, missing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12), to = Manga
lReferenceTaxon(4067, "Salvelinus fontinalis", 10563, 162003, 8038, 6985369
, missing, 2019-02-22T22:39:54, 2019-02-22T22:39:54))
(from = MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 8575
70, missing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12), to = Manga
lReferenceTaxon(4123, "Semotilus atromaculatus", 56066, missing, 67558, 709
7587, missing, 2019-02-22T22:40:01, 2019-02-22T22:40:01))
(from = MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 8575
70, missing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12), to = Manga
lReferenceTaxon(4124, "Catostomus commersoni", missing, 553273, 7971, missi
ng, missing, 2019-02-22T22:40:01, 2019-02-22T22:40:01))
(from = MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 8575
70, missing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12), to = Manga
lReferenceTaxon(4262, "Rhinichthys atratulus", 50653, 641826, 67556, 709807
2, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12))
(from = MangalReferenceTaxon(4173, "Salmo trutta", 47318, 161997, 8032, 102
37843, missing, 2019-02-22T22:40:06, 2019-02-22T22:40:06), to = MangalRefer
enceTaxon(7044, "Diporeia", 5311, 657298, 399978, 29978385, missing, 2019-0
3-20T18:16:21, 2019-03-20T18:16:21))
(from = MangalReferenceTaxon(4173, "Salmo trutta", 47318, 161997, 8032, 102
37843, missing, 2019-02-22T22:40:06, 2019-02-22T22:40:06), to = MangalRefer
enceTaxon(4587, "Benthos", missing, 162681, missing, missing, missing, 2019
-02-24T16:37:01, 2019-02-24T16:37:01))
(from = MangalReferenceTaxon(4173, "Salmo trutta", 47318, 161997, 8032, 102
37843, missing, 2019-02-22T22:40:06, 2019-02-22T22:40:06), to = MangalRefer
enceTaxon(7045, "Mysis", 5739, 89866, 261863, 11329839, missing, 2019-03-20
T18:16:21, 2019-03-20T18:16:21))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(5298, "Osmeridae", 1294, 162028, 8012, 11154829, missing, 2019-02-27
T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4173, "Salmo trutta", 47318, 161997, 8032, 102
37843, missing, 2019-02-22T22:40:06, 2019-02-22T22:40:06), to = MangalRefer
enceTaxon(7047, "Alosa pseudoharengus", 50261, 161706, 34774, 12817340, mis
sing, 2019-03-20T18:16:21, 2019-03-20T18:16:21))
(from = MangalReferenceTaxon(4173, "Salmo trutta", 47318, 161997, 8032, 102
37843, missing, 2019-02-22T22:40:06, 2019-02-22T22:40:06), to = MangalRefer
enceTaxon(7046, "Cottoidea", missing, 643429, missing, 26051875, missing, 2
019-03-20T18:16:21, 2019-03-20T18:16:21))
(from = MangalReferenceTaxon(4067, "Salvelinus fontinalis", 10563, 162003, 
8038, 6985369, missing, 2019-02-22T22:39:54, 2019-02-22T22:39:54), to = Man
galReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 857570, missing
, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12))
(from = MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 8575
70, missing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12), to = Manga
lReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 857570, missing, 
missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12))
(from = MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 8575
70, missing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12), to = Manga
lReferenceTaxon(4256, "Semotilus corporalis", 50655, 163375, 520992, 709759
2, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12))
(from = MangalReferenceTaxon(4261, "Salmo gairdneri", missing, 161991, 8575
70, missing, missing, 2019-02-22T22:40:12, 2019-02-22T22:40:12), to = Manga
lReferenceTaxon(4196, "Notropis cornutus", missing, 163837, missing, missin
g, missing, 2019-02-22T22:40:07, 2019-02-22T22:40:07))
(from = MangalReferenceTaxon(4286, "Salmoninae", 71162, 623286, 504568, mis
sing, missing, 2019-02-23T03:04:02, 2019-02-23T03:04:02), to = MangalRefere
nceTaxon(4279, "Mugilidae", 1863, missing, 8189, 11160642, missing, 2019-02
-23T03:03:56, 2019-02-23T03:03:56))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-2
7T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4882, "Oncorhynchus kisutch", 23772, 161977, 8
019, 6985637, missing, 2019-02-25T01:41:19, 2019-02-25T01:41:19), to = Mang
alReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing,
 2019-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4957, "Sebastes", 3990, 166709, 34820, 1209067
3, missing, 2019-02-25T03:01:12, 2019-02-25T03:01:12), to = MangalReference
Taxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-27
T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4603, "Cephalopoda", 24, 82326, 6605, 8148342,
 missing, 2019-02-24T16:48:20, 2019-02-24T16:48:20), to = MangalReferenceTa
xon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-27T0
4:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4883, "Oncorhynchus tshawytscha", 10566, 16198
0, 74940, 6985631, missing, 2019-02-25T01:41:19, 2019-02-25T01:41:19), to =
 MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, mis
sing, 2019-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4458, "Selachimorpha", missing, 159787, missin
g, missing, missing, 2019-02-24T14:22:40, 2019-02-24T14:22:40), to = Mangal
ReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2
019-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5308, "Trachurus symmetricus", 58295, 168586, 
271940, 7227883, missing, 2019-02-27T04:10:08, 2019-02-27T04:10:08), to = M
angalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missi
ng, 2019-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5309, "Squalus", 2982, 159825, 7796, 10173354,
 missing, 2019-02-27T04:10:08, 2019-02-27T04:10:08), to = MangalReferenceTa
xon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-27T0
4:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5306, "Phycidae", missing, 954918, 163113, 111
89480, missing, 2019-02-27T04:10:08, 2019-02-27T04:10:08), to = MangalRefer
enceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-0
2-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4885, "Anoplopoma fimbria", 13145, 167123, 229
290, 7318538, missing, 2019-02-25T01:41:19, 2019-02-25T01:41:19), to = Mang
alReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing,
 2019-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4717, "Flatfish", missing, 616308, missing, mi
ssing, missing, 2019-02-24T20:15:17, 2019-02-24T20:15:17), to = MangalRefer
enceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-0
2-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5320, "Ardenna grisea", 745422, missing, 37052
, 5741633, missing, 2019-02-27T04:10:09, 2019-02-27T04:10:09), to = MangalR
eferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 20
19-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5317, "Uria aalge", 10149, 825157, 13746, 5743
654, missing, 2019-02-27T04:10:09, 2019-02-27T04:10:09), to = MangalReferen
ceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-
27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(3789, "Laridae", 1425, 176802, 8910, 11144210,
 missing, 2019-02-22T13:50:01, 2019-02-22T13:50:01), to = MangalReferenceTa
xon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-27T0
4:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5318, "Alcidae", 1434, missing, 28683, 1114472
3, missing, 2019-02-27T04:10:09, 2019-02-27T04:10:09), to = MangalReference
Taxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-27
T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4337, "Aves", 51, 6472, 8782, 11144181, missin
g, 2019-02-23T14:59:23, 2019-02-23T14:59:23), to = MangalReferenceTaxon(530
0, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-27T04:10:07
, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4307, "Phocidae", 1352, missing, 9709, 1114580
2, missing, 2019-02-23T14:12:12, 2019-02-23T14:12:12), to = MangalReference
Taxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02-27
T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4452, "Procellariiformes", 337, 174512, 30449,
 11145044, missing, 2019-02-24T00:46:09, 2019-02-24T00:46:09), to = MangalR
eferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 20
19-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5322, "Mysticeti", missing, missing, 9761, mis
sing, missing, 2019-02-27T04:10:10, 2019-02-27T04:10:10), to = MangalRefere
nceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02
-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(4585, "Odontoceti", missing, 180404, 9722, 698
3251, missing, 2019-02-24T16:29:52, 2019-02-24T16:29:52), to = MangalRefere
nceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-02
-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5310, "Hexagrammidae", 1301, 167108, 30983, 12
090594, missing, 2019-02-27T04:10:08, 2019-02-27T04:10:08), to = MangalRefe
renceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, missing, 2019-
02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5313, "Metacarcinus magister", 201717, missing
, 29965, 6993465, missing, 2019-02-27T04:10:09, 2019-02-27T04:10:09), to = 
MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 11144860, miss
ing, 2019-02-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(4441, "Copepods", missing, 85257, 6830, missing, missing, 2019-02-24
T00:46:08, 2019-02-24T00:46:08))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(4436, "Amphipoda", 326, 93294, 6821, 11145213, missing, 2019-02-23T2
1:33:16, 2019-02-23T21:33:16))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(5291, "Medusozoa", missing, 718920, missing, missing, missing, 2019-
02-27T04:10:06, 2019-02-27T04:10:06))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(5296, "Pacifica", 604121, 3579, missing, 7506476, missing, 2019-02-2
7T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(5297, "Spinifera", 129812, 56363, missing, 7632531, missing, 2019-02
-27T04:10:07, 2019-02-27T04:10:07))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(4371, "Clupeidae", 1252, missing, 55118, 11156554, missing, 2019-02-
23T17:04:36, 2019-02-23T17:04:36))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(4469, "Engraulidae", 1264, 553173, 43062, 11182217, missing, 2019-02
-24T14:22:41, 2019-02-24T14:22:41))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(4903, "Mysida", 79190, 90740, 75399, 11158178, missing, 2019-02-25T0
2:11:30, 2019-02-25T02:11:30))
(from = MangalReferenceTaxon(5300, "Salmonidae", 1340, 161931, 8015, 111448
60, missing, 2019-02-27T04:10:07, 2019-02-27T04:10:07), to = MangalReferenc
eTaxon(4551, "Isopoda", 330, 788242, 29979, 12193206, missing, 2019-02-24T1
5:32:46, 2019-02-24T15:32:46))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(6436, "Baetis", 5677, 100808, 189838, 11819586, missing, 2019-03-1
1T16:11:05, 2019-03-11T16:11:05))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(1543, "Chironomidae", 1882, 127917, 7149, 57361551, missing, 2019-
02-21T22:09:54, 2019-02-21T22:09:54))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(6476, "Leuctra", 2147, 102852, 143734, 13044131, missing, 2019-03-
12T17:52:25, 2019-03-12T17:52:25))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(4301, "Diatoms", missing, 2287, 2836, missing, missing, 2019-02-23
T03:35:42, 2019-02-23T03:35:42))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(5915, "Desmidiales", 413967, 954933, 131210, 21472563, missing, 20
19-03-06T14:49:49, 2019-03-06T14:49:49))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(4309, "Algae", missing, 9417, 131213, 7531206, missing, 2019-02-23
T14:12:12, 2019-02-23T14:12:12))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(5910, "Ephemeroptera", 405, 100502, 30073, 11819584, missing, 2019
-03-06T14:49:48, 2019-03-06T14:49:48))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(7001, "Chimarra marginata", 107271, 115284, 338476, 13482535, miss
ing, 2019-03-19T19:16:53, 2019-03-19T19:16:53))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(4339, "Protozoa", missing, 46140, missing, 11147850, missing, 2019
-02-23T16:25:12, 2019-02-23T16:25:12))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(7005, "Micronecta poweri", 490848, missing, 1545165, 14531528, mis
sing, 2019-03-19T19:16:54, 2019-03-19T19:16:54))
(from = MangalReferenceTaxon(7015, "Salmo salar", 30453, 161996, 8030, 1114
4931, missing, 2019-03-19T19:16:54, 2019-03-19T19:16:54), to = MangalRefere
nceTaxon(1529, "Collembola", 372, 914185, 30001, 59978048, missing, 2019-02
-21T22:09:53, 2019-02-21T22:09:53))
````


