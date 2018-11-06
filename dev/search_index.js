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
    "page": "Data list",
    "title": "Data list",
    "category": "page",
    "text": "using Mustache\nusing Dates\n\ntpl = mt\"\"\"\n## General informations\n\n**Dataset**: {{name}} [`{{id}}`]\n\n**Sampling date**: {{date}}\n\n**Added on**: {{created}} (last update on {{updated}})\n\n**Number of networks**: {{ncount}}\n\n## Description\n\n{{description}}\n\n## Programmatic access\n\n    using Mangal\n    {{rawname}} = dataset(\"{{rawname}}\") # or dataset({{id}})\n\n## Networks\n\n{{networks}}\n\n\"\"\"\n\nfor d in datasets([\"sort\" => \"id\"])\n   _clean_name = titlecase(replace(d.name, \"_\" => \" \"))\n   ncount = count(MangalNetwork, [\"dataset_id\" => d.id])\n   page_size = 200\n   n_pages = convert(Int64, ceil(ncount/page_size))\n   n = MangalNetwork[]\n   for p in 1:n_pages\n      paging_q = [\"count\" => page_size, \"page\" => p-1]\n      q = [\"dataset_id\" => d.id]\n      append!(q, paging_q)\n      append!(n, networks(d, q))\n   end\n   rows = String[]\n   push!(rows, \"| id | name | description | public | nodes |\\n\")\n   push!(rows, \"|:--:|------|-------------|--------|-------|\\n\")\n   for ne in n\n      nnode = count(MangalNode, [\"network_id\" => ne.id])\n      pub = ne.public ? \"✓\" : \"\"\n      push!(rows, \"| `$(ne.id)` | `$(ne.name)` | $(ne.description) | $(pub) | $(nnode) |\\n\")\n   end\n   _infos = Dict(\n      \"name\" => _clean_name,\n      \"rawname\" => d.name,\n      \"description\" => d.description,\n      \"id\" => d.id,\n      \"date\" => Dates.format(d.date, \"yyyy-mm-dd\"),\n      \"created\" => Dates.format(d.created, \"yyyy-mm-dd\"),\n      \"updated\" => Dates.format(d.updated, \"yyyy-mm-dd\"),\n      \"ncount\" => ncount,\n      \"networks\" => reduce(*, rows)\n      )\n   _text = render(tpl, _infos)\n   write(joinpath(\"docs\", \"src\", \"data\", \"dataset\", \"$(d.name).md\"), _text)\nend"
},

{
    "location": "data/dataset/Elberling_Olesen/#",
    "page": "Elberling Olesen",
    "title": "Elberling Olesen",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Elberling_Olesen/#General-informations-1",
    "page": "Elberling Olesen",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Elberling Olesen [15]Sampling date: 1111-11-11Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/Elberling_Olesen/#Description-1",
    "page": "Elberling Olesen",
    "title": "Description",
    "category": "section",
    "text": "null"
},

