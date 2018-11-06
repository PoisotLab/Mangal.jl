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
    "text": "This manual describes the functionalities of the Mangal.jl package, to query data from species interaction networks. This package is a wrapper around the new API for the mangal ecological interactions database. It uses Julia 1.0 to provide a programmatic interface to read the data. Development of this package and the underlying database was funded by the Canadian Foundation for Innovation and the Natural Sciences and Engineering Research Council of Canada."
},

{
    "location": "#Original-publication-1",
    "page": "Mangal",
    "title": "Original publication",
    "category": "section",
    "text": "Poisot, T. , Baiser, B. , Dunne, J. A., Kéfi, S. , Massol, F. , Mouquet, N. , Romanuk, T. N., Stouffer, D. B., Wood, S. A. and Gravel, D. (2016), mangal – making ecological network analysis simple. Ecography, 39: 384-390. doi:10.1111/ecog.00976"
},

{
    "location": "data/#",
    "page": "List",
    "title": "List",
    "category": "page",
    "text": "using Mustache\n\ntpl = mt\"\"\"\n{{description}}\n\nTo get this dataset from the package, use\n\n    using Mangal\n    {{rawname}} = dataset({{id}})\n\n\"\"\"\n\nfor d in datasets()\n   _clean_name = titlecase(replace(d.name, \"_\" => \" \"))\n   _infos = Dict(\n      \"name\" => _clean_name,\n      \"rawname\" => d.name,\n      \"description\" => d.description,\n      \"id\" => d.id\n      )\n   _text = render(tpl, _infos)\n   write(joinpath(\"docs\", \"src\", \"data\", \"dataset\", \"$(d.name).md\"), _text)\nend"
},

{
    "location": "data/dataset/Elberling_Olesen/#",
    "page": "Elberling Olesen",
    "title": "Elberling Olesen",
    "category": "page",
    "text": "nullTo get this dataset from the package, useusing Mangal\nElberling_Olesen = dataset(15)"
},

{
    "location": "data/dataset/Howking_1968/#",
    "page": "Howking 1968",
    "title": "Howking 1968",
    "category": "page",
    "text": "Insect activity recorded on flower at Lake Hazen, Ellesmere Island, N.W.T., CanadaTo get this dataset from the package, useusing Mangal\nHowking_1968 = dataset(2)"
},

{
    "location": "data/dataset/Lundgren_Olesen_2005/#",
    "page": "Lundgren Olesen 2005",
    "title": "Lundgren Olesen 2005",
    "category": "page",
    "text": "Pollnator activity recorded on flowers, Uummannaq Island, Greenland, DanmarkTo get this dataset from the package, useusing Mangal\nLundgren_Olesen_2005 = dataset(6)"
},

{
    "location": "data/dataset/Mosquin_Martin_1967/#",
    "page": "Mosquin Martin 1967",
    "title": "Mosquin Martin 1967",
    "category": "page",
    "text": "Occurence of flower-visiting insect on plant species, two miles north of Bailey Point, Melville Island, N.W.T., CanadaTo get this dataset from the package, useusing Mangal\nMosquin_Martin_1967 = dataset(5)"
},

{
    "location": "data/dataset/Olesen_al_2002/#",
    "page": "Olesen Al 2002",
    "title": "Olesen Al 2002",
    "category": "page",
    "text": "Pollination networks for two oceanic islands, the Azorean Flores and the Mauritian Ile aux AigrettesTo get this dataset from the package, useusing Mangal\nOlesen_al_2002 = dataset(13)"
},

{
    "location": "data/dataset/Roberson_1929/#",
    "page": "Roberson 1929",
    "title": "Roberson 1929",
    "category": "page",
    "text": "Insects observed to pollinate flowers, ten miles of Carlinville, Illinois, USATo get this dataset from the package, useusing Mangal\nRoberson_1929 = dataset(1)"
},

