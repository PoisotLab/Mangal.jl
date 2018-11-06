## A note on paging and package design

!!! danger "Paging matters!"
    The server returns (by default) 50 objects for a given query, and this number
    can be increased up to 200. This may not be sufficient to retrieve the entire
    information, for example in networks with more than 200 nodes. Not paying
    attention to paging when using these functions directly (as opposed to within
    the `EcologicalNetworks` wrappers) means that you are at risk of *not working
    with the entire dataset*.

## A note on queries

All queries are passed as *vectors of pairs*. For example, filtering
interactions that are of the mutualist type can be done with `[Pair("type",
"mutualism")]`.

## For datasets

```@docs
datasets
dataset
```

## Networks

```@docs
networks
network
```

## Interactions

```@docs
interactions
interaction
```

## Nodes

```@docs
nodes
node
```

## Reference taxon

```@docs
backbone
```
