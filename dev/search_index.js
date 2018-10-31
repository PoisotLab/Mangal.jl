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
    "text": ""
},

{
    "location": "#Mangal.login",
    "page": "Mangal",
    "title": "Mangal.login",
    "category": "function",
    "text": "This function will store the token in the MANGAL_BEARER_TOKEN environmental variable.\n\n\n\n\n\n"
},

{
    "location": "#Login-1",
    "page": "Mangal",
    "title": "Login",
    "category": "section",
    "text": "Mangal.login"
},

{
    "location": "#Mangal.verbose",
    "page": "Mangal",
    "title": "Mangal.verbose",
    "category": "function",
    "text": "verbose()\n\nThis function will switch the package to verbose mode.\n\n\n\n\n\nverbose(vrb::Bool)\n\nThis function will switch the package to verbose mode, or silence it.\n\n\n\n\n\n"
},

{
    "location": "#Mangal.isverbose",
    "page": "Mangal",
    "title": "Mangal.isverbose",
    "category": "function",
    "text": "isverbose()\n\nThis function will return a Boolean for the current package verbosity.\n\n\n\n\n\n"
},

{
    "location": "#Verbosity-1",
    "page": "Mangal",
    "title": "Verbosity",
    "category": "section",
    "text": "Mangal.verbose\nMangal.isverbose"
},

{
    "location": "#Mangal.MangalDataset",
    "page": "Mangal",
    "title": "Mangal.MangalDataset",
    "category": "type",
    "text": "A MangalDataset identifies a collection of networks, possibly containing a single element. A dataset is identified by its id or name (both of which are unique). \n\n\n\n\n\n"
},

{
    "location": "#Mangal.MangalNetwork",
    "page": "Mangal",
    "title": "Mangal.MangalNetwork",
    "category": "type",
    "text": "Wrapper for species interactions\n\n\n\n\n\n"
},

{
    "location": "#Mangal.MangalReferenceTaxon",
    "page": "Mangal",
    "title": "Mangal.MangalReferenceTaxon",
    "category": "type",
    "text": "Reference taxon (unique identifier of network nodes)\n\n\n\n\n\n"
},

{
    "location": "#Mangal.MangalNode",
    "page": "Mangal",
    "title": "Mangal.MangalNode",
    "category": "type",
    "text": "Node in a network\n\nThe taxon field is a MangalReferenceTaxon object, so that one can, for example, query the TSN identifier of a node through object.taxon.tsn.\n\nThis approach has been chosen because (i) names of nodes in networks can be non unique and (ii) nodes within the same networks can refer to various taxonomic levels. As an example, if a network has four distinct nodes identified as Ascariasis sp., they will represent four nodes in the networks, but map onto the same MangalReferenceTaxon (representing the entire Ascariasis genus). This approach provides a seemless representation of the same taxon across different networks, but also of the same taxon within networks.\n\n\n\n\n\n"
},

{
    "location": "#List-of-types-1",
    "page": "Mangal",
    "title": "List of types",
    "category": "section",
    "text": "MangalDataset\nMangalNetwork\nMangalReferenceTaxon\nMangalNode"
},

{
    "location": "#Methods-1",
    "page": "Mangal",
    "title": "Methods",
    "category": "section",
    "text": ""
},

{
    "location": "#Queries-1",
    "page": "Mangal",
    "title": "Queries",
    "category": "section",
    "text": "All queries are passed as vectors of pairs. For example, filtering interactions that are of the mutualist type can be done with [Pair(\"type\", \"mutualism\")]."
},

{
    "location": "#Mangal.datasets",
    "page": "Mangal",
    "title": "Mangal.datasets",
    "category": "function",
    "text": "datasets()\n\nWhen called with no arguments, this function will return a list of the most recent datasets.  The results will be returned as a vector of MangalDataset object.\n\n\n\n\n\ndatasets(q::Vector{Pair{String,T}}) where {T <: Any}\n\nWill return the most recent datasets that match a given query. The results will be returned as a vector of MangalDataset object.\n\n\n\n\n\n"
},

{
    "location": "#Mangal.dataset",
    "page": "Mangal",
    "title": "Mangal.dataset",
    "category": "function",
    "text": "dataset(name::AbstractString)\n\nReturn a single dataset by its name.\n\n\n\n\n\ndataset(id::Int64)\n\nReturn a single dataset by its unique numerical ID.\n\n\n\n\n\n"
},

{
    "location": "#For-datasets-1",
    "page": "Mangal",
    "title": "For datasets",
    "category": "section",
    "text": "datasets\ndataset"
},

{
    "location": "#Networks-1",
    "page": "Mangal",
    "title": "Networks",
    "category": "section",
    "text": "networks\nnetwork"
},

{
    "location": "#Internals-1",
    "page": "Mangal",
    "title": "Internals",
    "category": "section",
    "text": ""
},

{
    "location": "#Formatters-1",
    "page": "Mangal",
    "title": "Formatters",
    "category": "section",
    "text": "Mangal.format_dataset_response\nMangal.format_network_response\nMangal.format_node_response\nMangal.format_backbone_response"
},

{
    "location": "#Other-functions-1",
    "page": "Mangal",
    "title": "Other functions",
    "category": "section",
    "text": "Mangal.generate_base_header\nMangal.generate_request_query\nMangal.search_objects_by_query"
},

]}