{
    "location": "data/dataset/Salix_Kolpelke/#",
    "page": "Salix Kolpelke",
    "title": "Salix Kolpelke",
    "category": "page",
    "text": "Food-web structure of willow-galling sawflies and their natural enemies across Europe.To get this dataset from the package, useusing Mangal\nSalix_Kolpelke = dataset(18)"
},

{
    "location": "data/dataset/Silva_2002/#",
    "page": "Silva 2002",
    "title": "Silva 2002",
    "category": "page",
    "text": "Fruit-bird interaction at the Intervales State Park, BrazilTo get this dataset from the package, useusing Mangal\nSilva_2002 = dataset(4)"
},

{
    "location": "data/dataset/Witt_1998/#",
    "page": "Witt 1998",
    "title": "Witt 1998",
    "category": "page",
    "text": "UnknownTo get this dataset from the package, useusing Mangal\nWitt_1998 = dataset(3)"
},

{
    "location": "data/dataset/arroyo_1982/#",
    "page": "Arroyo 1982",
    "title": "Arroyo 1982",
    "category": "page",
    "text": "Plant-pollinator interaction at three altudinal levels (subandean scrub, cushion-plant, subnival feldfield) in the Andrean zone on the Cordon del Cepo in central ChileTo get this dataset from the package, useusing Mangal\narroyo_1982 = dataset(9)"
},

{
    "location": "data/dataset/barret_helenurm_1987/#",
    "page": "Barret Helenurm 1987",
    "title": "Barret Helenurm 1987",
    "category": "page",
    "text": "Understory perennial plants interaction with pollinator, 5 km east of Doaktown, Northumberland County, central New Brunswick, CanadaTo get this dataset from the package, useusing Mangal\nbarret_helenurm_1987 = dataset(16)"
},

{
    "location": "data/dataset/bezerra_2009/#",
    "page": "Bezerra 2009",
    "title": "Bezerra 2009",
    "category": "page",
    "text": "oil-flowers (Malpighiaceae) and their bee visitors from a Brazilian steppe, Parque Nacional do Catimbau, in the municipality of Buique (PE), northeastern BrazilTo get this dataset from the package, useusing Mangal\nbezerra_2009 = dataset(11)"
},

{
    "location": "data/dataset/elberling_olesen_1999/#",
    "page": "Elberling Olesen 1999",
    "title": "Elberling Olesen 1999",
    "category": "page",
    "text": "Flower-visiting insect at Mt. Latnjatjarro, northern SwedenTo get this dataset from the package, useusing Mangal\nelberling_olesen_1999 = dataset(8)"
},

{
    "location": "data/dataset/fautin_1993/#",
    "page": "Fautin 1993",
    "title": "Fautin 1993",
    "category": "page",
    "text": "Anemonfishes-anemons intractions in the tropical Indo-Pacific oceanTo get this dataset from the package, useusing Mangal\nfautin_1993 = dataset(19)"
},

{
    "location": "data/dataset/frost_1980/#",
    "page": "Frost 1980",
    "title": "Frost 1980",
    "category": "page",
    "text": "Fruit-frugivore interactions in a South African costal dune forestTo get this dataset from the package, useusing Mangal\nfrost_1980 = dataset(12)"
},

{
    "location": "data/dataset/hadfield_2014/#",
    "page": "Hadfield 2014",
    "title": "Hadfield 2014",
    "category": "page",
    "text": "Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) in 51 different regions of the PalearcticTo get this dataset from the package, useusing Mangal\nhadfield_2014 = dataset(24)"
},

{
    "location": "data/dataset/kaehler_et_al_2005/#",
    "page": "Kaehler Et Al 2005",
    "title": "Kaehler Et Al 2005",
    "category": "page",
    "text": "Pollination of a bromeliad community in the high montane Atlantic rain forest in Paran? state, BrazilTo get this dataset from the package, useusing Mangal\nkaehler_et_al_2005 = dataset(7)"
},

