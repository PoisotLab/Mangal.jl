## Queries

All queries are passed as *vectors of pairs*. For example, filtering
interactions that are of the mutualist type can be done with `[Pair("type",
"mutualism")]`.

## A convenient shortcut

In *most* cases, one wants to retrieve all descendants of an object -- for
example, all nodes in a network, or all networks in a dataset. These methods are
automatically generated, and basically take care of doing the paging for you.

!!! important "Paging"
    By default, functions other than `getallof` will only return the top n
    results, where n depends on the server settings. If you need to see all
    results, then looping through pages is required. Simply add
    `"page" => page` to your query.

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
