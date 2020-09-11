---
title: 'Mangal.jl and EcologicalNetworks.jl: Two complementary packages for analyzing ecological networks in Julia'
tags:
  - Julia
  - ecological networks
  - food webs
  - species interactions
  - ecological database

authors:
  - name: Francis Banville^[corresponding author]
    orcid: 0000-0001-9051-0597
    affiliation: "1, 2" # (Multiple affiliations must be quoted)
  - name: Steve Vissault
    orcid: 0000-0002-0866-4376
    affiliation: 2
  - name: Gabriel Dansereau
    orcid: 0000-0002-2212-3584
    affiliation: 1
  - name: Timothée Poisot
    orcid: 0000-0002-0735-5184
    affiliation: 1
affiliations:
 - name: Department of biology, Université de Montréal, Canada
   index: 1
 - name: Department of biology, Université de Sherbrooke, Canada
   index: 2
date: 14 September 2020
bibliography: paper.bib
---


# Summary
Network ecology is an emerging field of study describing species interactions (e.g. predation, pollination) in a biological community. Ecological networks, in which two species are connected if they can interact, are a mathematical representation of all interactions encountered in a given ecosystem. Anchored in graph theory, the methods developed in network ecology are remarkably rigorous and biologically insightful. Indeed, many ecological and evolutionary processes are driven by species interactions and network structure (i.e. the arrangement of links in ecological networks). The study of ecological networks, from data importation and simulation to data analysis and visualization, requires a coherent and efficient set of numerical tools. With its powerful and dynamic type system, the Julia programming language provides a very good computing environment suitable for ecological research. `Mangal.jl` and `EcologicalNetworks.jl` are two novel and complementary Julia packages designed to conduct these numerical analysis efficiently.

# Statement of need


# Mangal.jl

## Use case 1: Association between the number of species and the number of links

Understanding how the number of interactions scales with the number of species is fundamental in ecology. This relationship has recently been revisited using all food webs archived on `mangal.io` [@MacDBanv20a], making it, to the best of our knowledge, the most extensive study of such relationship so far. The block of code below read relevant metadata from `mangal.io` to conduct this analysis on all types of ecological networks.

We first retrieved all networks archived on the database, which returned objects of type `MangalNetwork`. We then counted the number of species $S$ and the total number of interactions $L$ in each network, as well as their numbers of interactions of predation, of herbivory, of mutualism, and of parasitism. These information were stored in a data frame along with the ID numbers of the networks.

```julia

using Mangal
using DataFrames

number_of_networks = count(MangalNetwork)
count_per_page = 100
number_of_pages = convert(Int,
                        ceil(number_of_networks/count_per_page))

mangal_networks = DataFrame(fill(Int64, 7),
                 [:id, :S, :L, :pred, :herb, :mutu, :para],
                 number_of_networks)

global cursor = 1
@progress "Paging networks" for page in 1:number_of_pages
    global cursor
    networks_in_page = Mangal.networks("count"=>count_per_page,
                                       "page"=>page-1)
    @progress "Counting items" for current_network
                               in networks_in_page
        S = count(MangalNode, current_network)
        L = count(MangalInteraction, current_network)
        pred = count(MangalInteraction, current_network,
                     "type"=>"predation")
        herb = count(MangalInteraction, current_network,
                     "type"=>"herbivory")
        mutu = count(MangalInteraction, current_network,
                     "type"=>"mutualism")
        para = count(MangalInteraction, current_network,
                     "type"=>"parasitism")
        mangal_networks[cursor,:] .= (current_network.id,
                                 S, L, pred, herb, mutu, para)
        cursor = cursor + 1
    end
end
```

The association between the number of species $S$ and the total number of links $L$ is plotted in \autoref{fig:LS}. We classified all networks according to their most frequent type of links, and considered interactions of predation and of herbivory as food-web interactions. Networks in the "other types" category include interactions between competitors, symbiotes, scavengers, and detritivores, among others. Very small networks (i.e. with less than 5 interactions) were discarded.  