{
    "location": "data/dataset/kato_1993/#",
    "page": "Kato 1993",
    "title": "Kato 1993",
    "category": "page",
    "text": "Flower and anthophilous insect interactions in the primary cool-temperate subalpine forests and meadows at Mt. Kushigata, Yamanashi Prefecture, JapanTo get this dataset from the package, useusing Mangal\nkato_1993 = dataset(21)"
},

{
    "location": "data/dataset/kohler_2011/#",
    "page": "Kohler 2011",
    "title": "Kohler 2011",
    "category": "page",
    "text": "Hummingbirds-flowers interactions in an altitudinal gradient in the Brazilian Atlantic RainforestTo get this dataset from the package, useusing Mangal\nkohler_2011 = dataset(17)"
},

{
    "location": "data/dataset/mccullen_1993/#",
    "page": "Mccullen 1993",
    "title": "Mccullen 1993",
    "category": "page",
    "text": "compilation of records on plant-flower visitor interactions in the Galápagos archipelago found in the literature. Pinta IslandTo get this dataset from the package, useusing Mangal\nmccullen_1993 = dataset(20)"
},

{
    "location": "data/dataset/motten_1982/#",
    "page": "Motten 1982",
    "title": "Motten 1982",
    "category": "page",
    "text": "spring wildflower community of mesic deciduous forests in piedmont North CarolinaTo get this dataset from the package, useusing Mangal\nmotten_1982 = dataset(23)"
},

{
    "location": "data/dataset/olesen/#",
    "page": "Olesen",
    "title": "Olesen",
    "category": "page",
    "text": "Plant-pollinator interaction at Garajonay, Gomera, Spain (Canary Islands)To get this dataset from the package, useusing Mangal\nolesen = dataset(26)"
},

{
    "location": "data/dataset/percival_1974/#",
    "page": "Percival 1974",
    "title": "Percival 1974",
    "category": "page",
    "text": "Plant-pollinator interaction at Morant Point, JamaicaTo get this dataset from the package, useusing Mangal\npercival_1974 = dataset(14)"
},

{
    "location": "data/dataset/ponisio_2017/#",
    "page": "Ponisio 2017",
    "title": "Ponisio 2017",
    "category": "page",
    "text": "assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, CaliforniaTo get this dataset from the package, useusing Mangal\nponisio_2017 = dataset(27)"
},

{
    "location": "data/dataset/ricciardi_2010/#",
    "page": "Ricciardi 2010",
    "title": "Ricciardi 2010",
    "category": "page",
    "text": "structure of local anemonefish-anemone networks across the Manado region of Sulawesi, IndonesiaTo get this dataset from the package, useusing Mangal\nricciardi_2010 = dataset(25)"
},

{
    "location": "data/dataset/varassin_sazima_2012/#",
    "page": "Varassin Sazima 2012",
    "title": "Varassin Sazima 2012",
    "category": "page",
    "text": "Bromeliad-pollinator interaction in the Estacao Biologica de Santa Lucia in southeastern BrazilTo get this dataset from the package, useusing Mangal\nvarassin_sazima_2012 = dataset(10)"
},

{
    "location": "data/dataset/wheelwringht_1984/#",
    "page": "Wheelwringht 1984",
    "title": "Wheelwringht 1984",
    "category": "page",
    "text": "Bird-fruit interaction in the lower montane forests of Monteverde, Costa RicaTo get this dataset from the package, useusing Mangal\nwheelwringht_1984 = dataset(22)"
},

{
    "location": "pkg/gettingdata/#",
    "page": "Getting data",
    "title": "Getting data",
    "category": "page",
    "text": ""
},

{
    "location": "pkg/gettingdata/#Test-1",
    "page": "Getting data",
    "title": "Test",
    "category": "section",
    "text": ""
},

{
    "location": "pkg/types/#",
    "page": "Data types",
    "title": "Data types",
    "category": "page",
    "text": ""
},

{
    "location": "pkg/types/#Mangal.MangalDataset",
    "page": "Data types",
    "title": "Mangal.MangalDataset",
    "category": "type",
    "text": "A MangalDataset identifies a collection of networks, possibly containing a single element. A dataset is identified by its id or name (both of which are unique).\n\n\n\n\n\n"
},

