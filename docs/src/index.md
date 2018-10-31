# Mangal

## Login

```@docs
Mangal.login
```

## Verbosity

```@docs
Mangal.verbose
Mangal.isverbose
```

## List of types

```@docs
MangalDataset
MangalNetwork
MangalReferenceTaxon
MangalNode
```

## Methods

### Queries

All queries are passed as *vectors of pairs*. For example, filtering
interactions that are of the mutualist type can be done with `[Pair("type",
"mutualism")]`.

### For datasets

```@docs
datasets
dataset
```

### Networks

```@docs
networks
network
```

## Internals

### Formatters

```@docs
Mangal.format_dataset_response
Mangal.format_network_response
Mangal.format_node_response
Mangal.format_backbone_response
```

## Other functions

```@docs
Mangal.generate_base_header
Mangal.generate_request_query
Mangal.search_objects_by_query
```
