## Queries

All queries are passed as *vectors of pairs*. For example, filtering
interactions that are of the mutualist type can be done with `[Pair("type",
"mutualism")]`.

## A convenient shortcut

In *most* cases, one wants to retrieve all descendants of an object -- for
example, all nodes in a network, or all networks in a dataset.

```@docs
getallof
```

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
