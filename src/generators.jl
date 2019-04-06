types_names = (
    (MangalReferenceTaxon, :backbone),
    (MangalNode, :node),
    (MangalNetwork, :network),
    (MangalDataset, :dataset),
    (MangalReference, :reference),
    (MangalInteraction, :interaction)
    )

import Base.count

for mg_type_pair in types_names
    mg_type, mg_singular = mg_type_pair
    mg_plural = Symbol(string(mg_singular)*"s")
    @eval begin
        function count(::Type{$mg_type}, query::Pair...)
            return Mangal.number_of_objects(Mangal._MANGAL_ENDPOINTS[$mg_type], query...)
        end
    end
    if haskey(Mangal._MANGAL_CACHES, mg_type)
        @eval begin
            function $mg_plural(query::Pair...)
                results = search_objects_by_query($mg_type, query...)
                Mangal.cache(results)
                return results
            end

            function $mg_singular(id::Int64)
                if haskey(Mangal._MANGAL_CACHES[$mg_type], id)
                    return Mangal._MANGAL_CACHES[$mg_type][id]
                else
                    return first($mg_plural(Pair("id", id)))
                end
            end
        end
    else
        @eval begin
            function $mg_plural(query::Pair...)
                results = search_objects_by_query($mg_type, query...)
                return results
            end

            function $mg_singular(id::Int64)
                return first($mg_plural(Pair("id", id)))
            end
        end
    end
end
