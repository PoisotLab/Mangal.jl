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

![Association between the number of species (nodes) and the number of links (edges) in all ecological networks archived on `mangal.io`. Different types of interactions can be listed within the same network. We classified all networks according to their most frequent type of interactions. .\label{fig:LS}](fig/LS.png)


# EcologicalNetworks.jl

## Use case 2: Association between meaningful network measures

![Association between (1) connectance and nestedness, (2) connectance and modularity, and (3) modularity and nestedness in all food webs archived on `mangal.io`. We calculated nestedness as the spectral radius of a network (i.e. the largest absolute eigenvalue of its adjacency matrix). We optimized network modularity using the BRIM algorithm (best partition out of 100 random runs for 3 to 15 modules). The marker size is proportional to the total number of species in a network, which varied between 5 and 714 species. All measures were computed using `EcologicalNetworks.jl`. .\label{fig:LS}](fig/nestmod.png)

# Acknowledgements

We would like to thank all contributors to `EcoJulia`, `EcologicalNetworks.jl` and `EcologicalNetworksPlots.jl` for their help in developing this integrated environment for ecological research in Julia. Funding was provided by the Institute for Data Valorization (IVADO), the  Canadian Foundation for Innovation and the Natural Sciences Engineering Research Council of Canada (NSERC).

# References
