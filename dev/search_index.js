var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Mangal",
    "title": "Mangal",
    "category": "page",
    "text": ""
},

{
    "location": "#Mangal-1",
    "page": "Mangal",
    "title": "Mangal",
    "category": "section",
    "text": "This manual describes the functionalities of the Mangal.jl package, to query data from species interaction networks. This package is a wrapper around the new API for the mangal ecological interactions database. It uses Julia 1.0 to provide a programmatic interface to read the data. Development of this package and the underlying database was funded by the Canadian Foundation for Innovation."
},

{
    "location": "#Original-publication-1",
    "page": "Mangal",
    "title": "Original publication",
    "category": "section",
    "text": "Poisot, T. , Baiser, B. , Dunne, J. A., Kéfi, S. , Massol, F. , Mouquet, N. , Romanuk, T. N., Stouffer, D. B., Wood, S. A. and Gravel, D. (2016), mangal – making ecological network analysis simple. Ecography, 39: 384-390. doi:10.1111/ecog.00976"
},

{
    "location": "types/#",
    "page": "Data types",
    "title": "Data types",
    "category": "page",
    "text": ""
},

{
    "location": "types/#Mangal.MangalDataset",
    "page": "Data types",
    "title": "Mangal.MangalDataset",
    "category": "type",
    "text": "A MangalDataset identifies a collection of networks, possibly containing a single element. A dataset is identified by its id or name (both of which are unique).\n\n\n\n\n\n"
},

{
    "location": "types/#Mangal.MangalNetwork",
    "page": "Data types",
    "title": "Mangal.MangalNetwork",
    "category": "type",
    "text": "Wrapper for species interactions\n\n\n\n\n\n"
},

{
    "location": "types/#Mangal.MangalInteraction",
    "page": "Data types",
    "title": "Mangal.MangalInteraction",
    "category": "type",
    "text": "Interaction\n\n\n\n\n\n"
},

{
    "location": "types/#Core-types-1",
    "page": "Data types",
    "title": "Core types",
    "category": "section",
    "text": "MangalDataset\nMangalNetwork\nMangalInteraction"
},

{
    "location": "types/#Mangal.MangalReferenceTaxon",
    "page": "Data types",
    "title": "Mangal.MangalReferenceTaxon",
    "category": "type",
    "text": "Reference taxon (unique identifier of network nodes)\n\n\n\n\n\n"
},

{
    "location": "types/#Mangal.MangalNode",
    "page": "Data types",
    "title": "Mangal.MangalNode",
    "category": "type",
    "text": "Node in a network\n\nThe taxon field is a MangalReferenceTaxon object, so that one can, for example, query the TSN identifier of a node through object.taxon.tsn.\n\nThis approach has been chosen because (i) names of nodes in networks can be non unique and (ii) nodes within the same networks can refer to various taxonomic levels. As an example, if a network has four distinct nodes identified as Ascariasis sp., they will represent four nodes in the networks, but map onto the same MangalReferenceTaxon (representing the entire Ascariasis genus). This approach provides a seemless representation of the same taxon across different networks, but also of the same taxon within networks.\n\n\n\n\n\n"
},

{
    "location": "types/#Taxonomy-types-1",
    "page": "Data types",
    "title": "Taxonomy types",
    "category": "section",
    "text": "MangalReferenceTaxon\nMangalNode"
},

{
    "location": "types/#Additional-information-1",
    "page": "Data types",
    "title": "Additional information",
    "category": "section",
    "text": "MangalTrait\nMangalAttribute"
},

{
    "location": "types/#Metadata-types-1",
    "page": "Data types",
    "title": "Metadata types",
    "category": "section",
    "text": "MangalUser\nMangalReference"
},

{
    "location": "methods/#",
    "page": "Getting data",
    "title": "Getting data",
    "category": "page",
    "text": ""
},

{
    "location": "methods/#Queries-1",
    "page": "Getting data",
    "title": "Queries",
    "category": "section",
    "text": "All queries are passed as vectors of pairs. For example, filtering interactions that are of the mutualist type can be done with [Pair(\"type\", \"mutualism\")]."
},

{
    "location": "methods/#Mangal.getallof",
    "page": "Getting data",
    "title": "Mangal.getallof",
    "category": "function",
    "text": "getallof(::Type{MangalNode}, n::MangalNetwork)\n\nReturns all MangalNode objects contained into the MangalNetwork object passed as its second argument. Internally, this is wrapper around Mangal.nodes, where nodes are sorted according to their \"network_id\".\n\n\n\n\n\ngetallof(::Type{MangalNode}, n::MangalNetwork, query::Vector{Pair{String,T}}) where {T <: Any}\n\nReturns all MangalNode objects contained into the MangalNetwork object passed as its second argument. This function will also apply a query passed as the third argument.\n\n\n\n\n\ngetallof(::Type{MangalNetwork}, n::MangalDataset)\n\nReturns all MangalNetwork objects contained into the MangalDataset object passed as its second argument. Internally, this is wrapper around Mangal.networks, where nodes are sorted according to their \"dataset_id\".\n\n\n\n\n\ngetallof(::Type{MangalNetwork}, n::MangalDataset, query::Vector{Pair{String,T}}) where {T <: Any}\n\nReturns all MangalNetwork objects contained into the MangalDataset object passed as its second argument. This function will also apply a query passed as the third argument.\n\n\n\n\n\n"
},

