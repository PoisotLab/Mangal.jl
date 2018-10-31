ops = [
    (MangalNode, MangalNetwork),
    (MangalNetwork, MangalDataset)
    ]

#=

This block is a code generator.

=#

for op in ops
    t1, t2 = op
    argpair = ("network_id", nodes)
    t1 == MangalNode && t2 == MangalNetwork && (argpair = ("network_id", nodes))
    t1 == MangalNetwork && t2 == MangalDataset && (argpair = ("dataset_id", networks))
    ftarg, ftfunc = argpair
    @eval begin
        """
            gimme(::Type{$($t1)}, n::$($t2))

        Returns all $($t1) objects contained into the $($t2) object passed as
        its second argument.
        """
        function getallof(::Type{$t1}, n::$t2)
            base_query = [$ftarg => n.id]
            page_size = 200
            total_count = count($t1, base_query)
            pages_to_do = convert(Int64, ceil(total_count/page_size))
            result_set = $t1[]
            for page in 1:pages_to_do
                paging_query = ["count" => page_size, "page" => page-1]
                append!(paging_query, base_query)
                append!(result_set, $ftfunc(n, paging_query))
            end
            return unique(result_set)
        end
    end
end
