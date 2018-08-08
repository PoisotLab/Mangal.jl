using Mangal
using HTTP
using JSON

Mangal.login(my_bearer_token)

all_datasets = datasets()

@info length(all_datasets)
for ds in all_datasets
    @info "dataset >> $(ds.name)"
    ds_net = networks(ds)
    @info "\t$(ds.name) => $(length(ds_net)) network(s)"
end

@info dataset(first(all_datasets).name)
@info dataset(first(all_datasets).id)
