function login(token::AbstractString)
    ENV["MANGAL_BEARER_TOKEN"] = token
    @info "Logged in"
end

function login()
    if haskey(ENV, "MANGAL_BEARER_TOKEN")
        @info "You are already logged in"
    else
        Mangal.login_message()
    end
end

function login_message()
    @info "You need to login"
    msg = """
    To login, please go to $(Mangal.web_root)auth/
    You will be prompted to login using ORCID - when this is done, you will be
    returned to your profile page, which contains the access_token. Copy and
    paste this value, and use it in the login function:
    julia> my_access_token = "12345654-1234-1234-4321-4343435353"
    julia> Mangal.login(my_access_token)
    If you want to save your bearer token, you can place it in an environmental
    variable named MANGAL_BEARER_TOKEN -- this will let you use
    julia> Mangal.login()
    """
    @info msg
end

function generate_base_header()
    if haskey(ENV, "MANGAL_BEARER_TOKEN")
        return ["Authorization" => "bearer $(ENV["MANGAL_BEARER_TOKEN"])"]
    else
        return []
    end
end
