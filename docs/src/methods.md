## Queries

All queries are passed as *vectors of pairs*. For example, filtering
interactions that are of the mutualist type can be done with `[Pair("type",
"mutualism")]`.

## A note about paging

!!! danger "Paging maters"
    By default, functions will only return the top n results, where n depends on the
    server settings. If you need to see all results, then looping through pages is
    required.

Paging is controlled by two parameters in the `query` argument of every
function: `page`, and `count`. The queries start at `"page" => 0` by default,
and `count` can be increased up to 200. Getting records 201 to 400 for a request
would be done with `["page" => 1, "count" => 200]`.

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