{
    "location": "data/dataset/Elberling_Olesen/#Programmatic-access-1",
    "page": "Elberling Olesen",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nElberling_Olesen = dataset(\"Elberling_Olesen\") # or dataset(15)"
},

{
    "location": "data/dataset/Elberling_Olesen/#Networks-1",
    "page": "Elberling Olesen",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n14 Elberling_Olesen null ✓ 107"
},

{
    "location": "data/dataset/Howking_1968/#",
    "page": "Howking 1968",
    "title": "Howking 1968",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Howking_1968/#General-informations-1",
    "page": "Howking 1968",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Howking 1968 [2]Sampling date: 1963-06-01Added on: 2018-03-27 (last update on 2018-03-27)Number of networks: 1"
},

{
    "location": "data/dataset/Howking_1968/#Description-1",
    "page": "Howking 1968",
    "title": "Description",
    "category": "section",
    "text": "Insect activity recorded on flower at Lake Hazen, Ellesmere Island, N.W.T., Canada"
},

{
    "location": "data/dataset/Howking_1968/#Programmatic-access-1",
    "page": "Howking 1968",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nHowking_1968 = dataset(\"Howking_1968\") # or dataset(2)"
},

{
    "location": "data/dataset/Howking_1968/#Networks-1",
    "page": "Howking 1968",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n2 Howking_1968 Insect activity recorded on flower at Lake Hazen, Ellesmere Island, N.W.T., Canada ✓ 115"
},

{
    "location": "data/dataset/Lundgren_Olesen_2005/#",
    "page": "Lundgren Olesen 2005",
    "title": "Lundgren Olesen 2005",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Lundgren_Olesen_2005/#General-informations-1",
    "page": "Lundgren Olesen 2005",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Lundgren Olesen 2005 [6]Sampling date: 2002-08-04Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/Lundgren_Olesen_2005/#Description-1",
    "page": "Lundgren Olesen 2005",
    "title": "Description",
    "category": "section",
    "text": "Pollnator activity recorded on flowers, Uummannaq Island, Greenland, Danmark"
},

{
    "location": "data/dataset/Lundgren_Olesen_2005/#Programmatic-access-1",
    "page": "Lundgren Olesen 2005",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nLundgren_Olesen_2005 = dataset(\"Lundgren_Olesen_2005\") # or dataset(6)"
},

{
    "location": "data/dataset/Lundgren_Olesen_2005/#Networks-1",
    "page": "Lundgren Olesen 2005",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n6 Lundgen_Olesen_2005 Pollnator activity recorded on flowers, Uummannaq Island, Greenland, Danmark ✓ 43"
},

{
    "location": "data/dataset/Mosquin_Martin_1967/#",
    "page": "Mosquin Martin 1967",
    "title": "Mosquin Martin 1967",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Mosquin_Martin_1967/#General-informations-1",
    "page": "Mosquin Martin 1967",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Mosquin Martin 1967 [5]Sampling date: 1965-07-31Added on: 2018-03-27 (last update on 2018-03-27)Number of networks: 1"
},

{
    "location": "data/dataset/Mosquin_Martin_1967/#Description-1",
    "page": "Mosquin Martin 1967",
    "title": "Description",
    "category": "section",
    "text": "Occurence of flower-visiting insect on plant species, two miles north of Bailey Point, Melville Island, N.W.T., Canada"
},

{
    "location": "data/dataset/Mosquin_Martin_1967/#Programmatic-access-1",
    "page": "Mosquin Martin 1967",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nMosquin_Martin_1967 = dataset(\"Mosquin_Martin_1967\") # or dataset(5)"
},

{
    "location": "data/dataset/Mosquin_Martin_1967/#Networks-1",
    "page": "Mosquin Martin 1967",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n5 Mosquin_Martin_1967 Occurence of flower-visiting insect on plant species, two miles north of Bailey Point, Melville Island, N.W.T., Canada ✓ 29"
},

{
    "location": "data/dataset/Olesen_al_2002/#",
    "page": "Olesen Al 2002",
    "title": "Olesen Al 2002",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Olesen_al_2002/#General-informations-1",
    "page": "Olesen Al 2002",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Olesen Al 2002 [13]Sampling date: 2000-01-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 2"
},

{
    "location": "data/dataset/Olesen_al_2002/#Description-1",
    "page": "Olesen Al 2002",
    "title": "Description",
    "category": "section",
    "text": "Pollination networks for two oceanic islands, the Azorean Flores and the Mauritian Ile aux Aigrettes"
},

{
    "location": "data/dataset/Olesen_al_2002/#Programmatic-access-1",
    "page": "Olesen Al 2002",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nOlesen_al_2002 = dataset(\"Olesen_al_2002\") # or dataset(13)"
},

{
    "location": "data/dataset/Olesen_al_2002/#Networks-1",
    "page": "Olesen Al 2002",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n12 olesen_aigrettes Pollination networks of the Mauritian Ile aux Aigrettes ✓ 27\n22 olesen_flores Pollination networks of the Azorean Flores island ✓ 22"
},

{
    "location": "data/dataset/Roberson_1929/#",
    "page": "Roberson 1929",
    "title": "Roberson 1929",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Roberson_1929/#General-informations-1",
    "page": "Roberson 1929",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Roberson 1929 [1]Sampling date: 1899-07-01Added on: 2018-03-27 (last update on 2018-03-27)Number of networks: 1"
},

{
    "location": "data/dataset/Roberson_1929/#Description-1",
    "page": "Roberson 1929",
    "title": "Description",
    "category": "section",
    "text": "Insects observed to pollinate flowers, ten miles of Carlinville, Illinois, USA"
},

{
    "location": "data/dataset/Roberson_1929/#Programmatic-access-1",
    "page": "Roberson 1929",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nRoberson_1929 = dataset(\"Roberson_1929\") # or dataset(1)"
},

{
    "location": "data/dataset/Roberson_1929/#Networks-1",
    "page": "Roberson 1929",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n1 Roberson_1929 Insects observed to pollinate flowers, ten miles of Carlinville, Illinois, USA ✓ 1500"
},

{
    "location": "data/dataset/Salix_Kolpelke/#",
    "page": "Salix Kolpelke",
    "title": "Salix Kolpelke",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Salix_Kolpelke/#General-informations-1",
    "page": "Salix Kolpelke",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Salix Kolpelke [18]Sampling date: 1111-11-11Added on: 2018-04-13 (last update on 2018-04-13)Number of networks: 783"
},

{
    "location": "data/dataset/Salix_Kolpelke/#Description-1",
    "page": "Salix Kolpelke",
    "title": "Description",
    "category": "section",
    "text": "Food-web structure of willow-galling sawflies and their natural enemies across Europe."
},

{
    "location": "data/dataset/Salix_Kolpelke/#Programmatic-access-1",
    "page": "Salix Kolpelke",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nSalix_Kolpelke = dataset(\"Salix_Kolpelke\") # or dataset(18)"
},

{
    "location": "data/dataset/Salix_Kolpelke/#Networks-1",
    "page": "Salix Kolpelke",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n157 Kolpelke 135 1993-08-15, Norway, Nordland, Polarkreis II ✓ 13\n54 Kolpelke 32 1991-09-06, Switzerland, Wallis, NufenenpaÃŸ, PaÃŸhÃ¶he I ✓ 10\n158 Kolpelke 136 1993-08-14, Norway, Nordland, Polarkreis I ✓ 13\n55 Kolpelke 33 1991-09-05, Switzerland, Wallis, NufenenpaÃŸ, PaÃŸhÃ¶he I ✓ 6\n56 Kolpelke 34 1991-09-22, Germany, Brandenburg, Eberswalde ✓ 5\n107 Kolpelke 85 1989-06-29, Austria, Tirol, Gramai-Alm ✓ 9\n156 Kolpelke 134 1993-08-13, Norway, Nordland, Lofot, Sandsletta ✓ 9\n23 Kolpelke 1 1987-07-20, Austria, Tirol, Gern-Alm ✓ 17\n24 Kolpelke 2 1987-07-22, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 21\n25 Kolpelke 3 1987-07-20, Austria, Tirol, Rofan Gebirge, Erfurter HÃ¼tte ✓ 3\n26 Kolpelke 4 1987-07-22, Austria, Tirol, Zillertal, Lanersbach ✓ 7\n27 Kolpelke 5 1987-07-23, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 11\n28 Kolpelke 6 1986-07-17, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 12\n29 Kolpelke 7 1986-07-17, Germany, Schleswig-Holstein, Katinger Watt ✓ 8\n30 Kolpelke 8 1986-07-18, Germany, Schleswig-Holstein, Katinger Watt ✓ 9\n31 Kolpelke 9 1986-07-20, Denmark, Jylland, Hennestrand ✓ 10\n32 Kolpelke 10 1986-07-20, Denmark, Jylland, Vejersstrand ✓ 9\n33 Kolpelke 11 1986-07-22, Germany, Schleswig-Holstein, Rogerfelde ✓ 7\n34 Kolpelke 12 1986-07-22, Germany, Schleswig-Holstein, Altenkrempe ✓ 7\n35 Kolpelke 13 1986-07-26, Germany, Niedersachsen, Ritterhude ✓ 4\n36 Kolpelke 14 1986-07-25, Germany, Niedersachsen, Mellum ✓ 7\n37 Kolpelke 15 1986-07-26, Germany, Niedersachsen, Stendorf ✓ 7\n38 Kolpelke 16 1990-08-08, Norway, S.-Trondelag, Dovrefjell ✓ 23\n39 Kolpelke 17 1990-08-10, Norway, Oppland, Jotunheimen, Breiseterdalen ✓ 17\n40 Kolpelke 18 1990-08-15, Norway, Buskerud, Geilo ✓ 13\n41 Kolpelke 19 1991-08-06, Germany, Hessen, Vogelsberg, Hoherodskopf ✓ 7\n42 Kolpelke 20 1991-07-31, Germany, Hessen, Taunus, Oberreiffenberg ✓ 5\n43 Kolpelke 21 1991-08-27, Austria, Salzburg, Obertauern I ✓ 25\n44 Kolpelke 22 1991-08-29, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 16\n45 Kolpelke 23 1991-08-30, Austria, Tirol, Falzthurn-Alm ✓ 13\n46 Kolpelke 24 1991-08-30, Austria, Tirol, Gramai-Alm ✓ 6\n47 Kolpelke 25 1991-08-30, Austria, Tirol, Gern-Alm ✓ 4\n48 Kolpelke 26 1991-08-31, Austria, Tirol, Halltal ✓ 8\n49 Kolpelke 27 1991-09-01, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 19\n50 Kolpelke 28 1991-09-02, Austria, Tirol, Ã–tztal, Obergurgl ✓ 9\n51 Kolpelke 29 1991-09-01, Austria, Tirol, Ã–tztal, Vent&#x2F; Am Spiegel ✓ 9\n52 Kolpelke 30 1991-09-04, Switzerland, Wallis, GrimselpaÃŸ, RÃ¤terichsbodensee ✓ 24\n53 Kolpelke 31 1991-09-05, Switzerland, Wallis, Saastal, Mattmark ✓ 10\n57 Kolpelke 35 1991-09-23, Germany, Mecklenburg-Vorpommern, Plauer See ✓ 3\n58 Kolpelke 36 1991-10-23, Germany, Hessen, Taunus, Oberreiffenberg ✓ 8\n59 Kolpelke 37 1991-10-23, Germany, Hessen, MarkÃ¶bel ✓ 4\n60 Kolpelke 38 1992-07-19, Austria, Salzburg, Obertauern I ✓ 13\n61 Kolpelke 39 1992-08-25, Austria, Salzburg, Obertauern I ✓ 34\n62 Kolpelke 40 1992-08-25, Austria, Salzburg, TauernpaÃŸ, Untertauern I ✓ 2\n63 Kolpelke 41 1992-08-26, Austria, Tirol, Falzthurn-Alm ✓ 9\n64 Kolpelke 42 1992-08-27, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 4\n65 Kolpelke 43 1992-08-27, Austria, Tirol, Ã–tztal, Vent&#x2F; Rofental ✓ 4\n66 Kolpelke 44 1992-08-28, Austria, Tirol, Ã–tztal, Obergurgl ✓ 11\n67 Kolpelke 45 1987-07-23, Austria, Tirol, Ã–tztal, Vent&#x2F; Am Spiegel ✓ 4\n68 Kolpelke 46 1987-07-26, Switzerland, Wallis, Saastal, Mattmark ✓ 9\n69 Kolpelke 47 1987-07-27, Switzerland, Wallis, Obergoms, Gletsch ✓ 23\n70 Kolpelke 48 1987-07-28, Switzerland, Wallis, Binntal nr. Fiesch ✓ 6\n71 Kolpelke 49 1987-07-30, Switzerland, Wallis, Obergoms, Reckingen ✓ 12\n72 Kolpelke 50 1987-07-14, Germany, Hessen, Vogelsberg, Hoherodskopf ✓ 11\n73 Kolpelke 51 1987-07-14, Germany, Hessen, Gedern ✓ 4\n74 Kolpelke 52 1987-10-02, Germany, Baden-WÃ¼rttemberg, Ketsch ✓ 10\n75 Kolpelke 53 1987-10-17, Poland, Polen, Torun ✓ 9\n76 Kolpelke 54 1987-10-22, Poland, Polen, Narewa ✓ 3\n77 Kolpelke 55 1987-05-26, Germany, Hessen, Griesheim bei Darmstadt ✓ 4\n78 Kolpelke 56 1988-07-27, Norway, Oppland, Peer Gynt veien I ✓ 10\n79 Kolpelke 57 1988-07-26, Norway, Oppland, Tretten, Nordbu nr. Ringebu ✓ 4\n80 Kolpelke 58 1988-07-27, Norway, Oppland, Peer Gynt veien II ✓ 12\n81 Kolpelke 59 1988-07-27, Norway, Oppland, Tretten, Nordbu nr. Ringebu ✓ 15\n82 Kolpelke 60 1988-07-29, Norway, N.-Trondelag, Skoganvatnet ✓ 14\n83 Kolpelke 61 1988-07-30, Norway, Nordland, Korgfjellet ✓ 22\n84 Kolpelke 62 1988-07-31, Norway, Nordland, Polarkreis I ✓ 7\n85 Kolpelke 63 1988-08-03, Norway, Nordland, Lofot, Sandsletta ✓ 9\n86 Kolpelke 64 1988-08-04, Norway, Troms, Bardu ✓ 8\n87 Kolpelke 65 1988-08-05, Norway, Troms, Ramfjorden ✓ 12\n88 Kolpelke 66 1988-08-07, Norway, Troms, Kvaenangsbotn ✓ 7\n89 Kolpelke 67 1988-08-09, Norway, Finnmark, Alta, Baeskades ✓ 20\n90 Kolpelke 68 1988-08-11, Finland, Lappin, KilpisjÃ¤rvi ✓ 23\n91 Kolpelke 69 1988-08-13, Norway, Nordland, Narvik, BjÃ¶rnfjell ✓ 7\n92 Kolpelke 70 1988-08-13, Sweden, Norrbotten, Torne TrÃ¤sk, Abisko ✓ 11\n93 Kolpelke 71 1988-08-15, Norway, Nordland, Polarkreis I ✓ 5\n94 Kolpelke 72 1988-08-19, Norway, S.-Trondelag, Oppdal ✓ 10\n95 Kolpelke 73 1988-08-15, Norway, Nordland, Korgfjellet ✓ 11\n96 Kolpelke 74 1988-08-19, Norway, S.-Trondelag, Dovrefjell ✓ 3\n97 Kolpelke 75 1988-08-19, Norway, Oppland, Jotunheimen, Breiseterdalen ✓ 5\n98 Kolpelke 76 1988-08-22, Norway, Hordaland, Tyssedal, Ringedalsvatn ✓ 9\n99 Kolpelke 77 1988-08-22, Norway, Hordaland, RÃ¶ldal ✓ 5\n100 Kolpelke 78 1988-06-24, Germany, Hessen, Griesheim bei Darmstadt ✓ 6\n101 Kolpelke 79 1988-09-22, Germany, Hessen, GieÃŸen, Staufenberger Forst ✓ 5\n102 Kolpelke 80 1988-07-13, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 3\n103 Kolpelke 81 1989-05-31, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 9\n104 Kolpelke 82 1989-05-31, Germany, Hessen, Griesheim bei Darmstadt ✓ 9\n105 Kolpelke 83 1989-06-01, Germany, Hessen, Taunus, Waldems-Esch ✓ 5\n106 Kolpelke 84 1989-05-31, Germany, Hessen, KÃ¼hkopf, Mordhecke III ✓ 9\n108 Kolpelke 86 1989-06-30, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 3\n109 Kolpelke 87 1989-06-30, Austria, Tirol, Zillertal, Lanersbach ✓ 3\n110 Kolpelke 88 1989-07-02, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 4\n111 Kolpelke 89 1989-07-04, Italy, Trentino, Vernagt-Stausee ✓ 4\n112 Kolpelke 90 1989-08-10, Austria, Steiermark, Planneralm II ✓ 10\n113 Kolpelke 91 1989-08-10, Austria, Steiermark, Planneralm I ✓ 5\n114 Kolpelke 92 1989-08-11, Austria, Steiermark, Tauplitzalm ✓ 10\n115 Kolpelke 93 1989-08-11, Austria, Steiermark, Bad Aussee ✓ 13\n116 Kolpelke 94 1989-08-12, Austria, Salzburg, Obertauern I ✓ 15\n117 Kolpelke 95 1989-08-13, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 11\n118 Kolpelke 96 1989-08-13, Austria, Tirol, Zillertal, Lanersbach ✓ 5\n119 Kolpelke 97 1989-08-15, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 16\n120 Kolpelke 98 1989-08-15, Austria, Tirol, Ã–tztal, Obergurgl ✓ 8\n121 Kolpelke 99 1989-08-16, Austria, Tirol, Ã–tztal, Obergurgl ✓ 4\n122 Kolpelke 100 1989-08-17, Austria, Tirol, Ã–tztal, Timmelsjoch ✓ 4\n123 Kolpelke 101 1989-08-22, Poland, Polen, Spytkowo ✓ 5\n124 Kolpelke 102 1989-08-22, Poland, Polen, Kruklanki ✓ 6\n125 Kolpelke 103 1990-07-17, Norway, Oppland, Tretten, Nordbu nr. Ringebu ✓ 14\n126 Kolpelke 104 1990-07-18, Norway, Oppland, Peer Gynt veien I ✓ 9\n127 Kolpelke 105 1990-07-20, Norway, N.-Trondelag, Skoganvatnet ✓ 8\n128 Kolpelke 106 1990-07-22, Norway, Troms, Lapphaugen bei Bardu ✓ 18\n129 Kolpelke 107 1990-07-18, Norway, Hedmark, Folldal, Dahlholen ✓ 6\n130 Kolpelke 108 1990-07-25, Norway, Finnmark, Alta, Baeskades ✓ 10\n131 Kolpelke 109 1990-07-27, Norway, Finnmark, Garguluobbal, Karasjok ✓ 8\n132 Kolpelke 110 1990-07-27, Norway, Finnmark, N.-Varanger, Tanabru ✓ 11\n133 Kolpelke 111 1990-07-28, Norway, Finnmark, N.-Varanger, Sandfjord ✓ 12\n134 Kolpelke 112 1990-07-28, Norway, Finnmark, N.-Varanger, Sandfjord, Fjell ✓ 7\n135 Kolpelke 113 1990-07-29, Norway, Finnmark, Ifjordfjellet &#x2F; Gilojokka ✓ 24\n136 Kolpelke 114 1990-08-01, Finland, Lappin, KilpisjÃ¤rvi ✓ 14\n137 Kolpelke 115 1990-08-03, Sweden, Norrbotten, Torne TrÃ¤sk, Abisko ✓ 10\n138 Kolpelke 116 1990-08-05, Norway, Nordland, Polarkreis, Krokstrand ✓ 22\n139 Kolpelke 117 1990-08-06, Norway, Nordland, Korgfjellet ✓ 20\n140 Kolpelke 118 1992-08-28, Austria, Tirol, Ã–tztal, Obergurgl&#x2F; Bruggboden ✓ 8\n141 Kolpelke 119 1992-08-29, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 4\n142 Kolpelke 120 1992-08-30, Austria, Tirol, Pitztal, NÃ¤he Mittelberg ✓ 12\n143 Kolpelke 121 1992-09-01, Switzerland, Wallis, Saastal, Mattmark ✓ 16\n144 Kolpelke 122 1992-09-02, Switzerland, Wallis, GrimselpaÃŸ, RÃ¤terichsbodensee ✓ 10\n145 Kolpelke 123 1992-09-03, Switzerland, Wallis, NufenenpaÃŸ, PaÃŸhÃ¶he I ✓ 11\n146 Kolpelke 124 1992-09-04, Switzerland, Wallis, Arolla ✓ 16\n147 Kolpelke 125 1993-08-01, Norway, Troms, Lapphaugen bei Bardu ✓ 20\n148 Kolpelke 126 1993-08-06, Norway, Finnmark, Neiden ✓ 13\n149 Kolpelke 127 1993-08-05, Norway, Finnmark, S.-Varanger, Svanvik ✓ 8\n150 Kolpelke 128 1993-08-05, Norway, Finnmark, Ifjordfjellet &#x2F; Gilojokka ✓ 3\n151 Kolpelke 129 1993-08-07, Norway, Finnmark, N.-Varanger, Tanabru ✓ 12\n152 Kolpelke 130 1993-08-08, Norway, Finnmark, Kvalsund, Breidalsfjell ✓ 4\n153 Kolpelke 131 1993-08-09, Norway, Finnmark, Alta, Baeskades ✓ 11\n154 Kolpelke 132 1993-08-11, Sweden, Norrbotten, Torne TrÃ¤sk, Abisko ✓ 24\n155 Kolpelke 133 1993-08-12, Norway, Nordland, Lofot, Sandsletta ✓ 2\n159 Kolpelke 137 1993-08-15, Norway, Nordland, Polarkreis, Krokstrand ✓ 15\n160 Kolpelke 138 1993-08-15, Norway, Nordland, Polarkreis III ✓ 10\n161 Kolpelke 139 1993-08-16, Norway, Nordland, Korgfjellet ✓ 13\n162 Kolpelke 140 1993-08-15, Norway, Nordland, Polarkreis IV ✓ 3\n163 Kolpelke 141 1993-08-16, Norway, N.-Trondelag, Namsskogan, Mellingsmoen ✓ 10\n164 Kolpelke 142 1993-08-19, Norway, Oppland, Jotunheimen, Breiseterdalen ✓ 25\n165 Kolpelke 143 1993-08-20, Norway, Sogn og Fjordane, Lusterfjord, HÃ¶yheimsvik ✓ 6\n166 Kolpelke 144 1993-08-22, Norway, Hordaland, Vikafjell bei ViksÃ¶yri ✓ 19\n167 Kolpelke 145 1993-08-24, Norway, Hordaland, Seljestad bei Odda ✓ 17\n168 Kolpelke 146 1994-07-10, Germany, Hessen, Altenstadt, HÃ¶chst ✓ 3\n169 Kolpelke 147 1994-07-12, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 5\n170 Kolpelke 148 1994-08-07, Austria, KÃ¤rnten, Maltatal I ✓ 14\n171 Kolpelke 149 1986-08-05, Germany, Niedersachsen, Norderney ✓ 14\n172 Kolpelke 150 1986-08-05, Germany, Niedersachsen, Mellum ✓ 8\n173 Kolpelke 151 1986-08-12, Germany, Niedersachsen, Borkum ✓ 9\n174 Kolpelke 152 1986-08-20, Germany, Baden-WÃ¼rttemberg, Jechtingen ✓ 7\n175 Kolpelke 153 1986-09-01, Germany, Bremen, Mahndorf ✓ 8\n176 Kolpelke 154 1986-09-22, Germany, Schleswig-Holstein, Altenkrempe ✓ 7\n177 Kolpelke 155 1986-09-24, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 4\n178 Kolpelke 156 1986-06-11, Germany, Hessen, Taunus, Waldems-Esch ✓ 11\n179 Kolpelke 157 1987-06-22, Germany, Hessen, Griesheim bei Darmstadt ✓ 12\n180 Kolpelke 158 1987-07-07, Germany, Hessen, Taunus, Usingen ✓ 4\n181 Kolpelke 159 1987-07-07, Germany, Hessen, Taunus, Waldems-Esch ✓ 5\n182 Kolpelke 160 1987-07-18, Austria, Tirol, Gramai-Alm ✓ 14\n183 Kolpelke 161 1987-07-18, Austria, Tirol, Falzthurn-Alm ✓ 20\n184 Kolpelke 162 1994-08-07, Austria, KÃ¤rnten, Maltatal II ✓ 4\n185 Kolpelke 163 1994-08-08, Austria, Salzburg, Obertauern I ✓ 12\n186 Kolpelke 164 1994-08-09, Austria, Salzburg, Obertauern I ✓ 22\n187 Kolpelke 165 1994-08-10, Austria, Salzburg, Obertauern II ✓ 17\n188 Kolpelke 166 1994-08-09, Austria, Salzburg, Preber See bei Tamsweg ✓ 5\n189 Kolpelke 167 1994-08-11, Austria, Salzburg, Zederhaustal, OberweiÃŸburg ✓ 13\n190 Kolpelke 168 1994-08-11, Austria, Salzburg, Murtal, Muhr ✓ 14\n191 Kolpelke 169 1994-08-12, Austria, Salzburg, TauernpaÃŸ, Tweng ✓ 14\n192 Kolpelke 170 1994-08-11, Austria, Salzburg, Murtal, Muhr, Kraftwerk ✓ 4\n193 Kolpelke 171 1994-09-11, Switzerland, Wallis, Obergoms, Gletsch ✓ 13\n194 Kolpelke 172 1994-09-11, Switzerland, Wallis, Obergoms, Oberwald ✓ 7\n195 Kolpelke 173 1994-09-11, Switzerland, Wallis, GrimselpaÃŸ, Grimselsee ✓ 16\n196 Kolpelke 174 1994-09-12, Switzerland, Wallis, Saastal, Mattmark ✓ 18\n197 Kolpelke 175 1994-09-12, Switzerland, Wallis, Mattertal, TÃ¤sch ✓ 13\n198 Kolpelke 176 1994-09-13, Switzerland, Wallis, Obergoms, Obergesteln ✓ 12\n199 Kolpelke 177 1994-09-13, Switzerland, Tessin, NufenenpaÃŸ, PaÃŸhÃ¶he II ✓ 15\n200 Kolpelke 178 1994-09-13, Switzerland, Tessin, NufenenpaÃŸ, Val de Bedretto I ✓ 18\n201 Kolpelke 179 1994-09-15, Switzerland, Tessin, NufenenpaÃŸ, Val de Bedretto II ✓ 12\n202 Kolpelke 180 1994-09-15, Italy, Piemont, Val Divedro, Domodossola ✓ 6\n203 Kolpelke 181 1994-09-16, Switzerland, Wallis, Obergoms, Oberwald ✓ 12\n204 Kolpelke 182 1994-10-06, Germany, Hessen, Taunus, Oberreiffenberg ✓ 5\n205 Kolpelke 183 1994-10-19, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 3\n206 Kolpelke 184 1994-10-19, Germany, Hessen, KÃ¼hkopf, Mordhecke III ✓ 6\n207 Kolpelke 185 1995-04-06, Germany, Hessen, KÃ¼hkopf, Mordhecke III ✓ 5\n208 Kolpelke 186 1995-04-06, Germany, Hessen, Griesheim bei Darmstadt ✓ 5\n209 Kolpelke 187 1995-07-03, Germany, Hessen, Hanau, Steinheim ✓ 2\n210 Kolpelke 188 1995-07-02, Germany, Hessen, Altenstadt, HÃ¶chst ✓ 3\n211 Kolpelke 189 1995-06-27, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 5\n212 Kolpelke 190 1995-06-27, Germany, Hessen, MÃ¶rfelden, Baggersee ✓ 11\n213 Kolpelke 191 1995-06-27, Germany, Hessen, Griesheim bei Darmstadt ✓ 4\n214 Kolpelke 192 1995-07-02, Germany, Hessen, Limeshain, Rommelhausen ✓ 7\n215 Kolpelke 193 1995-07-04, Germany, Hessen, Ortenberg I ✓ 7\n216 Kolpelke 194 1995-07-04, Germany, Hessen, Vogelsberg, Hoherodskopf ✓ 10\n217 Kolpelke 195 1995-07-04, Germany, Hessen, Ortenberg III ✓ 5\n218 Kolpelke 196 1995-07-12, Germany, Hessen, Taunus, Dorfweil ✓ 12\n219 Kolpelke 197 1995-07-27, Italy, Trentino, Val di Egro, Mt. Tremalzo II ✓ 12\n220 Kolpelke 198 1995-07-26, Italy, Lombardei, Paso di Gavia, Pezzo ✓ 9\n221 Kolpelke 199 1995-07-24, Italy, Lombardei, Paso del Maniva, Dosso Alto ✓ 9\n222 Kolpelke 200 1995-07-26, Italy, Trentino, Paso del Tonale ✓ 5\n223 Kolpelke 201 1995-07-25, Italy, Trentino, Val di Egro, Mt. Tremalzo II ✓ 4\n224 Kolpelke 202 1995-07-29, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 12\n225 Kolpelke 203 1995-07-29, Austria, Tirol, Ã–tztal, Obergurgl ✓ 5\n226 Kolpelke 204 1995-09-10, Switzerland, Wallis, GrimselpaÃŸ, Grimselsee ✓ 16\n227 Kolpelke 205 1995-09-10, Switzerland, Wallis, NufenenpaÃŸ, Aegtnental ✓ 5\n228 Kolpelke 206 1995-09-10, Switzerland, Wallis, NufenenpaÃŸ, PaÃŸhÃ¶he I ✓ 19\n229 Kolpelke 207 1995-09-11, Switzerland, Tessin, NufenenpaÃŸ, Val de Bedretto II ✓ 7\n230 Kolpelke 208 1995-09-11, Switzerland, Wallis, Obergoms, Obergesteln ✓ 3\n231 Kolpelke 209 1995-09-13, Switzerland, Wallis, Obergoms, Reckingen ✓ 6\n232 Kolpelke 210 1995-09-14, Austria, Salzburg, Obertauern I ✓ 18\n233 Kolpelke 211 1995-07-04, Germany, Hessen, Hanau, Steinheim ✓ 2\n234 Kolpelke 212 1995-10-01, Germany, Hessen, Griesheim bei Darmstadt ✓ 2\n235 Kolpelke 213 1995-09-12, Switzerland, Wallis, Obergoms, Obergesteln ✓ 6\n236 Kolpelke 214 1995-07-12, Germany, Hessen, Taunus, Hunoldstal ✓ 3\n237 Kolpelke 215 1995-09-11, Switzerland, Tessin, NufenenpaÃŸ, Val de Bedretto I ✓ 6\n238 Kolpelke 216 1995-07-12, Germany, Hessen, Taunus, Usingen ✓ 5\n239 Kolpelke 217 1995-07-12, Germany, Hessen, KilianstÃ¤tten ✓ 4\n240 Kolpelke 218 1995-09-13, Switzerland, Wallis, Obergoms, Obergesteln ✓ 6\n241 Kolpelke 219 1995-10-12, Germany, Hessen, Taunus, Usingen ✓ 6\n242 Kolpelke 220 1995-10-11, Germany, Hessen, KÃ¼hkopf, Mordhecke III ✓ 5\n243 Kolpelke 221 1995-07-23, Italy, Trentino, Mt. Altissimo di Nago ✓ 5\n244 Kolpelke 222 1995-10-11, Germany, Hessen, MÃ¶rfelden, Baggersee ✓ 5\n245 Kolpelke 223 1995-07-27, Italy, Trentino, Val di Egro, Mt. Tremalzo I ✓ 3\n246 Kolpelke 224 1995-07-25, Italy, Trentino, Val di Egro, Mt. Tremalzo I ✓ 5\n247 Kolpelke 225 1995-07-26, Italy, Trentino, Val Vermiglio, Pellizano ✓ 3\n248 Kolpelke 226 1996-07-26, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 3\n249 Kolpelke 227 1996-08-17, Germany, Schleswig-Holstein, St. Peter-Ording ✓ 10\n250 Kolpelke 228 1996-08-16, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 8\n251 Kolpelke 229 1996-08-16, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 6\n252 Kolpelke 230 1996-08-29, Austria, Tirol, Ã–tztal, Vent&#x2F; Rofental ✓ 6\n253 Kolpelke 231 1996-08-26, Austria, Salzburg, Obertauern I ✓ 22\n254 Kolpelke 232 1996-08-30, Italy, Emilia Romagna, Piancancelli, Forli-Cesena ✓ 2\n255 Kolpelke 233 1996-08-27, Austria, Salzburg, TauernpaÃŸ, Untertauern II ✓ 10\n256 Kolpelke 234 1996-05-18, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 5\n257 Kolpelke 235 1996-07-18, Germany, Hessen, Ortenberg I ✓ 6\n258 Kolpelke 236 1996-07-17, Germany, Hessen, KÃ¼hkopf, Mordhecke II ✓ 10\n259 Kolpelke 237 1996-07-17, Germany, Hessen, MÃ¶rfelden, Baggersee ✓ 5\n260 Kolpelke 238 1996-07-17, Germany, Hessen, Griesheim bei Darmstadt ✓ 6\n261 Kolpelke 239 1996-07-18, Germany, Hessen, KilianstÃ¤tten ✓ 7\n262 Kolpelke 240 1996-07-18, Germany, Hessen, Nidderau-Heldenbergen ✓ 3\n263 Kolpelke 241 1996-07-18, Germany, Hessen, Ortenberg II ✓ 4\n264 Kolpelke 242 1996-08-02, Germany, Hessen, Limeshain, Rommelhausen ✓ 6\n265 Kolpelke 243 1996-08-27, Austria, Salzburg, Obertauern I ✓ 20\n266 Kolpelke 244 1996-08-28, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 16\n267 Kolpelke 245 1996-08-29, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 11\n268 Kolpelke 246 1996-08-30, Austria, Tirol, Pitztal, NÃ¤he Mittelberg ✓ 9\n269 Kolpelke 247 1996-08-27, Austria, Salzburg, TauernpaÃŸ, Untertauern I ✓ 2\n270 Kolpelke 248 1996-09-23, Switzerland, Wallis, GrimselpaÃŸ, Grimselsee ✓ 6\n271 Kolpelke 249 1996-09-24, Switzerland, Wallis, NufenenpaÃŸ, Aegtnental ✓ 4\n272 Kolpelke 250 1996-09-25, Austria, Tirol, Ã–tztal, Obergurgl ✓ 5\n273 Kolpelke 251 1996-09-25, Switzerland, Wallis, Obergoms, Oberwald ✓ 5\n274 Kolpelke 252 1996-09-24, Switzerland, Tessin, NufenenpaÃŸ, Val de Bedretto I ✓ 7\n275 Kolpelke 253 1996-09-26, Switzerland, Wallis, Obergoms, Obergesteln ✓ 4\n276 Kolpelke 254 1996-09-26, Switzerland, Uri, Hospental ✓ 3\n277 Kolpelke 255 1996-09-24, Switzerland, Wallis, NufenenpaÃŸ, E-Werk ✓ 4\n278 Kolpelke 256 1996-09-24, Switzerland, Tessin, NufenenpaÃŸ, Val de Bedretto II ✓ 5\n279 Kolpelke 257 1996-09-25, Switzerland, Wallis, GrimselpaÃŸ, RÃ¤terichsbodensee ✓ 3\n280 Kolpelke 258 1996-09-25, Switzerland, Wallis, GrimselpaÃŸ, Grimselsee ✓ 5\n281 Kolpelke 259 1996-09-24, Switzerland, Wallis, Obergoms, Gletsch ✓ 3\n282 Kolpelke 260 1996-09-28, Germany, Baden-WÃ¼rttemberg, Schwarzwald, AltglashÃ¼tten ✓ 6\n283 Kolpelke 261 1996-09-28, Germany, Baden-WÃ¼rttemberg, Schwarzwald, Schluchsee ✓ 3\n284 Kolpelke 262 1996-10-06, Austria, NiederÃ¶sterreich, Schrems-PÃ¼rbach ✓ 3\n285 Kolpelke 263 1996-10-12, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 5\n286 Kolpelke 264 1996-11-14, Austria, NiederÃ¶sterreich, Etzen ✓ 3\n287 Kolpelke 265 1997-08-03, Norway, Nordland, Korgfjellet ✓ 14\n288 Kolpelke 266 1997-08-03, Norway, N.-Trondelag, Namsskogan, Mellingsmoen ✓ 10\n289 Kolpelke 267 1997-08-07, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 7\n290 Kolpelke 268 1997-08-07, Norway, Finnmark, S.-Varanger, Nyrud ✓ 12\n291 Kolpelke 269 1997-08-08, Norway, Finnmark, S.-Varanger, Svanvik ✓ 11\n292 Kolpelke 270 1997-08-10, Finland, Lappin, KilpisjÃ¤rvi ✓ 23\n293 Kolpelke 271 1997-08-08, Norway, Finnmark, Ifjordfjellet II ✓ 13\n294 Kolpelke 272 1997-08-02, Norway, Nordland, Polarkreis I ✓ 5\n295 Kolpelke 273 1997-08-02, Norway, N.-Trondelag, Grong ✓ 5\n296 Kolpelke 274 1997-08-06, Norway, Finnmark, S.-Varanger, Nyelv ✓ 8\n297 Kolpelke 275 1997-08-05, Norway, Finnmark, N.-Varanger, Sandfjord ✓ 15\n298 Kolpelke 276 1997-08-11, Norway, Troms, Lavangsdalen ✓ 10\n299 Kolpelke 277 1997-08-14, Norway, Nordland, Lofot, Sandsletta ✓ 8\n300 Kolpelke 278 1997-08-14, Norway, Nordland, Lofot, Laukvik ✓ 6\n301 Kolpelke 279 1997-08-29, Denmark, Jylland, Skagen ✓ 8\n302 Kolpelke 280 1997-08-16, Norway, Nordland, Fauske ✓ 13\n303 Kolpelke 281 1997-08-30, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 5\n304 Kolpelke 282 1997-08-16, Norway, Nordland, Polarkreis I ✓ 10\n305 Kolpelke 283 1997-08-16, Norway, Nordland, Polarkreis II ✓ 17\n306 Kolpelke 284 1997-08-22, Norway, Oppland, Jotunheimen, Breiseterdalen ✓ 20\n307 Kolpelke 285 1997-08-23, Norway, Sogn og Fjordane, Jostedalen ✓ 9\n308 Kolpelke 286 1997-08-19, Norway, N.-Trondelag, Stiklestad ✓ 4\n309 Kolpelke 287 1997-08-19, Norway, N.-Trondelag, Heimhulhatten ✓ 9\n310 Kolpelke 288 1997-08-17, Norway, Nordland, Korgfjellet ✓ 18\n311 Kolpelke 289 1997-08-01, Sweden, VÃ¤sterbotten, Taernaby &#x2F; Tjamerev. ✓ 9\n312 Kolpelke 290 1997-09-21, Germany, Hessen, Ortenberg I ✓ 13\n313 Kolpelke 291 1997-09-15, Austria, NiederÃ¶sterreich, Schrems-PÃ¼rbach ✓ 9\n314 Kolpelke 292 1997-09-27, Italy, Sardinien, Riu Malliu, bei Cagliari ✓ 4\n315 Kolpelke 293 1997-09-27, Italy, Sardinien, Riu di Pula, bei Cagliari ✓ 7\n316 Kolpelke 294 1997-09-27, Italy, Sardinien, F. Corogiu, Tortoli ✓ 4\n317 Kolpelke 295 1997-08-05, Norway, Finnmark, N.-Varanger, Tanabru ✓ 3\n318 Kolpelke 296 1997-08-06, Norway, Finnmark, N.-Varanger, Tanabru ✓ 9\n319 Kolpelke 297 1997-08-07, Norway, Finnmark, S.-Varanger, Vaggatem, Elentj. ✓ 7\n320 Kolpelke 298 1997-08-09, Norway, Troms, Kafjordbotn ✓ 3\n321 Kolpelke 299 1997-08-09, Norway, Finnmark, Kvaenangen, Gildetun ✓ 3\n322 Kolpelke 300 1997-08-13, Sweden, Norrbotten, Torne TrÃ¤sk, Abisko ✓ 12\n323 Kolpelke 301 1997-08-12, Norway, Troms, Lapphaugen bei Bardu ✓ 7\n324 Kolpelke 302 1997-08-14, Norway, Nordland, Lofot, Hadselsand ✓ 3\n325 Kolpelke 303 1997-08-16, Norway, Nordland, Polarkreis, Krokstrand ✓ 2\n326 Kolpelke 304 1997-08-17, Norway, N.-Trondelag, Grane ✓ 4\n327 Kolpelke 305 1997-08-18, Norway, S.-Trondelag, Nordfjorden ✓ 6\n328 Kolpelke 306 1997-08-18, Norway, S.-Trondelag, Haugsdalen ✓ 4\n329 Kolpelke 307 1997-08-19, Norway, N.-Trondelag, Malm ✓ 4\n330 Kolpelke 308 1997-08-20, Norway, N.-Trondelag, Hegra ✓ 4\n331 Kolpelke 309 1997-08-24, Norway, Sogn og Fjordane, Skjelingen ✓ 6\n332 Kolpelke 310 1997-08-24, Norway, Hordaland, Skutevik ✓ 7\n333 Kolpelke 311 1997-07-09, Germany, Hessen, KÃ¼hkopf, Mordhecke II ✓ 7\n334 Kolpelke 312 1997-07-09, Germany, Hessen, KilianstÃ¤tten ✓ 8\n335 Kolpelke 313 1997-07-13, Germany, Hessen, Limeshain, Rommelhausen ✓ 6\n336 Kolpelke 314 1997-09-21, Germany, Hessen, Limeshain, Rommelhausen ✓ 4\n337 Kolpelke 315 1997-10-14, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 5\n338 Kolpelke 316 1997-10-01, Austria, NiederÃ¶sterreich, Etzen ✓ 3\n339 Kolpelke 317 1998-03-09, Austria, NiederÃ¶sterreich, Etzen ✓ 9\n340 Kolpelke 318 1998-04-13, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 2\n341 Kolpelke 319 1998-08-13, Denmark, Jylland, Vejersstrand ✓ 9\n342 Kolpelke 320 1998-08-23, Austria, Salzburg, Dachsteingebirge, Hoferalm b. Filzmos ✓ 13\n343 Kolpelke 321 1998-08-23, Austria, Salzburg, Obertauern III ✓ 8\n344 Kolpelke 322 1998-08-25, Austria, NiederÃ¶sterreich, Etzen ✓ 4\n345 Kolpelke 323 1998-08-24, Austria, NiederÃ¶sterreich, Annaberg, Tennengau ✓ 5\n346 Kolpelke 324 1998-08-22, Austria, Salzburg, Obertauern I ✓ 19\n347 Kolpelke 325 1998-08-23, Austria, Steiermark, DachsteinstraÃŸe, Ramsau ✓ 14\n348 Kolpelke 326 1998-08-29, Switzerland, Wallis, GrimselpaÃŸ, Grimselsee ✓ 14\n349 Kolpelke 327 1998-08-25, Austria, NiederÃ¶sterreich, Schremser Moor ✓ 6\n350 Kolpelke 328 1998-08-25, Austria, NiederÃ¶sterreich, Schrems-PÃ¼rbach ✓ 10\n351 Kolpelke 329 1998-08-26, Austria, NiederÃ¶sterreich, Rappottenstein, EdmÃ¼hle, (Kamputer) ✓ 4\n352 Kolpelke 330 1998-08-24, Austria, Salzburg, Obertauern III ✓ 5\n353 Kolpelke 331 1998-08-24, Austria, OberÃ¶sterreich, Bad Ischl ✓ 7\n354 Kolpelke 332 1998-07-12, Germany, Hessen, KilianstÃ¤tten ✓ 8\n355 Kolpelke 333 1998-07-19, Germany, Hessen, Limeshain, Rommelhausen ✓ 4\n356 Kolpelke 334 1998-08-02, Germany, Hessen, Limeshain, Rommelhausen ✓ 3\n357 Kolpelke 335 1998-07-19, Germany, Hessen, Ortenberg III ✓ 3\n358 Kolpelke 336 1998-08-27, Austria, NiederÃ¶sterreich, Traismauer an der Donau ✓ 5\n359 Kolpelke 337 1998-08-26, Austria, NiederÃ¶sterreich, Rappottenstein, EdmÃ¼hle ✓ 4\n360 Kolpelke 338 1998-08-24, Austria, NiederÃ¶sterreich, Annaberg ✓ 5\n361 Kolpelke 339 1998-08-28, Austria, Tirol, Ã–tztal, Vent&#x2F; Rofental ✓ 5\n362 Kolpelke 340 1998-08-22, Austria, Salzburg, Obertauern III ✓ 8\n363 Kolpelke 341 1998-08-22, Austria, Salzburg, TauernpaÃŸ, Tweng ✓ 6\n364 Kolpelke 342 1998-08-01, Austria, Salzburg, Obertauern I ✓ 5\n365 Kolpelke 343 1998-08-28, Austria, Tirol, Ã–tztal, Obergurgl ✓ 4\n366 Kolpelke 344 1998-08-26, Austria, NiederÃ¶sterreich, Purath nr. Arbesbach ✓ 7\n367 Kolpelke 345 1998-08-22, Austria, Salzburg, Obertauern II ✓ 3\n368 Kolpelke 346 1998-08-28, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 5\n369 Kolpelke 347 1999-03-07, Austria, NiederÃ¶sterreich, Arbesbach I ✓ 8\n370 Kolpelke 348 1999-03-07, Austria, NiederÃ¶sterreich, Arbesbach II ✓ 7\n371 Kolpelke 349 1999-03-07, Austria, NiederÃ¶sterreich, Arbesbach III ✓ 6\n372 Kolpelke 350 1999-04-09, Germany, Hessen, Altenstadt, Nidder ✓ 4\n373 Kolpelke 351 1999-07-06, Germany, Baden-WÃ¼rttemberg, Rheinau (Jungwuchs) ✓ 17\n374 Kolpelke 352 1999-06-28, Germany, Nordrh.-Westfalen, Urdenbach, Urdenbacher KÃ¤mpe ✓ 15\n375 Kolpelke 353 1999-06-29, Germany, Nordrh.-Westfalen, Grietherbusch &#x2F; Dornick ✓ 22\n376 Kolpelke 354 1999-07-19, Switzerland, GraubÃ¼nden, Zillis ✓ 21\n377 Kolpelke 355 1999-07-05, Germany, Baden-WÃ¼rttemberg, Rheinau ✓ 12\n378 Kolpelke 356 1999-07-06, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 10\n379 Kolpelke 357 1999-07-06, Germany, Baden-WÃ¼rttemberg, Honau ✓ 25\n380 Kolpelke 358 1999-07-05, Germany, Baden-WÃ¼rttemberg, Honau ✓ 15\n381 Kolpelke 359 1999-07-29, Austria, Salzburg, Obertauern I ✓ 9\n382 Kolpelke 360 1999-07-21, Switzerland, GraubÃ¼nden, Zillis ✓ 7\n383 Kolpelke 361 1999-07-20, Switzerland, GraubÃ¼nden, Zillis ✓ 28\n384 Kolpelke 362 1999-07-18, Switzerland, GraubÃ¼nden, Zillis ✓ 4\n385 Kolpelke 363 1999-08-30, Switzerland, GraubÃ¼nden, Zillis ✓ 20\n386 Kolpelke 364 1999-09-01, Switzerland, GraubÃ¼nden, Juppa ✓ 33\n387 Kolpelke 365 1999-08-31, Switzerland, GraubÃ¼nden, Zillis ✓ 10\n388 Kolpelke 366 1999-09-02, Switzerland, GraubÃ¼nden, Lago di Lei ✓ 10\n389 Kolpelke 367 1999-09-02, Switzerland, GraubÃ¼nden, Juppa ✓ 15\n390 Kolpelke 368 1999-09-03, Switzerland, GraubÃ¼nden, JulierpaÃŸ bei Bivio ✓ 24\n391 Kolpelke 369 1999-09-03, Switzerland, GraubÃ¼nden, AlbulapaÃŸ nr. PaÃŸhÃ¶he ✓ 10\n392 Kolpelke 370 1999-08-25, France, Frankreich, La Massane ✓ 5\n393 Kolpelke 371 1999-09-13, Germany, Nordrh.-Westfalen, Urdenbach, Urdenbacher KÃ¤mpe ✓ 14\n394 Kolpelke 372 1999-09-14, Germany, Nordrh.-Westfalen, Grietherbusch &#x2F; Dornick ✓ 15\n395 Kolpelke 373 1999-09-28, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 7\n396 Kolpelke 374 1999-06-30, Germany, Nordrh.-Westfalen, Grietherbusch &#x2F; Dornick ✓ 15\n397 Kolpelke 375 1999-07-01, Germany, Nordrh.-Westfalen, Urdenbach, Urdenbacher KÃ¤mpe ✓ 12\n398 Kolpelke 376 1999-06-30, Germany, Nordrh.-Westfalen, Urdenbach, Urdenbacher KÃ¤mpe ✓ 2\n399 Kolpelke 377 1999-07-08, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 11\n400 Kolpelke 378 1999-07-08, Germany, Baden-WÃ¼rttemberg, Honau ✓ 3\n401 Kolpelke 379 1999-07-06, Germany, Baden-WÃ¼rttemberg, Rheinau ✓ 6\n402 Kolpelke 380 1999-04-03, Austria, NiederÃ¶sterreich, Etzen ✓ 7\n403 Kolpelke 381 1999-07-14, Switzerland, GraubÃ¼nden, Zillis ✓ 3\n404 Kolpelke 382 1999-06-02, Switzerland, GraubÃ¼nden, Zillis ✓ 13\n405 Kolpelke 383 1999-05-27, Switzerland, GraubÃ¼nden, Zillis ✓ 2\n406 Kolpelke 384 2000-08-14, Switzerland, GraubÃ¼nden, Zillis ✓ 15\n407 Kolpelke 385 2000-07-17, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 51\n408 Kolpelke 386 2000-07-20, Germany, Baden-WÃ¼rttemberg, Rheinau ✓ 15\n409 Kolpelke 387 2000-07-19, Germany, Baden-WÃ¼rttemberg, Honau ✓ 22\n410 Kolpelke 388 2000-07-12, Austria, Tirol, Ried &#x2F; Oberinntal ✓ 7\n411 Kolpelke 389 2000-07-24, Switzerland, GraubÃ¼nden, Zillis ✓ 22\n412 Kolpelke 390 2000-07-25, Switzerland, GraubÃ¼nden, Juppa ✓ 14\n413 Kolpelke 391 2000-07-26, Switzerland, GraubÃ¼nden, Zillis ✓ 20\n414 Kolpelke 392 2000-07-26, Italy, Lombardei, Montespluga ✓ 9\n415 Kolpelke 393 2000-07-25, Switzerland, GraubÃ¼nden, Lago di Lei ✓ 24\n416 Kolpelke 394 2000-07-25, Switzerland, GraubÃ¼nden, JulierpaÃŸ bei Bivio ✓ 4\n417 Kolpelke 395 2000-07-27, Switzerland, GraubÃ¼nden, JulierpaÃŸ bei Bivio ✓ 22\n418 Kolpelke 396 2000-07-27, Switzerland, GraubÃ¼nden, Fluela-PaÃŸ ✓ 4\n419 Kolpelke 397 2000-08-16, Switzerland, GraubÃ¼nden, JulierpaÃŸ bei Bivio ✓ 45\n420 Kolpelke 398 2000-08-26, Switzerland, GraubÃ¼nden, AlbulapaÃŸ nr. PaÃŸhÃ¶he ✓ 5\n421 Kolpelke 399 2000-08-15, Switzerland, GraubÃ¼nden, Juppa ✓ 52\n422 Kolpelke 400 2000-08-15, Switzerland, GraubÃ¼nden, JulierpaÃŸ bei Bivio ✓ 8\n423 Kolpelke 401 2000-08-17, Switzerland, GraubÃ¼nden, Juppa ✓ 4\n424 Kolpelke 402 2000-08-15, Switzerland, GraubÃ¼nden, Lago di Lei ✓ 5\n425 Kolpelke 403 2000-09-04, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 19\n426 Kolpelke 404 2000-08-14, Switzerland, GraubÃ¼nden, Lago di Lei ✓ 2\n427 Kolpelke 405 2000-09-05, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 2\n428 Kolpelke 406 2000-09-07, Germany, Baden-WÃ¼rttemberg, Honau ✓ 2\n429 Kolpelke 407 2000-09-05, Austria, NiederÃ¶sterreich, Zwettl ✓ 3\n430 Kolpelke 408 2001-08-04, Norway, Finnmark, N.-Varanger, Sandfjord, Fjell ✓ 7\n431 Kolpelke 409 2001-08-06, Norway, Finnmark, S.-Varanger, Nyrud ✓ 25\n432 Kolpelke 410 2001-08-04, Norway, Finnmark, N.-Varanger, Sandfjord ✓ 5\n433 Kolpelke 411 2001-08-12, Norway, Nordland, Lofot, Grunnfjord ✓ 6\n434 Kolpelke 412 2001-08-07, Norway, Finnmark, S.-Varanger, Vaggatem, GjÃ¶kasen ✓ 11\n435 Kolpelke 413 2001-03-21, Norway, Hordaland, Skutevik ✓ 4\n436 Kolpelke 414 2001-08-08, Norway, Finnmark, Ifjordfjellet &#x2F; Gilojokka ✓ 13\n437 Kolpelke 415 2001-08-10, Finland, Lappin, KilpisjÃ¤rvi ✓ 16\n438 Kolpelke 416 2001-08-07, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 15\n439 Kolpelke 417 2001-08-15, Norway, Nordland, Polarkreis I ✓ 12\n440 Kolpelke 418 2001-08-14, Norway, Hordaland, Vikafjell bei ViksÃ¶yri ✓ 3\n441 Kolpelke 419 2001-08-03, Norway, Finnmark, N.-Varanger, Tanabru ✓ 12\n442 Kolpelke 420 2001-08-19, Norway, Hordaland, Vikafjell bei ViksÃ¶yri ✓ 8\n443 Kolpelke 421 2001-08-10, Norway, Troms, Lapphaugen bei Bardu ✓ 12\n444 Kolpelke 422 2001-08-14, Norway, Nordland, Lofot, Austvagoya, Moksnes ✓ 3\n445 Kolpelke 423 2001-08-19, Norway, Hordaland, Vikafjell bei ViksÃ¶yri II ✓ 7\n446 Kolpelke 424 2002-01-20, Austria, NiederÃ¶sterreich, GroÃŸgerungs ✓ 6\n447 Kolpelke 425 2001-07-26, Norway, S.-Trondelag, Dovrefjell ✓ 3\n448 Kolpelke 426 2001-06-25, Germany, Hessen, NWR Kinzigaue ✓ 2\n449 Kolpelke 427 2001-08-03, Norway, Finnmark, N.-Varanger, Sandfjord ✓ 2\n450 Kolpelke 428 2001-08-03, Norway, Finnmark, Karasjok ✓ 4\n451 Kolpelke 429 2001-08-02, Norway, Finnmark, Lakselv &#x2F; Stabursnes ✓ 9\n452 Kolpelke 430 2001-08-02, Norway, Finnmark, Alta ✓ 3\n453 Kolpelke 431 2001-08-05, Norway, Finnmark, N.-Varanger, Reppen ✓ 8\n454 Kolpelke 432 2001-08-05, Norway, Finnmark, S.-Varanger, Ferdesmyra ✓ 4\n455 Kolpelke 433 2001-08-05, Norway, Finnmark, S.-Varanger, Storskog ✓ 5\n456 Kolpelke 434 2001-08-05, Norway, Finnmark, S.-Varanger, Vaggatem, Elentj. ✓ 6\n457 Kolpelke 435 2001-08-12, Norway, Nordland, Lofot, Austvagoya, Morfjord ✓ 4\n458 Kolpelke 436 2001-08-11, Norway, Nordland, Lofot, Sandsletta ✓ 4\n459 Kolpelke 437 2001-08-09, Norway, Finnmark, Olderfjord &#x2F; Hatter ✓ 2\n460 Kolpelke 438 2001-08-13, Norway, Nordland, Lofot, Austvagoya, RÃ¶rvika ✓ 6\n461 Kolpelke 439 2001-08-14, Norway, Nordland, Lofot, Austvagoya, Moksnes, A ✓ 3\n462 Kolpelke 440 2001-08-21, Norway, Hordaland, Skutevik ✓ 8\n463 Kolpelke 441 2001-08-16, Norway, N.-Trondelag, Skogan ✓ 4\n464 Kolpelke 442 2001-08-22, Norway, Hordaland, Seljestad bei Odda ✓ 5\n465 Kolpelke 443 2001-08-14, Norway, Nordland, Lofot, Flakstad, Flakstad ✓ 4\n466 Kolpelke 444 2001-09-09, Norway, Finnmark, Olderfjord &#x2F; Hatter ✓ 3\n467 Kolpelke 445 2001-08-08, Norway, Hordaland, Skutevik ✓ 3\n468 Kolpelke 446 2002-03-15, Germany, Hessen, Altenstadt, Nidder ✓ 4\n469 Kolpelke 447 2002-07-29, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 6\n470 Kolpelke 448 2002-08-08, Austria, Salzburg, Obertauern I ✓ 12\n471 Kolpelke 449 2002-07-31, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 10\n472 Kolpelke 450 2002-08-07, Austria, Tirol, Defereggental, Stalleralm ✓ 6\n473 Kolpelke 451 2002-08-06, Austria, Tirol, Hohe Tauern, Kals ✓ 6\n474 Kolpelke 452 2002-08-08, Austria, Tirol, Hohe Tauern, Kals ✓ 3\n475 Kolpelke 453 2002-08-07, Austria, Tirol, Defereggental, St. Jakob, Trojer Alm ✓ 12\n476 Kolpelke 454 1982-06-15, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 21\n477 Kolpelke 455 1982-06-15, Germany, Hessen, Griesheim bei Darmstadt ✓ 14\n478 Kolpelke 456 1982-06-26, Germany, Hessen, Karben ✓ 6\n479 Kolpelke 457 1982-06-23, Germany, Hessen, Taunus, Waldems-Reichenbach ✓ 5\n480 Kolpelke 458 1982-06-23, Germany, Hessen, Taunus, Waldems-Esch ✓ 5\n481 Kolpelke 459 1982-06-23, Germany, Hessen, Taunus, Hunoldstal ✓ 8\n482 Kolpelke 460 1982-06-29, Germany, Hessen, Frankfurt, Riedwiese ✓ 12\n483 Kolpelke 461 1982-06-30, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 8\n484 Kolpelke 462 1982-06-30, Germany, Hessen, KÃ¼hkopf, Mordhecke III ✓ 7\n485 Kolpelke 463 1982-07-06, Austria, Tirol, Ã–tztal, SÃ¶lden&#x2F; Rechenau ✓ 7\n486 Kolpelke 464 1982-07-07, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 6\n487 Kolpelke 465 1982-07-08, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 5\n488 Kolpelke 466 1982-07-09, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 2\n489 Kolpelke 467 1982-07-20, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 14\n490 Kolpelke 468 1982-07-20, Germany, Hessen, KÃ¼hkopf, Mordhecke III ✓ 7\n491 Kolpelke 469 1982-08-01, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 20\n492 Kolpelke 470 1982-08-02, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 10\n493 Kolpelke 471 1982-08-02, Austria, Tirol, Zillertal, Stumm&#x2F; MÃ¤rzengrund ✓ 3\n494 Kolpelke 472 1982-08-04, Austria, Tirol, Olperer ✓ 6\n495 Kolpelke 473 1982-08-05, Austria, Tirol, Zillertal, Stumm&#x2F; MÃ¤rzengrund ✓ 2\n496 Kolpelke 474 1982-08-11, Germany, Hessen, Griesheim bei Darmstadt ✓ 6\n497 Kolpelke 475 1982-08-11, Germany, Hessen, KÃ¼hkopf, Mordhecke III ✓ 5\n498 Kolpelke 476 1982-08-11, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 16\n499 Kolpelke 477 1982-08-24, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 6\n500 Kolpelke 478 1982-08-29, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 24\n501 Kolpelke 479 1982-08-31, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 9\n502 Kolpelke 480 1982-09-01, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 13\n503 Kolpelke 481 1982-09-14, Germany, Hessen, Taunus, Hunoldstal ✓ 14\n504 Kolpelke 482 1982-09-14, Germany, Hessen, Taunus, Waldems-Reichenbach ✓ 8\n505 Kolpelke 483 1982-09-14, Germany, Hessen, Taunus, Waldems-Esch ✓ 7\n506 Kolpelke 484 1982-09-21, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 14\n507 Kolpelke 485 1983-05-17, Germany, Hessen, Griesheim bei Darmstadt ✓ 3\n508 Kolpelke 486 1983-06-15, Germany, Hessen, Frankfurt, Riedwiese ✓ 7\n509 Kolpelke 487 1983-06-14, Germany, Hessen, Griesheim bei Darmstadt ✓ 6\n510 Kolpelke 488 1983-06-21, Germany, Hessen, Griesheim bei Darmstadt ✓ 12\n511 Kolpelke 489 1983-06-21, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 6\n512 Kolpelke 490 1983-06-22, Germany, Hessen, Taunus, Waldems-Reichenbach ✓ 8\n513 Kolpelke 491 1983-06-22, Germany, Hessen, Taunus, Waldems-Esch ✓ 8\n514 Kolpelke 492 1983-06-22, Germany, Hessen, Taunus, Hunoldstal ✓ 11\n515 Kolpelke 493 1983-06-22, Germany, Hessen, Karben ✓ 4\n516 Kolpelke 494 1983-06-22, Germany, Hessen, Taunus, Usingen ✓ 12\n517 Kolpelke 495 1983-06-28, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 4\n518 Kolpelke 496 1983-07-04, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 4\n519 Kolpelke 497 1983-07-06, Austria, Tirol, Zillertal, Lanersbach&#x2F; Geiselalm ✓ 6\n520 Kolpelke 498 1983-07-06, Austria, Tirol, Zillertal, Lanersbach ✓ 5\n521 Kolpelke 499 1983-08-21, Austria, Tirol, Zillertal, Lanersbach ✓ 10\n522 Kolpelke 500 1983-08-16, Austria, Tirol, Ã–tztal, Obergurgl&#x2F; Gaisbergf. ✓ 7\n523 Kolpelke 501 1983-08-17, Austria, Tirol, Ã–tztal, Vent&#x2F; Am Spiegel ✓ 5\n524 Kolpelke 502 1983-08-17, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 9\n525 Kolpelke 503 1983-08-18, Austria, Tirol, Ã–tztal, Obergurgl ✓ 11\n526 Kolpelke 504 1983-08-22, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 18\n527 Kolpelke 505 1983-08-23, Austria, Tirol, Zillertal, Hintertux&#x2F; Weitental ✓ 17\n528 Kolpelke 506 1983-09-06, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 8\n529 Kolpelke 507 1983-09-06, Germany, Hessen, Griesheim bei Darmstadt ✓ 14\n530 Kolpelke 508 1983-09-07, Germany, Hessen, Karben ✓ 3\n531 Kolpelke 509 1983-09-07, Germany, Hessen, Taunus, Hunoldstal ✓ 7\n532 Kolpelke 510 1983-09-07, Germany, Hessen, Taunus, Waldems-Esch ✓ 11\n533 Kolpelke 511 1983-09-07, Germany, Hessen, Taunus, Usingen ✓ 5\n534 Kolpelke 512 1983-10-04, Germany, Baden-WÃ¼rttemberg, Schwarzwald, Schluchsee ✓ 6\n535 Kolpelke 513 1984-07-05, Switzerland, Wallis, Obergoms, Obergesteln ✓ 3\n536 Kolpelke 514 1984-07-07, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 2\n537 Kolpelke 515 1984-07-12, Germany, Hessen, Frankfurt, Riedwiese ✓ 6\n538 Kolpelke 516 1984-07-12, Germany, Hessen, Griesheim bei Darmstadt ✓ 4\n539 Kolpelke 517 1984-07-12, Germany, Hessen, Vogelsberg, Hoherodskopf ✓ 2\n540 Kolpelke 518 1984-07-19, Germany, Hessen, Taunus, Usingen ✓ 9\n541 Kolpelke 519 1984-07-18, Germany, Hessen, Vogelsberg, Hoherodskopf ✓ 5\n542 Kolpelke 520 1984-07-24, Germany, Hessen, Griesheim bei Darmstadt ✓ 3\n543 Kolpelke 521 1984-07-25, Germany, Hessen, Griesheim bei Darmstadt ✓ 4\n544 Kolpelke 522 1984-08-11, Switzerland, Wallis, Obergoms, Reckingen ✓ 17\n545 Kolpelke 523 1984-08-11, Switzerland, Wallis, Obergoms, Obergesteln ✓ 9\n546 Kolpelke 524 1984-08-12, Switzerland, Wallis, Obergoms, Gletsch ✓ 15\n547 Kolpelke 525 1984-08-13, Switzerland, Wallis, Arolla ✓ 7\n548 Kolpelke 526 1984-08-13, Switzerland, Wallis, Leukerbad ✓ 5\n549 Kolpelke 527 1984-08-13, Switzerland, Wallis, Les Hauderes ✓ 4\n550 Kolpelke 528 1984-08-14, Switzerland, Wallis, Saastal, Mattmark ✓ 18\n551 Kolpelke 529 1984-08-15, Switzerland, Uri, Hospental ✓ 14\n552 Kolpelke 530 1984-08-15, Switzerland, Wallis, NufenenpaÃŸ, PaÃŸhÃ¶he I ✓ 10\n553 Kolpelke 531 1984-08-15, Switzerland, Wallis, Binntal nr. Fiesch ✓ 7\n554 Kolpelke 532 1984-08-16, Switzerland, Wallis, Binntal nr. Fiesch ✓ 19\n555 Kolpelke 533 1984-08-17, Switzerland, Wallis, Obergoms, Gletsch ✓ 10\n556 Kolpelke 534 1984-08-18, Switzerland, Wallis, Saastal, Mattmark ✓ 13\n557 Kolpelke 535 1984-08-19, Switzerland, Wallis, GrimselpaÃŸ, RÃ¤terichsbodensee ✓ 3\n558 Kolpelke 536 1984-08-19, Switzerland, Wallis, GrimselpaÃŸ, Grimselsee ✓ 4\n559 Kolpelke 537 1984-08-19, Switzerland, Wallis, SustenpaÃŸ ✓ 4\n560 Kolpelke 538 1984-08-22, Austria, Tirol, Zillertal, Lanersbach ✓ 9\n561 Kolpelke 539 1984-08-06, Denmark, Jylland, Nymindegab ✓ 8\n562 Kolpelke 540 1984-09-17, Germany, Hessen, Niddatal, Ilbenstadt ✓ 2\n563 Kolpelke 541 1985-07-09, Norway, Oppland, Brandbu ✓ 5\n564 Kolpelke 542 1985-07-09, Norway, S.-Trondelag, Dovrefjell ✓ 7\n565 Kolpelke 543 1985-07-10, Norway, N.-Trondelag, Stiklestad ✓ 14\n566 Kolpelke 544 1985-07-11, Norway, N.-Trondelag, Steinkjer ✓ 16\n567 Kolpelke 545 1985-07-12, Norway, Nordland, Korgfjellet ✓ 13\n568 Kolpelke 546 1985-07-15, Norway, Nordland, Lofot, Laubstad ✓ 18\n569 Kolpelke 547 1985-07-18, Norway, Finnmark, Karasjok ✓ 8\n570 Kolpelke 548 1985-07-23, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 19\n571 Kolpelke 549 1985-07-24, Norway, Finnmark, Kirkenes ✓ 7\n572 Kolpelke 550 1985-07-25, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 12\n573 Kolpelke 551 1985-07-28, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 26\n574 Kolpelke 552 1985-07-30, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 7\n575 Kolpelke 553 1985-07-31, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 8\n576 Kolpelke 554 1985-08-01, Norway, Finnmark, Hauge, S.-Varanger ✓ 4\n577 Kolpelke 555 1985-08-02, Norway, Finnmark, S.-Varanger, Nyrud ✓ 10\n578 Kolpelke 556 1985-08-07, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 9\n579 Kolpelke 557 1985-08-11, Norway, Troms, Kafjordbotn ✓ 5\n580 Kolpelke 558 1985-08-12, Norway, Troms, Ramfjorden ✓ 7\n581 Kolpelke 559 1985-08-14, Norway, Nordland, Polarkreis I ✓ 8\n582 Kolpelke 560 1985-08-15, Norway, Nordland, Korgfjellet ✓ 5\n583 Kolpelke 561 1985-09-09, Germany, Hessen, Frankfurt, Uni-Campus ✓ 3\n584 Kolpelke 562 1985-09-15, Germany, Bayern, Leitenberg ✓ 8\n585 Kolpelke 563 1985-09-15, Germany, Bayern, Herbertshausen ✓ 5\n586 Kolpelke 564 1985-09-22, Germany, Hessen, Niddatal, Ilbenstadt ✓ 2\n587 Kolpelke 565 1985-10-05, Germany, Baden-WÃ¼rttemberg, Schwarzwald, Schluchsee ✓ 13\n588 Kolpelke 566 1985-10-06, Germany, Baden-WÃ¼rttemberg, Schwarzwald, Feldberg ✓ 13\n589 Kolpelke 567 1985-10-06, Germany, Baden-WÃ¼rttemberg, Schwarzwald, Todtnau ✓ 8\n590 Kolpelke 568 1985-11-18, Germany, Hamburg, Moorburg ✓ 7\n591 Kolpelke 569 1985-07-16, Norway, Finnmark, Karasjok ✓ 2\n592 Kolpelke 570 1985-08-05, Norway, Finnmark, Kirkenes, Flugplatz ✓ 3\n593 Kolpelke 571 1985-08-06, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 8\n594 Kolpelke 572 1985-08-08, Norway, Finnmark, S.-Varanger, Vaggatem ✓ 6\n595 Kolpelke 573 1986-06-10, Germany, Hessen, KÃ¼hkopf, Mordhecke I ✓ 13\n596 Kolpelke 574 1986-06-10, Germany, Hessen, Limeshain, Rommelhausen ✓ 7\n597 Kolpelke 575 1986-06-10, Germany, Hessen, Griesheim bei Darmstadt ✓ 11\n598 Kolpelke 576 1986-06-11, Germany, Hessen, Taunus, Hunoldstal ✓ 6\n599 Kolpelke 577 1986-06-24, Germany, Hessen, Limeshain, Rommelhausen ✓ 5\n600 Kolpelke 578 1986-06-24, Germany, Hessen, Vogelsberg, Hoherodskopf ✓ 14\n601 Kolpelke 579 1986-06-25, Germany, Hessen, Taunus, Hunoldstal ✓ 7\n602 Kolpelke 580 1986-06-25, Germany, Hessen, Taunus, Usingen ✓ 11\n603 Kolpelke 581 1986-07-01, Germany, Hessen, Vogelsberg, Hoherodskopf ✓ 3\n604 Kolpelke 582 1986-07-15, Germany, Schleswig-Holstein, Kiel, Langsee ✓ 11\n605 Kolpelke 583 1986-07-15, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 9\n606 Kolpelke 584 1986-07-16, Germany, Schleswig-Holstein, Howacht 1 ✓ 5\n607 Kolpelke 585 1986-07-16, Germany, Schleswig-Holstein, Howacht 3 ✓ 8\n608 Kolpelke 586 2002-10-07, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 10\n609 Kolpelke 587 2002-10-02, Luxembourg, Luxembourg, Luxembourg ✓ 5\n610 Kolpelke 588 2003-04-04, Austria, NiederÃ¶sterreich, GmÃ¼nd ✓ 2\n611 Kolpelke 589 2002-06-16, Germany, Hessen, KilianstÃ¤tten ✓ 2\n612 Kolpelke 590 2002-06-29, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 6\n613 Kolpelke 591 2002-08-07, Austria, Tirol, Defereggental, Erlsbach ✓ 19\n614 Kolpelke 592 2002-08-07, Austria, Tirol, Defereggental, Oberhausalpe ✓ 3\n615 Kolpelke 593 2003-07-31, Austria, Salzburg, WeiÃŸenbach ✓ 8\n616 Kolpelke 594 2003-07-29, Austria, Salzburg, Ramsau, Silberklamm ✓ 22\n617 Kolpelke 595 2003-08-01, Austria, Salzburg, Obertauern I ✓ 13\n618 Kolpelke 596 2003-08-01, Austria, Salzburg, SchÃ¶nfeld, Dr. Josef MehrlhÃ¼tte ✓ 12\n619 Kolpelke 597 2003-08-14, Germany, Mecklenburg-Vorpommern, Usedom, GÃ¶rmitz ✓ 4\n620 Kolpelke 598 2003-08-15, Germany, Mecklenburg-Vorpommern, Usedom, Ziemitz ✓ 7\n621 Kolpelke 599 2003-06-21, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 5\n622 Kolpelke 600 2003-06-26, Germany, Hessen, WÃ¼stensachsen, NWR Stirnberg ✓ 12\n623 Kolpelke 601 2003-07-14, Austria, NiederÃ¶sterreich, Waldverchs ✓ 13\n624 Kolpelke 602 2003-07-30, Austria, Salzburg, Schladming, Untertal ✓ 5\n625 Kolpelke 603 2003-07-30, Austria, Salzburg, Schladming, Untertal, RiesachfÃ¤lle ✓ 8\n626 Kolpelke 604 2003-08-12, Germany, Mecklenburg-Vorpommern, Usedom, Trassenheide ✓ 4\n627 Kolpelke 605 2003-08-13, Germany, Mecklenburg-Vorpommern, Usedom, Neuendorf ✓ 2\n628 Kolpelke 606 2003-08-14, Germany, Mecklenburg-Vorpommern, Usedom, Zempin, LÃ¼ttendorf ✓ 3\n629 Kolpelke 607 2003-08-15, Germany, Mecklenburg-Vorpommern, Usedom, LÃ¼tow ✓ 2\n630 Kolpelke 608 2003-08-14, Germany, Mecklenburg-Vorpommern, Usedom, Benz ✓ 2\n631 Kolpelke 609 2003-08-21, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 3\n632 Kolpelke 610 2004-06-11, Germany, Baden-WÃ¼rttemberg, MÃ¶ggingen ✓ 5\n633 Kolpelke 611 2004-06-12, Germany, Baden-WÃ¼rttemberg, Dettingen ✓ 4\n634 Kolpelke 612 2004-06-10, Germany, Baden-WÃ¼rttemberg, Markelfingen ✓ 3\n635 Kolpelke 613 2004-06-10, Germany, Baden-WÃ¼rttemberg, Hegne nr. Allensbach ✓ 4\n636 Kolpelke 614 2004-06-10, Germany, Baden-WÃ¼rttemberg, Kattenhorn nr. Wangen &#x2F; Bodensee &#x2F;Untersee ✓ 3\n637 Kolpelke 615 2004-06-26, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 3\n638 Kolpelke 616 2004-07-16, Germany, Baden-WÃ¼rttemberg, Schwarzwald, AltglashÃ¼tten ✓ 5\n639 Kolpelke 617 2004-07-15, Germany, Baden-WÃ¼rttemberg, Hartheim ✓ 5\n640 Kolpelke 618 2004-07-28, Germany, Hessen, WÃ¼stensachsen, NWR Stirnberg ✓ 6\n641 Kolpelke 619 2004-08-06, Sweden, JÃ¤mtland, Ã–stersund ✓ 5\n642 Kolpelke 620 2004-08-08, Sweden, Lappland, Storuman ✓ 14\n643 Kolpelke 621 2004-08-08, Sweden, Lappland, Yttervik &#x2F; Ajaure ✓ 2\n644 Kolpelke 622 2004-08-12, Norway, Nordland, Fauske ✓ 3\n645 Kolpelke 623 2004-08-12, Norway, Nordland, Polarkreis I ✓ 10\n646 Kolpelke 624 2004-08-13, Norway, Nordland, Lofot, Austvagoya, Morfjord ✓ 11\n647 Kolpelke 625 2004-08-13, Norway, Nordland, Lofot, Austvagoya, Delp ✓ 6\n648 Kolpelke 626 2004-08-14, Norway, Nordland, Lofot, Flakstad, Flakstad ✓ 3\n649 Kolpelke 627 2004-08-16, Norway, Nordland, Misvaerfjorden, Misvaer ✓ 4\n650 Kolpelke 628 2004-08-17, Norway, Nordland, Tennholmfjorden, Gimstad ✓ 3\n651 Kolpelke 629 2004-08-18, Norway, Nordland, Korgfjellet ✓ 2\n652 Kolpelke 630 2004-08-18, Norway, Nordland, Lofot, Vestvagoy, Torvdalen ✓ 4\n653 Kolpelke 631 2004-08-19, Norway, Oppland, Steinamoen ✓ 7\n654 Kolpelke 632 2004-08-19, Norway, N.-Trondelag, Skogan ✓ 2\n655 Kolpelke 633 2004-08-19, Norway, N.-Trondelag, Hammer ✓ 7\n656 Kolpelke 634 2004-08-20, Norway, S.-Trondelag, Leira nr. Trondheim ✓ 10\n657 Kolpelke 635 2004-08-21, Norway, S.-Trondelag, Berkak ✓ 5\n658 Kolpelke 636 2004-08-22, Norway, S.-Trondelag, Dovrefjell, Driva ✓ 2\n659 Kolpelke 637 2004-08-22, Norway, S.-Trondelag, Dovrefjell, GrÃ¶nbakken ✓ 17\n660 Kolpelke 638 2004-08-23, Norway, Oppland, Tretten, Nordbu nr. Ringebu ✓ 4\n661 Kolpelke 639 2004-08-24, Norway, Oppland, Peer Gynt veien I ✓ 9\n662 Kolpelke 640 2004-08-24, Norway, Oppland, Peer Gynt veien II ✓ 3\n663 Kolpelke 641 2004-08-24, Norway, Oppland, Peer Gynt veien III ✓ 8\n664 Kolpelke 642 2004-08-26, Norway, Ostfolk, KjÃ¶len nr. Halden ✓ 11\n665 Kolpelke 643 2004-08-26, Norway, Oppland, Tretten, Nordbu nr. Ringebu ✓ 3\n666 Kolpelke 644 2005-06-24, Germany, Schleswig-Holstein, SÃ¼der-Friedrichs-Koog ✓ 7\n667 Kolpelke 645 2005-06-24, Germany, Schleswig-Holstein, Katinger Watt ✓ 6\n668 Kolpelke 646 2005-06-11, Germany, Baden-WÃ¼rttemberg, Horn &#x2F; Bodensee &#x2F; Gnadensee ✓ 7\n669 Kolpelke 647 2005-06-15, Switzerland, Thurgau, Neuwilen, Bommer Weiher ✓ 13\n670 Kolpelke 648 2005-06-10, Germany, Baden-WÃ¼rttemberg, Radolfzell, Mettnau ✓ 6\n671 Kolpelke 649 2005-06-12, Germany, Baden-WÃ¼rttemberg, Andelshofen ✓ 4\n672 Kolpelke 650 2005-07-20, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Bergen &#x2F; Kaiseritz ✓ 15\n673 Kolpelke 651 2005-07-19, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Glowitz ✓ 16\n674 Kolpelke 652 2005-07-24, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Neukamp ✓ 13\n675 Kolpelke 653 2005-08-25, Croatia, Istrien, Modrus ✓ 6\n676 Kolpelke 654 2006-04-22, Austria, NiederÃ¶sterreich, St. Ulrichs ✓ 5\n677 Kolpelke 655 2006-04-24, Austria, NiederÃ¶sterreich, Pretrobruck ✓ 4\n678 Kolpelke 656 2006-04-23, Austria, NiederÃ¶sterreich, Etzen ✓ 4\n679 Kolpelke 657 2006-04-10, Austria, NiederÃ¶sterreich, Rastenfeld ✓ 4\n680 Kolpelke 658 2005-11-28, Germany, Schleswig-Holstein, St. Peter-Ording ✓ 10\n681 Kolpelke 659 2005-06-14, Switzerland, Thurgau, Weinfelden &#x2F; Thur ✓ 9\n682 Kolpelke 660 2005-06-17, Germany, Baden-WÃ¼rttemberg, Markelfingen &#x2F; Schlafbach ✓ 8\n683 Kolpelke 661 2005-06-18, Germany, Baden-WÃ¼rttemberg, Radolfzell, Mettnau ✓ 7\n684 Kolpelke 662 2005-06-11, Germany, Baden-WÃ¼rttemberg, Radolfzell, Mindelsee ✓ 6\n685 Kolpelke 663 2005-06-17, Germany, Baden-WÃ¼rttemberg, Hegne nr. Allensbach ✓ 7\n686 Kolpelke 664 2005-06-14, Germany, Baden-WÃ¼rttemberg, Kattenhorn nr. Wangen &#x2F; Bodensee &#x2F;Untersee ✓ 6\n687 Kolpelke 665 2005-06-23, Denmark, Jylland, Skaerbaek ✓ 6\n688 Kolpelke 666 2005-06-24, Denmark, Jylland, Tondern ✓ 4\n689 Kolpelke 667 2005-06-25, Denmark, Jylland, Logumkloster ✓ 3\n690 Kolpelke 668 2005-07-05, Austria, NiederÃ¶sterreich, Rastenfeld ✓ 3\n691 Kolpelke 669 2005-07-28, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Neukamp ✓ 2\n692 Kolpelke 670 2005-07-24, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Bergen &#x2F; Kaiseritz ✓ 3\n693 Kolpelke 671 2005-07-29, Germany, Schleswig-Holstein, Gammelby ✓ 5\n694 Kolpelke 672 2005-07-15, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Zittvitz ✓ 9\n695 Kolpelke 673 2005-07-18, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Neuensien ✓ 10\n696 Kolpelke 674 2005-07-16, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Zittvitz II ✓ 2\n697 Kolpelke 675 2005-07-21, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Dolgemost ✓ 5\n698 Kolpelke 676 2005-07-22, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Bergen &#x2F; Nonnenweiher ✓ 10\n699 Kolpelke 677 2005-07-23, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Kiekut ✓ 5\n700 Kolpelke 678 2005-07-17, Germany, Mecklenburg-Vorpommern, RÃ¼gen, Stedar ✓ 8\n701 Kolpelke 679 2005-07-20, Austria, NiederÃ¶sterreich, Nondorf ✓ 3\n702 Kolpelke 680 2005-07-26, Austria, NiederÃ¶sterreich, Frankenreith ✓ 2\n703 Kolpelke 681 2005-07-25, Austria, NiederÃ¶sterreich, Neustift ✓ 3\n704 Kolpelke 682 2005-07-22, Austria, NiederÃ¶sterreich, Waldreichs ✓ 5\n705 Kolpelke 683 2006-08-13, Lithuania, Litauen, Palanga ✓ 14\n706 Kolpelke 684 2006-08-07, Lithuania, Litauen, Kiduliai nr. Jurbarkas ✓ 9\n707 Kolpelke 685 2006-08-09, Lithuania, Litauen, nr. Rociskiai ✓ 9\n708 Kolpelke 686 2006-11-30, Denmark, Jylland, Nymindegab ✓ 5\n709 Kolpelke 687 2006-11-28, Denmark, Jylland, Vejersstrand ✓ 4\n710 Kolpelke 688 2006-11-27, Germany, Schleswig-Holstein, St. Peter-Ording ✓ 4\n711 Kolpelke 689 2006-07-02, Germany, Baden-WÃ¼rttemberg, Radolfzell, Mettnau ✓ 9\n712 Kolpelke 690 2006-07-03, Germany, Baden-WÃ¼rttemberg, Markelfingen ✓ 13\n713 Kolpelke 691 2006-07-03, Germany, Baden-WÃ¼rttemberg, Kattenhorn nr. Wangen &#x2F; Bodensee &#x2F;Untersee ✓ 2\n714 Kolpelke 692 2006-07-04, Germany, Baden-WÃ¼rttemberg, Markelfingen &#x2F; Schlafbach ✓ 7\n715 Kolpelke 693 2006-07-04, Germany, Baden-WÃ¼rttemberg, LindenbÃ¼hl nr. Reichenau ✓ 2\n716 Kolpelke 694 2006-07-04, Germany, Baden-WÃ¼rttemberg, Kattenhorn nr. Wangen &#x2F; Bodensee &#x2F;Untersee ✓ 3\n717 Kolpelke 695 2006-07-04, Germany, Baden-WÃ¼rttemberg, Hegne nr. Allensbach ✓ 5\n718 Kolpelke 696 2006-07-15, Austria, NiederÃ¶sterreich, Frankenreith ✓ 2\n719 Kolpelke 697 2006-07-15, Austria, NiederÃ¶sterreich, Grafenschlag ✓ 4\n720 Kolpelke 698 2006-08-03, Poland, Mazurskie, nr. Grabnik ✓ 7\n721 Kolpelke 699 2006-08-06, Lithuania, Litauen, Siluva ✓ 6\n722 Kolpelke 700 2006-08-09, Lithuania, Litauen, Sudargas ✓ 11\n723 Kolpelke 701 2006-08-05, Lithuania, Litauen, Jurbarkas ✓ 7\n724 Kolpelke 702 2006-08-10, Lithuania, Litauen, Raudone ✓ 5\n725 Kolpelke 703 2006-08-16, Poland, Polen, Walcz ✓ 4\n726 Kolpelke 704 2006-08-15, Poland, Mazurskie, Dabrowka nr. Mikolaiken ✓ 4\n727 Kolpelke 705 2006-08-14, Lithuania, Litauen, Nemirseta nr. Palanga ✓ 5\n728 Kolpelke 706 2006-08-12, Lithuania, Litauen, Neringa, Juodkrante ✓ 4\n729 Kolpelke 707 2006-08-11, Lithuania, Litauen, Palanga ✓ 4\n730 Kolpelke 708 2007-11-28, Denmark, Jylland, Nymindegab ✓ 4\n731 Kolpelke 709 2007-11-26, Denmark, Jylland, Skagen ✓ 4\n732 Kolpelke 710 2007-11-30, Germany, Schleswig-Holstein, St. Peter-Ording ✓ 6\n733 Kolpelke 711 2007-06-19, Germany, Schleswig-Holstein, Klausdorf, Schwentine ✓ 3\n734 Kolpelke 712 2007-06-15, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 6\n735 Kolpelke 713 2007-06-24, Germany, Hessen, Langen-Bergheim ✓ 12\n736 Kolpelke 714 2007-06-30, Germany, Baden-WÃ¼rttemberg, Bodman, Stockenloch ✓ 7\n737 Kolpelke 715 2007-06-30, Germany, Baden-WÃ¼rttemberg, Bodman, Bodenwald ✓ 2\n738 Kolpelke 716 2007-07-03, Germany, Baden-WÃ¼rttemberg, Radolfzell, Mindelsee ✓ 4\n739 Kolpelke 717 2007-07-03, Germany, Baden-WÃ¼rttemberg, Radolfzell, Markelfingen, Hornhalde ✓ 7\n740 Kolpelke 718 2007-07-03, Germany, Baden-WÃ¼rttemberg, Radolfzell, Mettnau ✓ 10\n741 Kolpelke 719 2007-07-04, Germany, Baden-WÃ¼rttemberg, Mimmenhausen, Martinsweiher ✓ 3\n742 Kolpelke 720 2007-07-04, Germany, Baden-WÃ¼rttemberg, MÃ¼hlhofen, Alseweiher ✓ 6\n743 Kolpelke 721 2007-07-04, Germany, Baden-WÃ¼rttemberg, Gebhardsweiler, MÃ¼hlhofen ✓ 3\n744 Kolpelke 722 2007-07-05, Germany, Baden-WÃ¼rttemberg, Eigeltingen ✓ 4\n745 Kolpelke 723 2007-07-06, Germany, Baden-WÃ¼rttemberg, Bad Waldsee ✓ 3\n746 Kolpelke 724 2007-07-30, Austria, Tirol, FernpaÃŸ ✓ 2\n747 Kolpelke 725 2007-07-31, Austria, Tirol, Ã–tztal, Vent&#x2F; Gample ✓ 10\n748 Kolpelke 726 2007-08-01, Austria, Tirol, Ã–tztal, SÃ¶lden&#x2F; Windache ✓ 4\n749 Kolpelke 727 2007-08-01, Austria, Tirol, Ã–tztal, Zwieselstein ✓ 4\n750 Kolpelke 728 2007-08-02, Austria, Tirol, Sulztal, Gries ✓ 6\n751 Kolpelke 729 2007-08-02, Austria, Tirol, Ã–tztal, Hochgurgl ✓ 4\n752 Kolpelke 730 2008-06-30, Germany, Schleswig-Holstein, Klausdorf, Schwentine ✓ 10\n753 Kolpelke 731 2008-07-20, Germany, Hessen, Langen-Bergheim ✓ 6\n754 Kolpelke 732 2008-08-09, Norway, S.-Trondelag, RÃ¶ros ✓ 15\n755 Kolpelke 733 2008-08-15, Norway, Sogn og Fjordane, SkjÃ¶lden ✓ 4\n756 Kolpelke 734 2008-08-18, Norway, Hordaland, Kvamskogen ✓ 16\n757 Kolpelke 735 2008-08-16, Norway, Sogn og Fjordane, Nigardsbreen nr. Gaupne ✓ 4\n758 Kolpelke 736 2008-08-17, Norway, Hordaland, Hola nr. Vik ✓ 2\n759 Kolpelke 737 2008-08-13, Norway, S.-Trondelag, Oppdal ✓ 3\n760 Kolpelke 738 2008-08-15, Norway, Oppland, Jotunheimen, Krossbu ✓ 5\n761 Kolpelke 739 2008-11-30, Germany, Schleswig-Holstein, St. Peter-Ording ✓ 6\n762 Kolpelke 740 2008-11-25, Denmark, Jylland, Nymindegab ✓ 5\n763 Kolpelke 741 2008-07-12, Germany, Hessen, Limeshain, Rommelhausen ✓ 8\n764 Kolpelke 742 2008-08-12, Norway, S.-Trondelag, Meldal, Resvatnet ✓ 11\n765 Kolpelke 743 2008-08-08, Norway, Oppland, Rondane Nationalpark, Solvang ✓ 7\n766 Kolpelke 744 2008-08-05, Norway, Oppland, Peer Gynt veien III ✓ 5\n767 Kolpelke 745 2008-08-10, Norway, S.-Trondelag, Stuguvollmoen ✓ 4\n768 Kolpelke 746 2008-08-08, Norway, Oppland, Tretten, Nordbu nr. Ringebu ✓ 5\n769 Kolpelke 747 2008-08-17, Norway, Hordaland, Vikafjell bei ViksÃ¶yri ✓ 3\n770 Kolpelke 748 2008-08-19, Norway, Hordaland, Hordalia nr. RÃ¶ldal ✓ 5\n771 Kolpelke 749 2008-08-19, Norway, Hordaland, Skutevik ✓ 5\n772 Kolpelke 750 2008-08-14, Norway, Oppland, Tofterno ✓ 2\n773 Kolpelke 751 2009-06-08, Italy, SÃ¼dtirol, Aldino ✓ 7\n774 Kolpelke 752 2009-11-25, Denmark, Jylland, Nymindegab ✓ 7\n775 Kolpelke 753 2009-11-30, Germany, Schleswig-Holstein, St. Peter-Ording ✓ 8\n776 Kolpelke 754 2009-06-11, Italy, SÃ¼dtirol, Fenner See ✓ 3\n777 Kolpelke 755 2009-06-09, Italy, SÃ¼dtirol, Ultental nr. Sankt Pankraz ✓ 3\n778 Kolpelke 756 2009-06-08, Italy, Trentino, Truden ✓ 4\n779 Kolpelke 757 2009-06-06, Italy, SÃ¼dtirol, Passo di Mendola nr. Kaltern ✓ 5\n780 Kolpelke 758 2009-06-08, Italy, SÃ¼dtirol, Bletterbachschlucht nr.Aldino ✓ 3\n781 Kolpelke 759 2009-06-28, Germany, Schleswig-Holstein, Preetz, Postsee ✓ 5\n782 Kolpelke 760 2009-06-29, Germany, Schleswig-Holstein, Kiel, Dietrichsdorf ✓ 8\n783 Kolpelke 761 2009-06-26, Germany, Schleswig-Holstein, Klausdorf, Schwentine ✓ 4\n784 Kolpelke 762 2009-06-27, Germany, Schleswig-Holstein, Kiel, Langsee ✓ 7\n785 Kolpelke 763 2009-07-12, Germany, Hessen, Limeshain, Rommelhausen ✓ 4\n786 Kolpelke 764 2009-07-12, Germany, Hessen, Langen-Bergheim ✓ 7\n787 Kolpelke 765 2009-08-27, Germany, Mecklenburg-Vorpommern, Prerow, DarÃŸ ✓ 2\n788 Kolpelke 766 2009-08-22, Germany, Mecklenburg-Vorpommern, Ahrenshoop, DarÃŸ ✓ 2\n789 Kolpelke 767 2009-08-26, Germany, Mecklenburg-Vorpommern, Born, DarÃŸ ✓ 6\n790 Kolpelke 768 2010-06-20, Denmark, Jylland, Blavand ✓ 3\n791 Kolpelke 769 2010-06-27, Denmark, Jylland, Vejersstrand ✓ 7\n792 Kolpelke 770 2010-06-25, Denmark, Jylland, Nymindegab ✓ 6\n793 Kolpelke 771 2010-06-21, Denmark, Jylland, Esbjerg ✓ 2\n794 Kolpelke 772 2010-06-25, Denmark, Jylland, Esbjerg ✓ 2\n795 Kolpelke 773 2010-08-05, Norway, Oppland, Peer Gynt veien, Hattal ✓ 5\n796 Kolpelke 774 2010-08-05, Norway, Oppland, Tretten, Nordbu nr. Ringebu ✓ 7\n797 Kolpelke 775 2010-08-04, Norway, Oppland, Peer Gynt veien III ✓ 8\n798 Kolpelke 776 2010-08-07, Norway, S.-Trondelag, Meldal, Resvatnet ✓ 16\n799 Kolpelke 777 2010-08-05, Norway, Oppland, Peer Gynt veien, Gala ✓ 6\n800 Kolpelke 778 2010-08-12, Norway, Hordaland, Hordalia nr. RÃ¶ldal ✓ 8\n801 Kolpelke 779 2010-08-11, Norway, Hordaland, Vikafjell bei ViksÃ¶yri ✓ 7\n802 Kolpelke 780 2010-08-15, Norway, Aust-Agder, Store Bjornvatn ✓ 5\n803 Kolpelke 781 2010-08-09, Norway, More og Romsdal, Sunnylvsfjorden nr Royr, Stranda ✓ 3\n804 Kolpelke 782 2010-08-10, Norway, Sogn og Fjordane, Vallestadfossen nr Forde ✓ 2\n805 Kolpelke 783 2010-08-12, Norway, Rogaland, Fister, Fisterfjorden ✓ 2"
},

{
    "location": "data/dataset/Silva_2002/#",
    "page": "Silva 2002",
    "title": "Silva 2002",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Silva_2002/#General-informations-1",
    "page": "Silva 2002",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Silva 2002 [4]Sampling date: 2000-03-01Added on: 2018-03-27 (last update on 2018-03-27)Number of networks: 1"
},

{
    "location": "data/dataset/Silva_2002/#Description-1",
    "page": "Silva 2002",
    "title": "Description",
    "category": "section",
    "text": "Fruit-bird interaction at the Intervales State Park, Brazil"
},

{
    "location": "data/dataset/Silva_2002/#Programmatic-access-1",
    "page": "Silva 2002",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nSilva_2002 = dataset(\"Silva_2002\") # or dataset(4)"
},

{
    "location": "data/dataset/Silva_2002/#Networks-1",
    "page": "Silva 2002",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n4 Silva_2002 Fruit-bird interaction at the Intervales State Park, Brazil ✓ 317"
},

{
    "location": "data/dataset/Witt_1998/#",
    "page": "Witt 1998",
    "title": "Witt 1998",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/Witt_1998/#General-informations-1",
    "page": "Witt 1998",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Witt 1998 [3]Sampling date: 1998-01-01Added on: 2018-03-27 (last update on 2018-03-27)Number of networks: 1"
},

{
    "location": "data/dataset/Witt_1998/#Description-1",
    "page": "Witt 1998",
    "title": "Description",
    "category": "section",
    "text": "Unknown"
},

{
    "location": "data/dataset/Witt_1998/#Programmatic-access-1",
    "page": "Witt 1998",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nWitt_1998 = dataset(\"Witt_1998\") # or dataset(3)"
},

{
    "location": "data/dataset/Witt_1998/#Networks-1",
    "page": "Witt 1998",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n3 Witt_1998 Unknown ✓ 54"
},

{
    "location": "data/dataset/arroyo_1982/#",
    "page": "Arroyo 1982",
    "title": "Arroyo 1982",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/arroyo_1982/#General-informations-1",
    "page": "Arroyo 1982",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Arroyo 1982 [9]Sampling date: 1981-03-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 3"
},

{
    "location": "data/dataset/arroyo_1982/#Description-1",
    "page": "Arroyo 1982",
    "title": "Description",
    "category": "section",
    "text": "Plant-pollinator interaction at three altudinal levels (subandean scrub, cushion-plant, subnival feldfield) in the Andrean zone on the Cordon del Cepo in central Chile"
},

{
    "location": "data/dataset/arroyo_1982/#Programmatic-access-1",
    "page": "Arroyo 1982",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\narroyo_1982 = dataset(\"arroyo_1982\") # or dataset(9)"
},

{
    "location": "data/dataset/arroyo_1982/#Networks-1",
    "page": "Arroyo 1982",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n16 arroyo_1982_subandean Plant-polinator interaction in subandean scrub in the Andrean zone on the Cordon del Cepo in central Chile ✓ 185\n17 arroyo_1982_cushion-plant Plant-polinator interaction of cushion-plant in the Andrean zone on the Cordon del Cepo in central Chile ✓ 105\n18 arroyo_1982_subnival_feldfiel Plant-polinator interaction in subnival feldfield in the Andrean zone on the Cordon del Cepo in central Chile ✓ 68"
},

{
    "location": "data/dataset/barret_helenurm_1987/#",
    "page": "Barret Helenurm 1987",
    "title": "Barret Helenurm 1987",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/barret_helenurm_1987/#General-informations-1",
    "page": "Barret Helenurm 1987",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Barret Helenurm 1987 [16]Sampling date: 1979-01-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/barret_helenurm_1987/#Description-1",
    "page": "Barret Helenurm 1987",
    "title": "Description",
    "category": "section",
    "text": "Understory perennial plants interaction with pollinator, 5 km east of Doaktown, Northumberland County, central New Brunswick, Canada"
},

{
    "location": "data/dataset/barret_helenurm_1987/#Programmatic-access-1",
    "page": "Barret Helenurm 1987",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nbarret_helenurm_1987 = dataset(\"barret_helenurm_1987\") # or dataset(16)"
},

{
    "location": "data/dataset/barret_helenurm_1987/#Networks-1",
    "page": "Barret Helenurm 1987",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n15 barret_helenurm_1987 Understory perennial plants interaction with pollinator, 5 km east of Doaktown, Northumberland County, central New Brunswick, Canada ✓ 114"
},

{
    "location": "data/dataset/bezerra_2009/#",
    "page": "Bezerra 2009",
    "title": "Bezerra 2009",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/bezerra_2009/#General-informations-1",
    "page": "Bezerra 2009",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Bezerra 2009 [11]Sampling date: 2006-12-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/bezerra_2009/#Description-1",
    "page": "Bezerra 2009",
    "title": "Description",
    "category": "section",
    "text": "oil-flowers (Malpighiaceae) and their bee visitors from a Brazilian steppe, Parque Nacional do Catimbau, in the municipality of Buique (PE), northeastern Brazil"
},

{
    "location": "data/dataset/bezerra_2009/#Programmatic-access-1",
    "page": "Bezerra 2009",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nbezerra_2009 = dataset(\"bezerra_2009\") # or dataset(11)"
},

{
    "location": "data/dataset/bezerra_2009/#Networks-1",
    "page": "Bezerra 2009",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n10 bezerra_2009 oil-flowers (Malpighiaceae) and their bee visitors from a Brazilian steppe, Parque Nacional do Catimbau, in the municipality of Buique (PE), northeastern Brazil ✓ 26"
},

{
    "location": "data/dataset/elberling_olesen_1999/#",
    "page": "Elberling Olesen 1999",
    "title": "Elberling Olesen 1999",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/elberling_olesen_1999/#General-informations-1",
    "page": "Elberling Olesen 1999",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Elberling Olesen 1999 [8]Sampling date: 1994-08-23Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/elberling_olesen_1999/#Description-1",
    "page": "Elberling Olesen 1999",
    "title": "Description",
    "category": "section",
    "text": "Flower-visiting insect at Mt. Latnjatjarro, northern Sweden"
},

{
    "location": "data/dataset/elberling_olesen_1999/#Programmatic-access-1",
    "page": "Elberling Olesen 1999",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nelberling_olesen_1999 = dataset(\"elberling_olesen_1999\") # or dataset(8)"
},

{
    "location": "data/dataset/elberling_olesen_1999/#Networks-1",
    "page": "Elberling Olesen 1999",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n8 elberling_olesen_1999 Flower-visiting insect at Mt. Latnjatjarro, northern Sweden ✓ 142"
},

{
    "location": "data/dataset/fautin_1993/#",
    "page": "Fautin 1993",
    "title": "Fautin 1993",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/fautin_1993/#General-informations-1",
    "page": "Fautin 1993",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Fautin 1993 [19]Sampling date: 1993-01-01Added on: 2018-04-23 (last update on 2018-04-23)Number of networks: 1"
},

{
    "location": "data/dataset/fautin_1993/#Description-1",
    "page": "Fautin 1993",
    "title": "Description",
    "category": "section",
    "text": "Anemonfishes-anemons intractions in the tropical Indo-Pacific ocean"
},

{
    "location": "data/dataset/fautin_1993/#Programmatic-access-1",
    "page": "Fautin 1993",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nfautin_1993 = dataset(\"fautin_1993\") # or dataset(19)"
},

{
    "location": "data/dataset/fautin_1993/#Networks-1",
    "page": "Fautin 1993",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n806 fautin_1993 Anemonfishes-anemons intractions in the tropical Indo-Pacific ocean ✓ 36"
},

{
    "location": "data/dataset/frost_1980/#",
    "page": "Frost 1980",
    "title": "Frost 1980",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/frost_1980/#General-informations-1",
    "page": "Frost 1980",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Frost 1980 [12]Sampling date: 1980-01-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/frost_1980/#Description-1",
    "page": "Frost 1980",
    "title": "Description",
    "category": "section",
    "text": "Fruit-frugivore interactions in a South African costal dune forest"
},

{
    "location": "data/dataset/frost_1980/#Programmatic-access-1",
    "page": "Frost 1980",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nfrost_1980 = dataset(\"frost_1980\") # or dataset(12)"
},

{
    "location": "data/dataset/frost_1980/#Networks-1",
    "page": "Frost 1980",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n11 frost_1980 Fruit-frugivore interactions in a South African costal dune forest ✓ 26"
},

{
    "location": "data/dataset/hadfield_2014/#",
    "page": "Hadfield 2014",
    "title": "Hadfield 2014",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/hadfield_2014/#General-informations-1",
    "page": "Hadfield 2014",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Hadfield 2014 [24]Sampling date: 2014-02-01Added on: 2018-04-25 (last update on 2018-04-25)Number of networks: 51"
},

{
    "location": "data/dataset/hadfield_2014/#Description-1",
    "page": "Hadfield 2014",
    "title": "Description",
    "category": "section",
    "text": "Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) in 51 different regions of the Palearctic"
},

{
    "location": "data/dataset/hadfield_2014/#Programmatic-access-1",
    "page": "Hadfield 2014",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nhadfield_2014 = dataset(\"hadfield_2014\") # or dataset(24)"
},

{
    "location": "data/dataset/hadfield_2014/#Networks-1",
    "page": "Hadfield 2014",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n811 hadfield_2014 adzharia Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Adzharia ✓ 28\n812 hadfield_2014 akmolinsk Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Akmolinsk ✓ 42\n813 hadfield_2014 altai Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Altai ✓ 32\n814 hadfield_2014 amur Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Amur ✓ 27\n815 hadfield_2014 amur-bureya Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Amur-Bureya ✓ 20\n816 hadfield_2014 armenia Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Armenia ✓ 53\n817 hadfield_2014 central yakutia Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Central Yakutia ✓ 25\n818 hadfield_2014 chimkent Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Chimkent ✓ 32\n819 hadfield_2014 dzhungarsky alatau Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Dzhungarsky Alatau ✓ 36\n820 hadfield_2014 east balkhash Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at East Balkhash ✓ 49\n821 hadfield_2014 east pamir Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at East Pamir ✓ 23\n822 hadfield_2014 gissar Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Gissar ✓ 30\n823 hadfield_2014 guriev Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Guriev ✓ 33\n824 hadfield_2014 kabarda Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Kabarda ✓ 30\n825 hadfield_2014 kamchatka Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Kamchatka ✓ 10\n826 hadfield_2014 khabarovsk Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Khabarovsk ✓ 27\n827 hadfield_2014 khasan Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Khasan ✓ 14\n828 hadfield_2014 kostroma Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Kostroma ✓ 36\n829 hadfield_2014 krasnojarsk Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Krasnojarsk ✓ 27\n830 hadfield_2014 kurgan Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Kurgan ✓ 33\n831 hadfield_2014 kursk Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Kursk ✓ 24\n832 hadfield_2014 kustanai Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Kustanai ✓ 34\n833 hadfield_2014 middle ural Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Middle Ural ✓ 17\n834 hadfield_2014 mongolia-central khangay Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Mongolia-Central Khangay ✓ 27\n835 hadfield_2014 mongolia-northwestern khangay Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Mongolia-NorthWestern Khangay ✓ 58\n836 hadfield_2014 moscow Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Moscow ✓ 33\n837 hadfield_2014 moyyunkum Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Moyyunkum ✓ 47\n838 hadfield_2014 nakhichevan Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Nakhichevan ✓ 19\n839 hadfield_2014 north kyrgyzstan Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at North Kyrgyzstan ✓ 49\n840 hadfield_2014 north russian far east Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at North Russian Far East ✓ 29\n841 hadfield_2014 novosibirsk Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Novosibirsk ✓ 56\n842 hadfield_2014 pavlodar Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Pavlodar ✓ 27\n843 hadfield_2014 poland Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Poland ✓ 47\n844 hadfield_2014 pre-polar ural Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Pre-Polar Ural ✓ 17\n845 hadfield_2014 scotland Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Scotland ✓ 13\n846 hadfield_2014 selenga Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Selenga ✓ 21\n847 hadfield_2014 slovakia Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Slovakia ✓ 38\n848 hadfield_2014 southwestern azerbajan Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Southwestern Azerbajan ✓ 30\n849 hadfield_2014 sweden Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Sweden ✓ 17\n850 hadfield_2014 syugaty Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Syugaty ✓ 26\n851 hadfield_2014 taimyr Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Taimyr ✓ 21\n852 hadfield_2014 tarbagatai Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Tarbagatai ✓ 53\n853 hadfield_2014 terskey-alatau Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Terskey-Alatau ✓ 38\n854 hadfield_2014 tomsk-tumen Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Tomsk-Tumen ✓ 53\n855 hadfield_2014 trans-ili alatau Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Trans-Ili Alatau ✓ 23\n856 hadfield_2014 turkmenistan Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Turkmenistan ✓ 56\n857 hadfield_2014 tyva Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Tyva ✓ 37\n858 hadfield_2014 ural valley Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Ural Valley ✓ 26\n859 hadfield_2014 ussury Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Ussury ✓ 24\n860 hadfield_2014 volga-kama Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Volga-Kama ✓ 62\n861 hadfield_2014 western sayan Flea distribution and abundance on small mammals (Soricomorpha and Rodentia) at Western Sayan ✓ 39"
},

{
    "location": "data/dataset/kaehler_et_al_2005/#",
    "page": "Kaehler Et Al 2005",
    "title": "Kaehler Et Al 2005",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/kaehler_et_al_2005/#General-informations-1",
    "page": "Kaehler Et Al 2005",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Kaehler Et Al 2005 [7]Sampling date: 2002-04-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/kaehler_et_al_2005/#Description-1",
    "page": "Kaehler Et Al 2005",
    "title": "Description",
    "category": "section",
    "text": "Pollination of a bromeliad community in the high montane Atlantic rain forest in Paran? state, Brazil"
},

{
    "location": "data/dataset/kaehler_et_al_2005/#Programmatic-access-1",
    "page": "Kaehler Et Al 2005",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nkaehler_et_al_2005 = dataset(\"kaehler_et_al_2005\") # or dataset(7)"
},

{
    "location": "data/dataset/kaehler_et_al_2005/#Networks-1",
    "page": "Kaehler Et Al 2005",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n7 kaehler_et_al_2005 Pollination of a bromeliad community in the high montane Atlantic rain forest in Paran? state, Brazil ✓ 19"
},

{
    "location": "data/dataset/kato_1993/#",
    "page": "Kato 1993",
    "title": "Kato 1993",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/kato_1993/#General-informations-1",
    "page": "Kato 1993",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Kato 1993 [21]Sampling date: 1991-09-01Added on: 2018-04-23 (last update on 2018-04-23)Number of networks: 1"
},

{
    "location": "data/dataset/kato_1993/#Description-1",
    "page": "Kato 1993",
    "title": "Description",
    "category": "section",
    "text": "Flower and anthophilous insect interactions in the primary cool-temperate subalpine forests and meadows at Mt. Kushigata, Yamanashi Prefecture, Japan"
},

{
    "location": "data/dataset/kato_1993/#Programmatic-access-1",
    "page": "Kato 1993",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nkato_1993 = dataset(\"kato_1993\") # or dataset(21)"
},

{
    "location": "data/dataset/kato_1993/#Networks-1",
    "page": "Kato 1993",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n808 kato_1993 Flower and anthophilous insect interactions in the primary cool-temperate subalpine forests and meadows at Mt. Kushigata, Yamanashi Prefecture, Japan ✓ 456"
},

{
    "location": "data/dataset/kohler_2011/#",
    "page": "Kohler 2011",
    "title": "Kohler 2011",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/kohler_2011/#General-informations-1",
    "page": "Kohler 2011",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Kohler 2011 [17]Sampling date: 2011-01-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 3"
},

{
    "location": "data/dataset/kohler_2011/#Description-1",
    "page": "Kohler 2011",
    "title": "Description",
    "category": "section",
    "text": "Hummingbirds-flowers interactions in an altitudinal gradient in the Brazilian Atlantic Rainforest"
},

{
    "location": "data/dataset/kohler_2011/#Programmatic-access-1",
    "page": "Kohler 2011",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nkohler_2011 = dataset(\"kohler_2011\") # or dataset(17)"
},

{
    "location": "data/dataset/kohler_2011/#Networks-1",
    "page": "Kohler 2011",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n19 kohler_2011_350_600_m Hummingbirds-flowers interactions in an altitudinal gradient in the Brazilian Atlantic Rainforest, 350 to 600 m ✓ 24\n20 kohler_2011_600_850_m Hummingbirds-flowers interactions in an altitudinal gradient in the Brazilian Atlantic Rainforest, 600 to 850 m ✓ 14\n21 kohler_2011_850_1100_m Hummingbirds-flowers interactions in an altitudinal gradient in the Brazilian Atlantic Rainforest, 850 to 1100 m ✓ 11"
},

{
    "location": "data/dataset/mccullen_1993/#",
    "page": "Mccullen 1993",
    "title": "Mccullen 1993",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/mccullen_1993/#General-informations-1",
    "page": "Mccullen 1993",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Mccullen 1993 [20]Sampling date: 1993-01-01Added on: 2018-04-23 (last update on 2018-04-23)Number of networks: 1"
},

{
    "location": "data/dataset/mccullen_1993/#Description-1",
    "page": "Mccullen 1993",
    "title": "Description",
    "category": "section",
    "text": "compilation of records on plant-flower visitor interactions in the Galápagos archipelago found in the literature. Pinta Island"
},

{
    "location": "data/dataset/mccullen_1993/#Programmatic-access-1",
    "page": "Mccullen 1993",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nmccullen_1993 = dataset(\"mccullen_1993\") # or dataset(20)"
},

{
    "location": "data/dataset/mccullen_1993/#Networks-1",
    "page": "Mccullen 1993",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n807 mccullen_1993 compilation of records on plant-flower visitor interactions in the Galápagos archipelago found in the literature. Pinta Island  156"
},

{
    "location": "data/dataset/motten_1982/#",
    "page": "Motten 1982",
    "title": "Motten 1982",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/motten_1982/#General-informations-1",
    "page": "Motten 1982",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Motten 1982 [23]Sampling date: 1982-01-01Added on: 2018-04-24 (last update on 2018-04-24)Number of networks: 1"
},

{
    "location": "data/dataset/motten_1982/#Description-1",
    "page": "Motten 1982",
    "title": "Description",
    "category": "section",
    "text": "spring wildflower community of mesic deciduous forests in piedmont North Carolina"
},

{
    "location": "data/dataset/motten_1982/#Programmatic-access-1",
    "page": "Motten 1982",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nmotten_1982 = dataset(\"motten_1982\") # or dataset(23)"
},

{
    "location": "data/dataset/motten_1982/#Networks-1",
    "page": "Motten 1982",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n810 motten_1982 spring wildflower community of mesic deciduous forests in piedmont North Carolina ✓ 54"
},

{
    "location": "data/dataset/olesen/#",
    "page": "Olesen",
    "title": "Olesen",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/olesen/#General-informations-1",
    "page": "Olesen",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Olesen [26]Sampling date: 1111-11-11Added on: 2018-04-25 (last update on 2018-04-25)Number of networks: 1"
},

{
    "location": "data/dataset/olesen/#Description-1",
    "page": "Olesen",
    "title": "Description",
    "category": "section",
    "text": "Plant-pollinator interaction at Garajonay, Gomera, Spain (Canary Islands)"
},

{
    "location": "data/dataset/olesen/#Programmatic-access-1",
    "page": "Olesen",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nolesen = dataset(\"olesen\") # or dataset(26)"
},

{
    "location": "data/dataset/olesen/#Networks-1",
    "page": "Olesen",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n878 olesen Plant-pollinator interaction at Garajonay, Gomera, Spain (Canary Islands) ✓ 84"
},

{
    "location": "data/dataset/percival_1974/#",
    "page": "Percival 1974",
    "title": "Percival 1974",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/percival_1974/#General-informations-1",
    "page": "Percival 1974",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Percival 1974 [14]Sampling date: 1974-01-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/percival_1974/#Description-1",
    "page": "Percival 1974",
    "title": "Description",
    "category": "section",
    "text": "Plant-pollinator interaction at Morant Point, Jamaica"
},

{
    "location": "data/dataset/percival_1974/#Programmatic-access-1",
    "page": "Percival 1974",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\npercival_1974 = dataset(\"percival_1974\") # or dataset(14)"
},

{
    "location": "data/dataset/percival_1974/#Networks-1",
    "page": "Percival 1974",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n13 percival_1974 Plant-pollinator interaction at Morant Point, Jamaica ✓ 97"
},

{
    "location": "data/dataset/ponisio_2017/#",
    "page": "Ponisio 2017",
    "title": "Ponisio 2017",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/ponisio_2017/#General-informations-1",
    "page": "Ponisio 2017",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Ponisio 2017 [27]Sampling date: 2017-01-01Added on: 2018-04-27 (last update on 2018-04-27)Number of networks: 141"
},

{
    "location": "data/dataset/ponisio_2017/#Description-1",
    "page": "Ponisio 2017",
    "title": "Description",
    "category": "section",
    "text": "assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California"
},

{
    "location": "data/dataset/ponisio_2017/#Programmatic-access-1",
    "page": "Ponisio 2017",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nponisio_2017 = dataset(\"ponisio_2017\") # or dataset(27)"
},

{
    "location": "data/dataset/ponisio_2017/#Networks-1",
    "page": "Ponisio 2017",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n1296 ponisio_2017_ uss.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2008 ✓ 25\n1297 ponisio_2017_ uss.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2009 ✓ 20\n1298 ponisio_2017_ uss.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2011 ✓ 24\n1161 ponisio_2017_ barger.2006 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2006 ✓ 21\n1162 ponisio_2017_ barger.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2007 ✓ 30\n1163 ponisio_2017_ barger.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2008 ✓ 31\n1164 ponisio_2017_ barger.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2009 ✓ 23\n1165 ponisio_2017_ barger.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2011 ✓ 16\n1166 ponisio_2017_ barger.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2012 ✓ 32\n1167 ponisio_2017_ barger.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2013 ✓ 55\n1168 ponisio_2017_ barger.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barger.2014 ✓ 34\n1169 ponisio_2017_ barn.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barn.2009 ✓ 10\n1170 ponisio_2017_ barn.2010 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barn.2010 ✓ 21\n1171 ponisio_2017_ barn.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barn.2012 ✓ 5\n1172 ponisio_2017_ barn.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barn.2013 ✓ 19\n1173 ponisio_2017_ barn.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Barn.2014 ✓ 11\n1174 ponisio_2017_ bc2.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  BC2.2007 ✓ 29\n1175 ponisio_2017_ bc2.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  BC2.2008 ✓ 24\n1176 ponisio_2017_ bc2.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  BC2.2009 ✓ 22\n1177 ponisio_2017_ bc2.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  BC2.2011 ✓ 22\n1178 ponisio_2017_ bc2.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  BC2.2012 ✓ 22\n1179 ponisio_2017_ bc2.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  BC2.2013 ✓ 32\n1180 ponisio_2017_ bc2.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  BC2.2014 ✓ 16\n1181 ponisio_2017_ butler.2006 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2006 ✓ 12\n1182 ponisio_2017_ butler.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2007 ✓ 23\n1183 ponisio_2017_ butler.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2008 ✓ 22\n1184 ponisio_2017_ butler.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2009 ✓ 25\n1185 ponisio_2017_ butler.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2011 ✓ 29\n1186 ponisio_2017_ butler.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2012 ✓ 25\n1187 ponisio_2017_ butler.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2013 ✓ 32\n1188 ponisio_2017_ butler.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Butler.2014 ✓ 26\n1189 ponisio_2017_ chamberlain.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Chamberlain.2007 ✓ 13\n1190 ponisio_2017_ chamberlain.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Chamberlain.2008 ✓ 14\n1191 ponisio_2017_ chamberlain.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Chamberlain.2009 ✓ 10\n1192 ponisio_2017_ chamberlain.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Chamberlain.2011 ✓ 16\n1193 ponisio_2017_ chamberlain.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Chamberlain.2012 ✓ 22\n1194 ponisio_2017_ chamberlain.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Chamberlain.2013 ✓ 8\n1195 ponisio_2017_ chamberlain.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Chamberlain.2014 ✓ 6\n1196 ponisio_2017_ dqu.2006 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2006 ✓ 23\n1197 ponisio_2017_ dqu.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2007 ✓ 25\n1198 ponisio_2017_ dqu.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2008 ✓ 20\n1199 ponisio_2017_ dqu.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2009 ✓ 11\n1200 ponisio_2017_ dqu.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2011 ✓ 20\n1201 ponisio_2017_ dqu.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2012 ✓ 18\n1202 ponisio_2017_ dqu.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2013 ✓ 22\n1203 ponisio_2017_ dqu.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  DQU.2014 ✓ 20\n1204 ponisio_2017_ fong.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Fong.2008 ✓ 15\n1205 ponisio_2017_ fong.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Fong.2009 ✓ 20\n1206 ponisio_2017_ fong.2010 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Fong.2010 ✓ 31\n1207 ponisio_2017_ fong.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Fong.2011 ✓ 24\n1208 ponisio_2017_ fong.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Fong.2012 ✓ 45\n1209 ponisio_2017_ fong.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Fong.2013 ✓ 52\n1210 ponisio_2017_ fong.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Fong.2014 ✓ 26\n1211 ponisio_2017_ gregory.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Gregory.2007 ✓ 40\n1212 ponisio_2017_ gregory.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Gregory.2008 ✓ 22\n1213 ponisio_2017_ gregory.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Gregory.2009 ✓ 20\n1214 ponisio_2017_ gregory.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Gregory.2011 ✓ 19\n1215 ponisio_2017_ gregory.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Gregory.2012 ✓ 22\n1216 ponisio_2017_ gregory.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Gregory.2013 ✓ 42\n1217 ponisio_2017_ gregory.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Gregory.2014 ✓ 18\n1218 ponisio_2017_ h16.2006 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  H16.2006 ✓ 18\n1219 ponisio_2017_ h16.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  H16.2007 ✓ 14\n1220 ponisio_2017_ h16.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  H16.2008 ✓ 18\n1221 ponisio_2017_ h16.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  H16.2009 ✓ 13\n1222 ponisio_2017_ h16.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  H16.2011 ✓ 16\n1223 ponisio_2017_ h16.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  H16.2013 ✓ 26\n1224 ponisio_2017_ h16.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  H16.2014 ✓ 19\n1225 ponisio_2017_ harlan.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Harlan.2009 ✓ 21\n1226 ponisio_2017_ harlan.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Harlan.2011 ✓ 17\n1227 ponisio_2017_ harlan.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Harlan.2012 ✓ 38\n1228 ponisio_2017_ harlan.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Harlan.2013 ✓ 31\n1229 ponisio_2017_ harlan.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Harlan.2014 ✓ 22\n1230 ponisio_2017_ hrdy.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Hrdy.2007 ✓ 16\n1231 ponisio_2017_ hrdy.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Hrdy.2008 ✓ 16\n1232 ponisio_2017_ hrdy.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Hrdy.2009 ✓ 22\n1233 ponisio_2017_ hrdy.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Hrdy.2011 ✓ 24\n1234 ponisio_2017_ hrdy.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Hrdy.2012 ✓ 37\n1235 ponisio_2017_ hrdy.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Hrdy.2013 ✓ 35\n1236 ponisio_2017_ hrdy.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Hrdy.2014 ✓ 22\n1237 ponisio_2017_ joe.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Joe.2009 ✓ 14\n1238 ponisio_2017_ joe.2010 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Joe.2010 ✓ 19\n1239 ponisio_2017_ joe.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Joe.2012 ✓ 14\n1240 ponisio_2017_ joe.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Joe.2013 ✓ 29\n1241 ponisio_2017_ joe.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Joe.2014 ✓ 9\n1242 ponisio_2017_ mc1.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MC1.2007 ✓ 21\n1243 ponisio_2017_ mc1.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MC1.2008 ✓ 14\n1244 ponisio_2017_ mc1.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MC1.2009 ✓ 11\n1245 ponisio_2017_ mc1.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MC1.2011 ✓ 13\n1246 ponisio_2017_ mc1.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MC1.2012 ✓ 13\n1247 ponisio_2017_ mc1.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MC1.2013 ✓ 8\n1248 ponisio_2017_ mullerb.2006 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2006 ✓ 12\n1249 ponisio_2017_ mullerb.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2007 ✓ 43\n1250 ponisio_2017_ mullerb.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2008 ✓ 37\n1251 ponisio_2017_ mullerb.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2009 ✓ 27\n1252 ponisio_2017_ mullerb.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2011 ✓ 49\n1253 ponisio_2017_ mullerb.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2012 ✓ 33\n1254 ponisio_2017_ mullerb.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2013 ✓ 58\n1255 ponisio_2017_ mullerb.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerB.2014 ✓ 44\n1256 ponisio_2017_ mullerm.2010 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerM.2010 ✓ 33\n1257 ponisio_2017_ mullerm.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerM.2011 ✓ 25\n1258 ponisio_2017_ mullerm.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerM.2012 ✓ 47\n1259 ponisio_2017_ mullerm.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerM.2013 ✓ 39\n1260 ponisio_2017_ mullerm.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  MullerM.2014 ✓ 16\n1261 ponisio_2017_ rominger.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Rominger.2009 ✓ 23\n1262 ponisio_2017_ rominger.2010 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Rominger.2010 ✓ 32\n1263 ponisio_2017_ rominger.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Rominger.2011 ✓ 18\n1264 ponisio_2017_ rominger.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Rominger.2012 ✓ 17\n1265 ponisio_2017_ rominger.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Rominger.2013 ✓ 30\n1266 ponisio_2017_ rominger.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Rominger.2014 ✓ 22\n1267 ponisio_2017_ sperandio.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Sperandio.2007 ✓ 19\n1268 ponisio_2017_ sperandio.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Sperandio.2008 ✓ 21\n1269 ponisio_2017_ sperandio.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Sperandio.2009 ✓ 23\n1270 ponisio_2017_ sperandio.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Sperandio.2011 ✓ 21\n1271 ponisio_2017_ sperandio.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Sperandio.2012 ✓ 31\n1272 ponisio_2017_ sperandio.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Sperandio.2013 ✓ 29\n1273 ponisio_2017_ sperandio.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Sperandio.2014 ✓ 11\n1274 ponisio_2017_ spiva.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Spiva.2007 ✓ 21\n1275 ponisio_2017_ spiva.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Spiva.2008 ✓ 22\n1276 ponisio_2017_ spiva.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Spiva.2009 ✓ 14\n1277 ponisio_2017_ spiva.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Spiva.2011 ✓ 25\n1278 ponisio_2017_ spiva.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Spiva.2012 ✓ 10\n1279 ponisio_2017_ spiva.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Spiva.2013 ✓ 16\n1280 ponisio_2017_ spiva.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Spiva.2014 ✓ 14\n1281 ponisio_2017_ tractor.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Tractor.2009 ✓ 16\n1282 ponisio_2017_ tractor.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Tractor.2011 ✓ 17\n1283 ponisio_2017_ tractor.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Tractor.2012 ✓ 32\n1284 ponisio_2017_ tractor.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Tractor.2013 ✓ 25\n1285 ponisio_2017_ tractor.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Tractor.2014 ✓ 18\n1286 ponisio_2017_ turkovich.2006 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2006 ✓ 30\n1287 ponisio_2017_ turkovich.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2007 ✓ 23\n1288 ponisio_2017_ turkovich.2008 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2008 ✓ 24\n1289 ponisio_2017_ turkovich.2009 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2009 ✓ 20\n1290 ponisio_2017_ turkovich.2011 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2011 ✓ 21\n1291 ponisio_2017_ turkovich.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2012 ✓ 27\n1292 ponisio_2017_ turkovich.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2013 ✓ 32\n1293 ponisio_2017_ turkovich.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  Turkovich.2014 ✓ 18\n1294 ponisio_2017_ uss.2006 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2006 ✓ 29\n1295 ponisio_2017_ uss.2007 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2007 ✓ 27\n1299 ponisio_2017_ uss.2012 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2012 ✓ 17\n1300 ponisio_2017_ uss.2013 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2013 ✓ 29\n1301 ponisio_2017_ uss.2014 assembly of plant-pollinator communities at native plant restoration sites in an agricultural landscape, California,  USS.2014 ✓ 12"
},

{
    "location": "data/dataset/ricciardi_2010/#",
    "page": "Ricciardi 2010",
    "title": "Ricciardi 2010",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/ricciardi_2010/#General-informations-1",
    "page": "Ricciardi 2010",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Ricciardi 2010 [25]Sampling date: 2006-07-01Added on: 2018-04-25 (last update on 2018-04-25)Number of networks: 16"
},

{
    "location": "data/dataset/ricciardi_2010/#Description-1",
    "page": "Ricciardi 2010",
    "title": "Description",
    "category": "section",
    "text": "structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia"
},

{
    "location": "data/dataset/ricciardi_2010/#Programmatic-access-1",
    "page": "Ricciardi 2010",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nricciardi_2010 = dataset(\"ricciardi_2010\") # or dataset(25)"
},

{
    "location": "data/dataset/ricciardi_2010/#Networks-1",
    "page": "Ricciardi 2010",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n862 hadfield_2014 bahowo structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Bahowo ✓ 11\n863 hadfield_2014 bajo structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Bajo ✓ 6\n864 hadfield_2014 batu kapal structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Batu Kapal ✓ 5\n865 hadfield_2014 bualo structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Bualo ✓ 9\n866 hadfield_2014 fukui structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Fukui ✓ 7\n867 hadfield_2014 jalan m. structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Jalan m. ✓ 8\n868 hadfield_2014 johnson structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Johnson ✓ 5\n869 hadfield_2014 kasegaran structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Kasegaran ✓ 8\n870 hadfield_2014 likuan 1 structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Likuan 1 ✓ 8\n871 hadfield_2014 mandolin structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Mandolin ✓ 6\n872 hadfield_2014 mapia structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Mapia ✓ 8\n873 hadfield_2014 mike structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Mike ✓ 8\n874 hadfield_2014 sachiko structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Sachiko ✓ 8\n875 hadfield_2014 t. kopi structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  T. Kopi ✓ 10\n876 hadfield_2014 t. pisok structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  T. Pisok ✓ 9\n877 hadfield_2014 timur structure of local anemonefish-anemone networks across the Manado region of Sulawesi, Indonesia,  Timur ✓ 7"
},

{
    "location": "data/dataset/varassin_sazima_2012/#",
    "page": "Varassin Sazima 2012",
    "title": "Varassin Sazima 2012",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/varassin_sazima_2012/#General-informations-1",
    "page": "Varassin Sazima 2012",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Varassin Sazima 2012 [10]Sampling date: 2001-06-01Added on: 2018-03-28 (last update on 2018-03-28)Number of networks: 1"
},

{
    "location": "data/dataset/varassin_sazima_2012/#Description-1",
    "page": "Varassin Sazima 2012",
    "title": "Description",
    "category": "section",
    "text": "Bromeliad-pollinator interaction in the Estacao Biologica de Santa Lucia in southeastern Brazil"
},

{
    "location": "data/dataset/varassin_sazima_2012/#Programmatic-access-1",
    "page": "Varassin Sazima 2012",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nvarassin_sazima_2012 = dataset(\"varassin_sazima_2012\") # or dataset(10)"
},

{
    "location": "data/dataset/varassin_sazima_2012/#Networks-1",
    "page": "Varassin Sazima 2012",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n9 varassin_sazima_2012 Bromeliad-pollinator interaction in the Estacao Biologica de Santa Lucia in southeastern Brazil ✓ 45"
},

{
    "location": "data/dataset/wheelwringht_1984/#",
    "page": "Wheelwringht 1984",
    "title": "Wheelwringht 1984",
    "category": "page",
    "text": ""
},

{
    "location": "data/dataset/wheelwringht_1984/#General-informations-1",
    "page": "Wheelwringht 1984",
    "title": "General informations",
    "category": "section",
    "text": "Dataset: Wheelwringht 1984 [22]Sampling date: 1978-01-01Added on: 2018-04-24 (last update on 2018-04-24)Number of networks: 1"
},

{
    "location": "data/dataset/wheelwringht_1984/#Description-1",
    "page": "Wheelwringht 1984",
    "title": "Description",
    "category": "section",
    "text": "Bird-fruit interaction in the lower montane forests of Monteverde, Costa Rica"
},

{
    "location": "data/dataset/wheelwringht_1984/#Programmatic-access-1",
    "page": "Wheelwringht 1984",
    "title": "Programmatic access",
    "category": "section",
    "text": "using Mangal\nwheelwringht_1984 = dataset(\"wheelwringht_1984\") # or dataset(22)"
},

{
    "location": "data/dataset/wheelwringht_1984/#Networks-1",
    "page": "Wheelwringht 1984",
    "title": "Networks",
    "category": "section",
    "text": "id name description public nodes\n809 wheelwringht_1984 Bird-fruit interaction in the lower montane forests of Monteverde, Costa Rica ✓ 209"
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
    "text": "A MangalDataset identifies a collection of networks, possibly containing a single element. A dataset is identified by its id or name (both of which are unique).\n\nid (Int64): a unique identifier for the dataset.\n\nname (AbstractString): a unique name describing the dataset.\n\npublic (Bool): indicates whether the dataset details are available to others than its owner.\n\ndate (DateTime): date and time at which the dataset was assembled. This can refer to the sampling time of networks, or to the date at which the dataset was finalized.\n\ncreated (DateTime): date and time at which the dataset was created in the database.\n\nupdated (DateTime): date and time at which the dataset was last modified in the database. For most datasets, this will be equal to created.\n\nreference (Union{Int64,Nothing}) (optional): a reference to the id of the MangalReference, or nothing if there is no associated reference for this dataset.\n\nuser (Int64): id of the user who added the dataset to the database. This is not necessarily the author of the dataset, see reference (and the same field in the MangalNetwork) to get the actual authorship.\n\ndescription (AbstractString): a free-form description of the dataset.\n\n\n\n\n\n"
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
    "location": "pkg/types/#Mangal.MangalNode",
    "page": "Data types",
    "title": "Mangal.MangalNode",
    "category": "type",
    "text": "Node in a network\n\nThe taxon field is a MangalReferenceTaxon object, so that one can, for example, query the TSN identifier of a node through object.taxon.tsn.\n\nThis approach has been chosen because (i) names of nodes in networks can be non unique and (ii) nodes within the same networks can refer to various taxonomic levels. As an example, if a network has four distinct nodes identified as Ascariasis sp., they will represent four nodes in the networks, but map onto the same MangalReferenceTaxon (representing the entire Ascariasis genus). This approach provides a seemless representation of the same taxon across different networks, but also of the same taxon within networks.\n\n\n\n\n\n"
},

{
    "location": "pkg/types/#Mangal.MangalReferenceTaxon",
    "page": "Data types",
    "title": "Mangal.MangalReferenceTaxon",
    "category": "type",
    "text": "Reference taxon (unique identifier of network nodes)\n\n\n\n\n\n"
},

{
    "location": "pkg/types/#Taxonomy-types-1",
    "page": "Data types",
    "title": "Taxonomy types",
    "category": "section",
    "text": "MangalNode\nMangalReferenceTaxon"
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
    "text": "This page presents the basic functions to access all of the data stored in mangal. They are meant to be used for (i) advanced analyses where the user knows what they are looking for and (ii) development of functions for specific analyses. In most cases, the functions that return objects for the EcologicalNetworks package are recommended.note: Naming conventions\nFunctions whose name is plural (e.g networks) will return a Vector of their type. Functions whose name is singular (e.g. network) return a single object. All functions returning a Vector can also take a query argument (see notes below about formatting queries).In addition to the search by name (when available) and ID (for all objects), most of the functions have methods to work on other types of objects. For example, networks has a function taking a MangalDataset as an object, which will retrieve the networks belonging to this dataset.danger: Paging matters!\nThe server returns (by default) 50 objects for a given query, and this number can be increased up to 200. This may not be sufficient to retrieve the entire information, for example in networks with more than 200 nodes. Not paying attention to paging when using these functions directly (as opposed to within the EcologicalNetworks wrappers) means that you are at risk of not working with the entire dataset."
},

{
    "location": "pkg/methods/#A-note-on-queries-1",
    "page": "Methods for data retrieval",
    "title": "A note on queries",
    "category": "section",
    "text": "All queries are passed as vectors of pairs. For example, filtering interactions that are of the mutualist type can be done with [Pair(\"type\", \"mutualism\")].epilogue\ntable"
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
    "location": "pkg/methods/#Mangal.networks",
    "page": "Methods for data retrieval",
    "title": "Mangal.networks",
    "category": "function",
    "text": "networks()\n\nReturns the latest MangalNetwork objects.\n\n\n\n\n\nnetworks(q::Vector{Pair{String,T}}) where {T <: Any}\n\nReturns the latest MangalNetwork objects matching a given query.\n\n\n\n\n\nnetworks(dataset::MangalDataset)\n\nReturns networks that are part of a MangalDataset.\n\n\n\n\n\nnetworks(dataset::MangalDataset, query::Vector{Pair{String,T}}) where {T <: Any}\n\nReturns networks that are part of a MangalDataset. Allows additional query parameters.\n\n\n\n\n\n"
},

{
    "location": "pkg/methods/#Mangal.network",
    "page": "Methods for data retrieval",
    "title": "Mangal.network",
    "category": "function",
    "text": "network(name::AbstractString)\n\nReturns a network of a given name.\n\n\n\n\n\nnetwork(id::Int64)\n\nReturns a network of a given identifier.\n\n\n\n\n\n"
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
    "location": "pkg/methods/#Mangal.nodes",
    "page": "Methods for data retrieval",
    "title": "Mangal.nodes",
    "category": "function",
    "text": "nodes()\n\nGets the latest MangalNode objects.\n\n\n\n\n\nnodes(q::Vector{Pair{String,T}}) where {T <: Any}\n\nGet the latest MangalNode objects according to a given query.\n\n\n\n\n\nnodes(network::MangalNetwork)\n\nReturns the nodes that are part of a MangalNetwork.\n\n\n\n\n\nnodes(network::MangalNetwork, query::Vector{Pair{String,T}}) where {T <: Any}\n\nReturns the nodes that are part of a MangalNetwork, with an additional query.\n\n\n\n\n\nnodes(taxon::MangalReferenceTaxon)\n\nReturns the nodes that are instance of a MangalReferenceTaxon.\n\n\n\n\n\nnodes(taxon::MangalReferenceTaxon, query::Vector{Pair{String,T}}) where {T <: Any}\n\nReturns the nodes that are instance of a MangalReferenceTaxon, with an additional query.\n\n\n\n\n\n"
},

{
    "location": "pkg/methods/#Mangal.node",
    "page": "Methods for data retrieval",
    "title": "Mangal.node",
    "category": "function",
    "text": "node(id::Int64)\n\nReturns a node object by id.\n\n\n\n\n\n"
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
    "text": "backbone()\n\nReturns the most recent entries in the taxonomic backbone.\n\n\n\n\n\nbackbone(q::Vector{Pair{String,T}}) where {T <: Any}\n\nReturns the most recent entries in the taxonomic backbone that match a given query.\n\n\n\n\n\nbackbone(name::AbstractString)\n\nReturns the backbone entry for a taxon, matched by exact name.\n\n\n\n\n\nbackbone(id::Int64)\n\nReturns the backbone entry for a taxon by id. This function will get the cached version of the backbone if it exists.\n\n\n\n\n\n"
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
