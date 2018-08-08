using Mangal
using HTTP
using JSON

my_bearer_token = "614a28b6-6081-459c-b983-6020a0a30ebe"
Mangal.login(my_bearer_token)

Mangal.

ponisio = dataset(27)
@info ponisio

@info ponisio.description
@info networks(ponisio)