{
    "location": "methods/#A-convenient-shortcut-1",
    "page": "Getting data",
    "title": "A convenient shortcut",
    "category": "section",
    "text": "In most cases, one wants to retrieve all descendants of an object – for example, all nodes in a network, or all networks in a dataset. These methods are automatically generated, and basically take care of doing the paging for you.important: Paging\nBy default, functions other than getallof will only return the top n results, where n depends on the server settings. If you need to see all results, then looping through pages is required. Simply add \"page\" => page to your query.getallof"
},

{
    "location": "methods/#Mangal.datasets",
    "page": "Getting data",
    "title": "Mangal.datasets",
    "category": "function",
    "text": "datasets()\n\nWhen called with no arguments, this function will return a list of the most recent datasets.  The results will be returned as a vector of MangalDataset object.\n\n\n\n\n\ndatasets(q::Vector{Pair{String,T}}) where {T <: Any}\n\nWill return the most recent datasets that match a given query. The results will be returned as a vector of MangalDataset object.\n\n\n\n\n\n"
},

{
    "location": "methods/#Mangal.dataset",
    "page": "Getting data",
    "title": "Mangal.dataset",
    "category": "function",
    "text": "dataset(name::AbstractString)\n\nReturn a single dataset by its name.\n\n\n\n\n\ndataset(id::Int64)\n\nReturn a single dataset by its unique numerical ID.\n\n\n\n\n\n"
},

{
    "location": "methods/#For-datasets-1",
    "page": "Getting data",
    "title": "For datasets",
    "category": "section",
    "text": "datasets\ndataset"
},

{
    "location": "methods/#Networks-1",
    "page": "Getting data",
    "title": "Networks",
    "category": "section",
    "text": "networks\nnetwork"
},

{
    "location": "methods/#Interactions-1",
    "page": "Getting data",
    "title": "Interactions",
    "category": "section",
    "text": "interactions\ninteraction"
},

{
    "location": "methods/#Nodes-1",
    "page": "Getting data",
    "title": "Nodes",
    "category": "section",
    "text": "nodes\nnode"
},

{
    "location": "methods/#Mangal.backbone",
    "page": "Getting data",
    "title": "Mangal.backbone",
    "category": "function",
    "text": "backbone()\n\n\n\n\n\n"
},

{
    "location": "methods/#Reference-taxon-1",
    "page": "Getting data",
    "title": "Reference taxon",
    "category": "section",
    "text": "backbone"
},

{
    "location": "internals/#",
    "page": "Internal functions",
    "title": "Internal functions",
    "category": "page",
    "text": ""
},

{
    "location": "internals/#Mangal.login",
    "page": "Internal functions",
    "title": "Mangal.login",
    "category": "function",
    "text": "This function will store the token in the MANGAL_BEARER_TOKEN environmental variable.\n\n\n\n\n\n"
},

{
    "location": "internals/#Login-1",
    "page": "Internal functions",
    "title": "Login",
    "category": "section",
    "text": "Mangal.login"
},

{
    "location": "internals/#Mangal.verbose",
    "page": "Internal functions",
    "title": "Mangal.verbose",
    "category": "function",
    "text": "verbose()\n\nThis function will switch the package to verbose mode.\n\n\n\n\n\nverbose(vrb::Bool)\n\nThis function will switch the package to verbose mode, or silence it.\n\n\n\n\n\n"
},

{
    "location": "internals/#Mangal.isverbose",
    "page": "Internal functions",
    "title": "Mangal.isverbose",
    "category": "function",
    "text": "isverbose()\n\nThis function will return a Boolean for the current package verbosity.\n\n\n\n\n\n"
},

{
    "location": "internals/#Verbosity-1",
    "page": "Internal functions",
    "title": "Verbosity",
    "category": "section",
    "text": "Mangal.verbose\nMangal.isverbose"
},

{
    "location": "internals/#Formatters-1",
    "page": "Internal functions",
    "title": "Formatters",
    "category": "section",
    "text": "Mangal.format_dataset_response\nMangal.format_network_response\nMangal.format_node_response\nMangal.format_backbone_response"
},

{
    "location": "internals/#Other-functions-1",
    "page": "Internal functions",
    "title": "Other functions",
    "category": "section",
    "text": "Mangal.generate_base_header\nMangal.generate_request_query\nMangal.search_objects_by_query"
},

{
    "location": "internals/#Mangal.cache",
    "page": "Internal functions",
    "title": "Mangal.cache",
    "category": "function",
    "text": "Internally, the Mangal package uses a cache to store some objects that are likely to be queried more than once. These are MangalNode and MangalReferenceTaxon, which are called in a nested way during the querying of e.g. Interactions. This is not a fancy mechanism, and it only works when calling the nodes or backbones by their id (which is what the resources-hungry functions do internally anyways).\n\n\n\n\n\n"
},

{
    "location": "internals/#Caching-1",
    "page": "Internal functions",
    "title": "Caching",
    "category": "section",
    "text": "Mangal.cache"
},

]}
