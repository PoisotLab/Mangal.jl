ops = [
    (MangalNode, MangalNetwork, "network_id", nodes),
    (MangalNetwork, MangalDataset, "dataset_id", networks)
    ]

#=

This block is a code generator.

=#

for op in ops
    t1, t2, filterfield, filterfunc = op
    @eval begin
        """
            getallof(::Type{$($t1)}, n::$($t2))

        Returns all $($t1) objects contained into the $($t2) object passed as
        its second argument. Internally, this is wrapper around $($filterfunc),
        where nodes are sorted according to their "$($filterfield)".
        """
        function getallof(::Type{$t1}, n::$t2)
            base_query = [$filterfield => n.id]
            page_size = 200
            total_count = count($t1, base_query)
            pages_to_do = convert(Int64, ceil(total_count/page_size))
            result_set = $t1[]
            for page in 1:pages_to_do
                paging_query = ["count" => page_size, "page" => page-1]
                append!(paging_query, base_query)
                append!(result_set, $filterfunc(n, paging_query))
            end
            return unique(result_set)
        end

        """
            getallof(::Type{$($t1)}, n::$($t2), query::Vector{Pair{String,T}}) where {T <: Any}

        Returns all $($t1) objects contained into the $($t2) object passed as
        its second argument. This function will also apply a `query` passed as
        the third argument.
        """
        function getallof(::Type{$t1}, n::$t2, query::Vector{Pair{String,T}}) where {T <: Any}
            base_query = [$filterfield => n.id]
            append!(base_query, query)
            page_size = 200
            total_count = count($t1, base_query)
            pages_to_do = convert(Int64, ceil(total_count/page_size))
            result_set = $t1[]
            for page in 1:pages_to_do
                paging_query = ["count" => page_size, "page" => page-1]
                append!(paging_query, base_query)
                append!(result_set, $filterfunc(n, paging_query))
            end
            return unique(result_set)
        end
    end
end
