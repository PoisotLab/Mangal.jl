var documenterSearchIndex = {"docs":
[{"location":"#Mangal-1","page":"Mangal","title":"Mangal","text":"","category":"section"},{"location":"#","page":"Mangal","title":"Mangal","text":"This manual describes the functionalities of the Mangal.jl package, to query data from species interaction networks. This package is a wrapper around the new API for the mangal ecological interactions database. It uses Julia 1.0 to provide a programmatic interface to read the data. Development of this package and the underlying database was funded by the Canadian Foundation for Innovation and the Natural Sciences and Engineering Research Council of Canada.","category":"page"},{"location":"#Original-publication-1","page":"Mangal","title":"Original publication","text":"","category":"section"},{"location":"#","page":"Mangal","title":"Mangal","text":"Poisot, T. , Baiser, B. , Dunne, J. A., Kéfi, S. , Massol, F. , Mouquet, N. , Romanuk, T. N., Stouffer, D. B., Wood, S. A. and Gravel, D. (2016), mangal – making ecological network analysis simple. Ecography, 39: 384-390. doi:10.1111/ecog.00976","category":"page"},{"location":"vignettes/introduction/#Introduction-to-Mangal.jl-1","page":"Introduction","title":"Introduction to Mangal.jl","text":"","category":"section"},{"location":"vignettes/introduction/#","page":"Introduction","title":"Introduction","text":"The goal of this vignette is to explain the core design principles of the Mangal package.","category":"page"},{"location":"vignettes/introduction/#","page":"Introduction","title":"Introduction","text":"using Mangal","category":"page"},{"location":"vignettes/counting/#Counting-objects-1","page":"Counting & paging","title":"Counting objects","text":"","category":"section"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"using Mangal","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"count(MangalNetwork)","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"1386","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"Kolpelke_data = first(datasets(\"q\" => \"kolpelke\"))","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"MangalDataset(6, true, \"kolpelke_et_al_2017\", 1982-06-15T04:00:00, 2019-02-\n22T17:25:01, 2019-03-26T16:27:22, MangalReference(6, 2017, \"10.1002/ecy.183\n2\", missing, missing, \"@article{Kopelke_2017,doi = {10.1002/ecy.1832},url =\n {https://doi.org/10.1002%2Fecy.1832},year = 2017,month = {may},publisher =\n {Wiley-Blackwell},volume = {98},number = {6},pages = {1730--1730},author =\n {Jens-Peter Kopelke and Tommi Nyman and Kevin Cazelles and Dominique Grave\nl and Steve Vissault and Tomas Roslin},title = {Food-web structure of willo\nw-galling sawflies and their natural enemies across Europe},journal = {Ecol\nogy}}\", \"https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1002/ecy.18\n32\", \"https://github.com/TheoreticalEcosystemEcology/reshapeSalix.git\"), 3,\n \"Food-web structure of willow-galling sawflies and their natural enemies a\ncross Europe.\")","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"c = count(MangalNetwork, \"dataset_id\" => Kolpelke_data.id)","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"783","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"Kolpelke_networks = networks(Kolpelke_data)\npage = 0\nwhile length(Kolpelke_networks) < c\n  global page = page + 1\n  append!(Kolpelke_networks, networks(Kolpelke_data, \"page\" => page))\nend","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"LS = [(count(MangalInteraction, n), count(MangalNode, n)) for n in Kolpelke_networks]","category":"page"},{"location":"vignettes/counting/#","page":"Counting & paging","title":"Counting & paging","text":"Error: MethodError: no method matching iterate(::MangalNetwork)\nClosest candidates are:\n  iterate(!Matched::Core.SimpleVector) at essentials.jl:568\n  iterate(!Matched::Core.SimpleVector, !Matched::Any) at essentials.jl:568\n  iterate(!Matched::ExponentialBackOff) at error.jl:199\n  ...","category":"page"},{"location":"pkg/gettingdata/#","page":"Getting data","title":"Getting data","text":"The recommended way to get data is through Mangal.jl integration with the EcologicalNetworks.jl package for networks analysis.","category":"page"},{"location":"pkg/gettingdata/#","page":"Getting data","title":"Getting data","text":"There is no obvious way to know in advance if a network is bipartite or not. For this reason, this wrapper only returns unipartite objects. They can be converted into bipartite networks using the convert methods in EcologicalNetworks.jl.","category":"page"},{"location":"pkg/gettingdata/#","page":"Getting data","title":"Getting data","text":"convert","category":"page"},{"location":"pkg/types/#","page":"Data types","title":"Data types","text":"All types have three fields in common: id (Int64), a unique identifier, and created and updated (both DateTime), which give the time of in-database creation and last modification.","category":"page"},{"location":"pkg/types/#Core-types-1","page":"Data types","title":"Core types","text":"","category":"section"},{"location":"pkg/types/#","page":"Data types","title":"Data types","text":"MangalDataset\nMangalNetwork\nMangalInteraction","category":"page"},{"location":"pkg/types/#Mangal.MangalDataset","page":"Data types","title":"Mangal.MangalDataset","text":"A MangalDataset identifies a collection of networks, possibly containing a single element. A dataset is identified by its id or name (both of which are unique).\n\nname (AbstractString): a unique name describing the dataset.\n\npublic (Bool): indicates whether the dataset details are available to others than its owner.\n\ndate (DateTime): date and time at which the dataset was assembled. This can refer to the sampling time of networks, or to the date at which the dataset was finalized.\n\nreference (Union{Int64,Nothing}) (optional): a reference to the id of the MangalReference, or nothing if there is no associated reference for this dataset.\n\nuser (Int64): id of the user who added the dataset to the database. This is not necessarily the author of the dataset, see reference (and the same field in the MangalNetwork) to get the actual authorship.\n\ndescription (AbstractString): a free-form description of the dataset.\n\n\n\n\n\n","category":"type"},{"location":"pkg/types/#Mangal.MangalNetwork","page":"Data types","title":"Mangal.MangalNetwork","text":"A MangalNetwork is a wrapper around nodes (and not around interactions, for reasons which are really not worth mentioning here, but see the documentation for MangalNode for some hints).\n\nname (AbstractString): a unique name describing the network.\n\ndataset (Int64): the unique id of the MangalDataset to which the network belongs.\n\npublic (Bool): indicates whether the network details are available to others than its owner.\n\ndate (DateTime): date and time at which the network was sampled.\n\nposition (AbstractGeometry): the location at which the network was sampled. This can be any sort of geospatial construct, most notably points or polygons.\n\ncomplete (Bool): indicates whether the network was sampled completely, or is a collection of interactions with possible gaps.\n\nreference (Union{Int64,Nothing}) (optional): a reference to the id of the MangalReference, or nothing if there is no associated reference for this network.\n\nuser (Int64): id of the user who added the network to the database. This is not necessarily the author of the network, see reference to get the actual authorship.\n\ndescription (AbstractString): a free-form description of the network.\n\n\n\n\n\n","category":"type"},{"location":"pkg/types/#Mangal.MangalInteraction","page":"Data types","title":"Mangal.MangalInteraction","text":"Interaction\n\n\n\n\n\n","category":"type"},{"location":"pkg/types/#Taxonomy-types-1","page":"Data types","title":"Taxonomy types","text":"","category":"section"},{"location":"pkg/types/#","page":"Data types","title":"Data types","text":"MangalNode\nMangalReferenceTaxon","category":"page"},{"location":"pkg/types/#Mangal.MangalNode","page":"Data types","title":"Mangal.MangalNode","text":"Node in a network\n\nThe taxon field is a MangalReferenceTaxon object, so that one can, for example, query the TSN identifier of a node through object.taxon.tsn.\n\nThis approach has been chosen because (i) names of nodes in networks can be non unique and (ii) nodes within the same networks can refer to various taxonomic levels. As an example, if a network has four distinct nodes identified as Ascariasis sp., they will represent four nodes in the networks, but map onto the same MangalReferenceTaxon (representing the entire Ascariasis genus). This approach provides a seemless representation of the same taxon across different networks, but also of the same taxon within networks.\n\n\n\n\n\n","category":"type"},{"location":"pkg/types/#Mangal.MangalReferenceTaxon","page":"Data types","title":"Mangal.MangalReferenceTaxon","text":"Reference taxon (unique identifier of network nodes)\n\n\n\n\n\n","category":"type"},{"location":"pkg/types/#Additional-information-1","page":"Data types","title":"Additional information","text":"","category":"section"},{"location":"pkg/types/#","page":"Data types","title":"Data types","text":"MangalTrait\nMangalAttribute","category":"page"},{"location":"pkg/types/#Metadata-types-1","page":"Data types","title":"Metadata types","text":"","category":"section"},{"location":"pkg/types/#","page":"Data types","title":"Data types","text":"MangalUser\nMangalReference","category":"page"},{"location":"pkg/types/#Mangal.MangalReference","page":"Data types","title":"Mangal.MangalReference","text":"Reference\n\n\n\n\n\n","category":"type"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"This page presents the basic functions to access all of the data stored in mangal. They are meant to be used for (i) advanced analyses where the user knows what they are looking for and (ii) development of functions for specific analyses. In most cases, the functions that return objects for the EcologicalNetworks package are recommended.","category":"page"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"note: Naming conventions\nFunctions whose name is plural (e.g networks) will return a Vector of their type. Functions whose name is singular (e.g. network) return a single object. All functions returning a Vector can accept Pair object for querying.","category":"page"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"In addition to the search by name (when available) and ID (for all objects), most of the functions have methods to work on other types of objects. For example, networks has a function taking a MangalDataset as an object, which will retrieve the networks belonging to this dataset.","category":"page"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"danger: Paging matters!\nThe server returns (by default) 50 objects for a given query, and this number can be increased up to 200. This may not be sufficient to retrieve the entire information, for example in networks with more than 200 nodes. Not paying attention to paging when using these functions directly (as opposed to within the EcologicalNetworks wrappers) means that you are at risk of not working with the entire dataset.","category":"page"},{"location":"pkg/methods/#A-note-on-queries-1","page":"Methods for data retrieval","title":"A note on queries","text":"","category":"section"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"The Mangal API is built on epilogue – this offers sorting and filtering functionalities. These operations are referred to as \"queries\" across the package. All queries are passed as pairs. For example, filtering interactions that are of the mutualist type, and sorting them by id, is done with:","category":"page"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"interactions(\"type\" => \"mutualism\", \"sort\" => \"id\")","category":"page"},{"location":"pkg/methods/#For-datasets-1","page":"Methods for data retrieval","title":"For datasets","text":"","category":"section"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"datasets\ndataset","category":"page"},{"location":"pkg/methods/#Mangal.datasets","page":"Methods for data retrieval","title":"Mangal.datasets","text":"Mangal.datasets(query::Pair...)\n\nThis function will return objects of type MangalDataset according to the query parameters.\n\nTo get the latest MangalDataset records, this function can be called with no arguments.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Mangal.dataset","page":"Methods for data retrieval","title":"Mangal.dataset","text":"Mangal.dataset(id::Int64)\n\nReturns the object of type MangalDataset whose identifier is id.\n\n\n\n\n\ndataset(name::AbstractString)\n\nReturn a single dataset by its name.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Networks-1","page":"Methods for data retrieval","title":"Networks","text":"","category":"section"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"networks\nnetwork","category":"page"},{"location":"pkg/methods/#Mangal.networks","page":"Methods for data retrieval","title":"Mangal.networks","text":"Mangal.networks(query::Pair...)\n\nThis function will return objects of type MangalNetwork according to the query parameters. To accelerate future queries, the objects returned will be cached.\n\nTo get the latest MangalNetwork records, this function can be called with no arguments.\n\n\n\n\n\nnetworks(dataset::MangalDataset, query::Pair...)\n\nReturns networks that are part of a MangalDataset. Allows additional query parameters.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Mangal.network","page":"Methods for data retrieval","title":"Mangal.network","text":"Mangal.network(id::Int64)\n\nReturns the object of type MangalNetwork whose identifier is id.\n\n\n\n\n\nnetwork(name::AbstractString)\n\nReturns a network of a given name.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Interactions-1","page":"Methods for data retrieval","title":"Interactions","text":"","category":"section"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"interactions\ninteraction","category":"page"},{"location":"pkg/methods/#Mangal.interactions","page":"Methods for data retrieval","title":"Mangal.interactions","text":"Mangal.interactions(query::Pair...)\n\nThis function will return objects of type MangalInteraction according to the query parameters.\n\nTo get the latest MangalInteraction records, this function can be called with no arguments.\n\n\n\n\n\ninteractions(from::MangalNode, ::Colon, query::Pair...)\n\nReturns interactions established by the species given as its first argument.\n\n\n\n\n\ninteractions(::Colon, to::MangalNode, query::Pair...)\n\nReturns interactions established to the species given as its second argument.\n\n\n\n\n\ninteractions(from::MangalNode, to::MangalNode, query::Pair...)\n\nReturns interactions between two nodes.\n\n\n\n\n\ninteractions(n::MangalNetwork, query::Pair...)\n\nReturns interactions within a network.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Mangal.interaction","page":"Methods for data retrieval","title":"Mangal.interaction","text":"Mangal.interaction(id::Int64)\n\nReturns the object of type MangalInteraction whose identifier is id.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Nodes-1","page":"Methods for data retrieval","title":"Nodes","text":"","category":"section"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"nodes\nnode","category":"page"},{"location":"pkg/methods/#Mangal.nodes","page":"Methods for data retrieval","title":"Mangal.nodes","text":"Mangal.nodes(query::Pair...)\n\nThis function will return objects of type MangalNode according to the query parameters. To accelerate future queries, the objects returned will be cached.\n\nTo get the latest MangalNode records, this function can be called with no arguments.\n\n\n\n\n\nnodes(network::MangalNetwork, query::Pair...)\n\nReturns the nodes that are part of a MangalNetwork, with an additional optional query.\n\n\n\n\n\nnodes(taxon::MangalReferenceTaxon, query::Pair...)\n\nReturns the nodes that are instance of a MangalReferenceTaxon, with an additional query.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Mangal.node","page":"Methods for data retrieval","title":"Mangal.node","text":"Mangal.node(id::Int64)\n\nReturns the object of type MangalNode whose identifier is id.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Reference-taxon-1","page":"Methods for data retrieval","title":"Reference taxon","text":"","category":"section"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"backbone","category":"page"},{"location":"pkg/methods/#Mangal.backbone","page":"Methods for data retrieval","title":"Mangal.backbone","text":"Mangal.backbone(id::Int64)\n\nReturns the object of type MangalReferenceTaxon whose identifier is id.\n\n\n\n\n\nbackbone(name::AbstractString)\n\nReturns the backbone entry for a taxon, matched by exact name.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#References-1","page":"Methods for data retrieval","title":"References","text":"","category":"section"},{"location":"pkg/methods/#","page":"Methods for data retrieval","title":"Methods for data retrieval","text":"references\nreference","category":"page"},{"location":"pkg/methods/#Mangal.references","page":"Methods for data retrieval","title":"Mangal.references","text":"Mangal.references(query::Pair...)\n\nThis function will return objects of type MangalReference according to the query parameters.\n\nTo get the latest MangalReference records, this function can be called with no arguments.\n\n\n\n\n\n","category":"function"},{"location":"pkg/methods/#Mangal.reference","page":"Methods for data retrieval","title":"Mangal.reference","text":"Mangal.reference(id::Int64)\n\nReturns the object of type MangalReference whose identifier is id.\n\n\n\n\n\n","category":"function"},{"location":"pkg/internals/#Login-1","page":"Internal functions","title":"Login","text":"","category":"section"},{"location":"pkg/internals/#","page":"Internal functions","title":"Internal functions","text":"info: Login\nMangal relies on ORCID for authentication and login. As long as you have an ORCID profile, you can login.","category":"page"},{"location":"pkg/internals/#","page":"Internal functions","title":"Internal functions","text":"Mangal.login","category":"page"},{"location":"pkg/internals/#Mangal.login","page":"Internal functions","title":"Mangal.login","text":"login(token::AbstractString)\n\nThis function will store the token in the MANGAL_BEARER_TOKEN environmental variable. To get the your token, please use login with no argument.\n\n\n\n\n\nlogin()\n\nRead the bearer token from the MANGAL_BEARER_TOKEN environment variable. If not found, displays a login message with a login URL.\n\n\n\n\n\n","category":"function"},{"location":"pkg/internals/#Formatters-1","page":"Internal functions","title":"Formatters","text":"","category":"section"},{"location":"pkg/internals/#","page":"Internal functions","title":"Internal functions","text":"Mangal.format_mangal_response\nMangal.format_mangal_coordinates","category":"page"},{"location":"pkg/internals/#Other-functions-1","page":"Internal functions","title":"Other functions","text":"","category":"section"},{"location":"pkg/internals/#","page":"Internal functions","title":"Internal functions","text":"Mangal.generate_base_header\nMangal.generate_request_query\nMangal.search_objects_by_query","category":"page"},{"location":"pkg/internals/#Mangal.generate_base_header","page":"Internal functions","title":"Mangal.generate_base_header","text":"generate_base_header()\n\nIf a bearer token is present, this function will add it to the header.\n\n\n\n\n\n","category":"function"},{"location":"pkg/internals/#Mangal.search_objects_by_query","page":"Internal functions","title":"Mangal.search_objects_by_query","text":"search_objects_by_query(endpoint::AbstractString, formatter::Function, query::Pair...)\n\nIn all cases, it is assumed that the functions will be wrapepd in calls to query objects until no further objects are found.\n\n\n\n\n\n","category":"function"},{"location":"pkg/internals/#Caching-1","page":"Internal functions","title":"Caching","text":"","category":"section"},{"location":"pkg/internals/#","page":"Internal functions","title":"Internal functions","text":"Mangal.cache","category":"page"},{"location":"pkg/internals/#Mangal.cache","page":"Internal functions","title":"Mangal.cache","text":"Internally, the Mangal package uses a cache to store some objects that are likely to be queried more than once. These are MangalNode and MangalReferenceTaxon, which are called in a nested way during the querying of e.g. Interactions. This is not a fancy mechanism, and it only works when calling the nodes or backbones by their id (which is what the resources-hungry functions do internally anyways).\n\n\n\n\n\n","category":"function"},{"location":"pkg/internals/#Full-data-retrieval-1","page":"Internal functions","title":"Full data retrieval","text":"","category":"section"},{"location":"pkg/internals/#","page":"Internal functions","title":"Internal functions","text":"Mangal.get_all_nodes\nMangal.get_all_interactions","category":"page"}]
}