{
    "location": "pkg/types/#Mangal.MangalNetwork",
    "page": "Data types",
    "title": "Mangal.MangalNetwork",
    "category": "type",
    "text": "Wrapper for species interactions\n\n\n\n\n\n"
},

{
    "location": "pkg/types/#Mangal.MangalInteraction",
    "page": "Data types",
    "title": "Mangal.MangalInteraction",
    "category": "type",
    "text": "Interaction\n\n\n\n\n\n"
},

{
    "location": "pkg/types/#Core-types-1",
    "page": "Data types",
    "title": "Core types",
    "category": "section",
    "text": "MangalDataset\nMangalNetwork\nMangalInteraction"
},

{
    "location": "pkg/types/#Mangal.MangalReferenceTaxon",
    "page": "Data types",
    "title": "Mangal.MangalReferenceTaxon",
    "category": "type",
    "text": "Reference taxon (unique identifier of network nodes)\n\n\n\n\n\n"
},

{
    "location": "pkg/types/#Mangal.MangalNode",
    "page": "Data types",
    "title": "Mangal.MangalNode",
    "category": "type",
    "text": "Node in a network\n\nThe taxon field is a MangalReferenceTaxon object, so that one can, for example, query the TSN identifier of a node through object.taxon.tsn.\n\nThis approach has been chosen because (i) names of nodes in networks can be non unique and (ii) nodes within the same networks can refer to various taxonomic levels. As an example, if a network has four distinct nodes identified as Ascariasis sp., they will represent four nodes in the networks, but map onto the same MangalReferenceTaxon (representing the entire Ascariasis genus). This approach provides a seemless representation of the same taxon across different networks, but also of the same taxon within networks.\n\n\n\n\n\n"
},

{
    "location": "pkg/types/#Taxonomy-types-1",
    "page": "Data types",
    "title": "Taxonomy types",
    "category": "section",
    "text": "MangalReferenceTaxon\nMangalNode"
},

{
    "location": "pkg/types/#Additional-information-1",
    "page": "Data types",
    "title": "Additional information",
    "category": "section",
    "text": "MangalTrait\nMangalAttribute"
},

{
    "location": "pkg/types/#Metadata-types-1",
    "page": "Data types",
    "title": "Metadata types",
    "category": "section",
    "text": "MangalUser\nMangalReference"
},

{
    "location": "pkg/methods/#",
    "page": "Methods for data retrieval",
    "title": "Methods for data retrieval",
    "category": "page",
    "text": ""
},

{
    "location": "pkg/methods/#Queries-1",
    "page": "Methods for data retrieval",
    "title": "Queries",
    "category": "section",
    "text": "All queries are passed as vectors of pairs. For example, filtering interactions that are of the mutualist type can be done with [Pair(\"type\", \"mutualism\")]."
},

{
    "location": "pkg/methods/#Mangal.datasets",
    "page": "Methods for data retrieval",
    "title": "Mangal.datasets",
    "category": "function",
    "text": "datasets()\n\nWhen called with no arguments, this function will return a list of the most recent datasets.  The results will be returned as a vector of MangalDataset object.\n\n\n\n\n\ndatasets(q::Vector{Pair{String,T}}) where {T <: Any}\n\nWill return the most recent datasets that match a given query. The results will be returned as a vector of MangalDataset object.\n\n\n\n\n\n"
},

{
    "location": "pkg/methods/#Mangal.dataset",
    "page": "Methods for data retrieval",
    "title": "Mangal.dataset",
    "category": "function",
    "text": "dataset(name::AbstractString)\n\nReturn a single dataset by its name.\n\n\n\n\n\ndataset(id::Int64)\n\nReturn a single dataset by its unique numerical ID.\n\n\n\n\n\n"
},

{
    "location": "pkg/methods/#For-datasets-1",
    "page": "Methods for data retrieval",
    "title": "For datasets",
    "category": "section",
    "text": "datasets\ndataset"
},

