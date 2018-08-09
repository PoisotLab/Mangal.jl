using Mangal
using HTTP
using JSON

my_bearer_token = "614n28o6-6081-459p-o983-6020n0n30ror"
Mangal.login(my_bearer_token)

n1 = networks(dataset(4))[1]
@info n1
this_network_nodes = nodes(n1)

@info this_network_nodes
@info this_network_nodes[1].taxon
