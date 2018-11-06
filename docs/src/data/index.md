
````julia
using Mustache
using Dates

tpl = mt"""
## General informations

**Dataset**: {{name}} [`{{id}}`]

**Sampling date**: {{date}}

**Added on**: {{created}} (last update on {{updated}})

**Number of networks**: {{ncount}}

## Description

{{description}}

## Programmatic access

    using Mangal
    {{rawname}} = dataset({{id}})

"""

for d in datasets()
   _clean_name = titlecase(replace(d.name, "_" => " "))
   _infos = Dict(
      "name" => _clean_name,
      "rawname" => d.name,
      "description" => d.description,
      "id" => d.id,
      "date" => Dates.format(d.date, "yyyy-mm-dd"),
      "created" => Dates.format(d.created, "yyyy-mm-dd"),
      "updated" => Dates.format(d.updated, "yyyy-mm-dd"),
      "ncount" => count(MangalNetwork, ["dataset_id" => d.id])
      )
   _text = render(tpl, _infos)
   write(joinpath("docs", "src", "data", "dataset", "$(d.name).md"), _text)
end
````