{
    "location": "pkg/methods/#Networks-1",
    "page": "Methods for data retrieval",
    "title": "Networks",
    "category": "section",
    "text": "networks\nnetwork"
},

{
    "location": "pkg/methods/#Interactions-1",
    "page": "Methods for data retrieval",
    "title": "Interactions",
    "category": "section",
    "text": "interactions\ninteraction"
},

{
    "location": "pkg/methods/#Nodes-1",
    "page": "Methods for data retrieval",
    "title": "Nodes",
    "category": "section",
    "text": "nodes\nnode"
},

{
    "location": "pkg/methods/#Mangal.backbone",
    "page": "Methods for data retrieval",
    "title": "Mangal.backbone",
    "category": "function",
    "text": "backbone()\n\n\n\n\n\n"
},

{
    "location": "pkg/methods/#Reference-taxon-1",
    "page": "Methods for data retrieval",
    "title": "Reference taxon",
    "category": "section",
    "text": "backbone"
},

{
    "location": "pkg/internals/#",
    "page": "Internal functions",
    "title": "Internal functions",
    "category": "page",
    "text": ""
},

{
    "location": "pkg/internals/#Mangal.login",
    "page": "Internal functions",
    "title": "Mangal.login",
    "category": "function",
    "text": "login(token::AbstractString)\n\nThis function will store the token in the MANGAL_BEARER_TOKEN environmental variable. To get the your token, please use login with no argument.\n\n\n\n\n\nlogin()\n\nRead the bearer token from the MANGAL_BEARER_TOKEN environment variable. If not found, displays a login message with a login URL.\n\n\n\n\n\n"
},

{
    "location": "pkg/internals/#Login-1",
    "page": "Internal functions",
    "title": "Login",
    "category": "section",
    "text": "info: Login\nMangal relies on ORCID for authentication and login. As long as you have an ORCID profile, you can login.Mangal.login"
},

{
    "location": "pkg/internals/#Mangal.verbose",
    "page": "Internal functions",
    "title": "Mangal.verbose",
    "category": "function",
    "text": "verbose()\n\nThis function will switch the package to verbose mode.\n\n\n\n\n\nverbose(vrb::Bool)\n\nThis function will switch the package to verbose mode, or silence it.\n\n\n\n\n\n"
},

{
    "location": "pkg/internals/#Mangal.isverbose",
    "page": "Internal functions",
    "title": "Mangal.isverbose",
    "category": "function",
    "text": "isverbose()\n\nThis function will return a Boolean for the current package verbosity.\n\n\n\n\n\n"
},

{
    "location": "pkg/internals/#Verbosity-1",
    "page": "Internal functions",
    "title": "Verbosity",
    "category": "section",
    "text": "Mangal.verbose\nMangal.isverbose"
},

{
    "location": "pkg/internals/#Formatters-1",
    "page": "Internal functions",
    "title": "Formatters",
    "category": "section",
    "text": "Mangal.format_dataset_response\nMangal.format_network_response\nMangal.format_node_response\nMangal.format_backbone_response"
},

{
    "location": "pkg/internals/#Other-functions-1",
    "page": "Internal functions",
    "title": "Other functions",
    "category": "section",
    "text": "Mangal.generate_base_header\nMangal.generate_request_query\nMangal.search_objects_by_query"
},

{
    "location": "pkg/internals/#Mangal.cache",
    "page": "Internal functions",
    "title": "Mangal.cache",
    "category": "function",
    "text": "Internally, the Mangal package uses a cache to store some objects that are likely to be queried more than once. These are MangalNode and MangalReferenceTaxon, which are called in a nested way during the querying of e.g. Interactions. This is not a fancy mechanism, and it only works when calling the nodes or backbones by their id (which is what the resources-hungry functions do internally anyways).\n\n\n\n\n\n"
},

{
    "location": "pkg/internals/#Caching-1",
    "page": "Internal functions",
    "title": "Caching",
    "category": "section",
    "text": "Mangal.cache"
},

]}
