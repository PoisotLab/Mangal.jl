my_bearer_token = "614a28b6-6081-459c-b983-6020a0a30ebe"
Mangal.login(my_bearer_token)

n1 = networks(dataset(4))[1]
@info n1
this_network_nodes = nodes(n1)

@info this_network_nodes
@info this_network_nodes[1].taxon