![Association between the number of species (nodes) and the number of links (edges) in ecological networks archived on `mangal.io`. Networks with less than 5 interactions were discarded. Different types of interactions can be listed within the same network. We classified all networks according to their most frequent type of interactions. The code to reproduce the figure is included in this paper's repository.\label{fig:LS}](fig/LS.png)


# EcologicalNetworks.jl

## Use case 2: Association between meaningful network measures

Connectance (i.e. the proportion of all possible links that are realized) is undoubtedly one of the most studied and important measure of ecological networks [@PoisGrav14]. A network's connectance is the result of many ecological processes, and predicts how a biological community functions and responds to changes [@DunnWill02c; @DunnWill02d]. Connectance is furthermore associated with other network measures, including nestedness and modularity [@DelmBess19]. A network is nested when species that interact with specialists (i.e. species with few interactions) are a subset of the species that interact with generalists (i.e. species with many interactions). On the other hand, a network is modular when species are organized in groups of highly interacting species. @FortStou10 showed how these two quantities were associated in ecological networks. Here we show how `EcologicalNetworks.jl` can be used in conjunction with `Mangal.jl` to retrieve these associations in food webs.

We read networks metadata from `mangal.io` using the code in the previous section, and selected networks we classified as food webs. We then used their ID numbers to import all their data from `mangal.io`, which again returned objects of type `MangalNetwork`. Since food-web measures are typically computed on objects of type `UnipartiteNetwork`, we used `EcologicalNetworks.jl` for type conversion for networks with suitable data.


```julia
using EcologicalNetworks

mangal_foodwebs = network.(foodwebs.id)
          # the data frame "foodwebs" is a subset of
          # mangal_networks for networks classified as food webs

unipartite_foodwebs = []

for i in eachindex(mangal_foodwebs)
    try
        unipartite_foodweb = convert(UnipartiteNetwork,
                                     mangal_foodwebs[i])
        push!(unipartite_foodwebs, unipartite_foodweb)
    catch
        println("Cannot convert mangal food web $(i)
                to a unipartite network")
    end
end
```

Next, we computed food-web richness (i.e. the number of species), connectance, nestedness, and modularity using functions from `EcologicalNetworks.jl`. Nestedness was computed using the spectral radius $\rho$ of the matrices of interactions [i.e. their largest absolute eigenvalue, @StanKopp13]. To compute network modularity, we need a starting point, an optimizer, and a measure of modularity [@Newm06; @Barb07; @Theb13]. We used 100 random species assignments in 3 to 15 groups as our starters. We used the BRIM algorithm to optimize the modularity for each of these random partitions, and computed modularity following @Newm06. The maximum value was retained for each food web. Associations between these measures are plotted in \autoref{fig:nestmod}.


```julia
foodweb_measures = DataFrame(fill(Float64, 4),
                            [:rich, :connect, :nested, :modul],
                            length(unipartite_foodwebs))


foodweb_measures.rich = richness.(unipartite_foodwebs)

foodweb_measures.connect = connectance.(unipartite_foodwebs)

# compute nestedness
foodweb_measures.nested = rho.(unipartite_foodwebs)

# compute modularity
number_of_modules = repeat(3:15, outer=100)
modules = Array{Dict}(undef, length(number_of_modules))

for i in eachindex(unipartite_foodwebs)
    current_network = unipartite_foodwebs[i]
    for j in eachindex(number_of_modules)
        _, modules[j] = n_random_modules
                          (number_of_modules[j])(current_network)
                          |> x -> brim(x...)
    end
    partition_modularity = map(x -> Q(current_network,x),
                                      modules);
    foodweb_measures.modul[i] = maximum(partition_modularity)
end
```


![Association between (1) connectance and nestedness, (2) connectance and modularity, and (3) modularity and nestedness in food webs archived on `mangal.io`. We computed nestedness as the spectral radius of a network (i.e. the largest absolute eigenvalue of its matrix of interactions). We optimized network modularity using the BRIM algorithm (best partition out of 100 random runs for 3 to 15 modules). The marker size is proportional to the number of species in a network, which varied between 5 and 714 species. All measures were computed using `EcologicalNetworks.jl`. The code to reproduce the figure is included in this paper's repository.\label{fig:nestmod}](fig/nestmod.png)

# Acknowledgements

We would like to thank all contributors to `EcoJulia`, `EcologicalNetworks.jl` and `EcologicalNetworksPlots.jl` for their help in developing this integrated environment for ecological research in Julia. Funding was provided by the Institute for Data Valorization (IVADO), the  Canadian Foundation for Innovation and the Natural Sciences Engineering Research Council of Canada (NSERC).

# References