function format_dataset_response(d::Dict{T,Any}) where {T <: AbstractString}
    obj_id = d["id"]
    obj_public = d["public"]
    obj_name = d["name"]
    obj_date = DateTime(d["date"][1:19])
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])
    obj_reference = d["ref_id"]
    obj_user = d["user_id"]
    obj_description = d["description"]

    return MangalDataset(obj_id, obj_public, obj_name, obj_date, obj_created,
        obj_updated, obj_reference, obj_user, obj_description
        )
end

function format_mangal_coordinates(d::Dict{T,Any}) where {T <: AbstractString}
    point_type = d["localisation"]["type"] == "Point" ? Point : Polygon
    if point_type == Polygon
        coords = [float.(x) for x in first(d["localisation"]["coordinates"])]
        point_coordinates = point_type(coords)
    else
        coords = float.(d["localisation"]["coordinates"])
        point_coordinates = point_type(coords...)
    end
    return point_coordinates
end

function format_network_response(d::Dict{T,Any}) where {T <: AbstractString}

    obj_id = d["id"]
    obj_public = d["public"]
    obj_name = d["name"]
    obj_date = DateTime(d["date"][1:19])
    obj_position = format_mangal_coordinates(d)
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])
    obj_user = d["user_id"]
    obj_description = d["description"]
    obj_environment = d["environment_id"]
    obj_complete = d["all_interactions"]
    obj_dataset = d["dataset_id"]

    return MangalNetwork(obj_id, obj_public, obj_name, obj_date, obj_position,
        obj_created, obj_updated, obj_user, obj_description, obj_environment,
        obj_complete, obj_dataset)

end

function format_node_response(d::Dict{T,Any}) where {T <: AbstractString}

    obj_id = d["id"]
    obj_name = d["original_name"]
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])
    obj_taxon = Mangal.format_backbone_response(d["taxonomy"])

    return MangalNode(obj_id, obj_name, obj_created, obj_updated, obj_taxon)

end

function format_backbone_response(d::Dict{T,Any}) where {T <: AbstractString}

    obj_id = d["id"]
    obj_name = d["name"]
    obj_status = Symbol(d["status"])
    obj_bold = d["bold"]
    obj_tsn = d["tsn"]
    obj_ncbi = d["ncbi"]
    obj_eol = d["eol"]
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])

    return MangalReferenceTaxon(obj_id, obj_name, obj_status, obj_bold, obj_tsn,
        obj_ncbi, obj_eol, obj_created, obj_updated)

end

function format_interaction_response(d::Dict{T,Any}) where {T <: AbstractString}
    obj_id = d["id"]
    obj_from = node(d["taxon_1"])
    obj_to = node(d["taxon_2"])
    obj_level=(Symbol(d["taxon_1_level"]),Symbol(d["taxon_1_level"]))
    obj_date = DateTime(d["date"][1:19])
    obj_directed = d["direction"] == "directed"
    obj_interaction =Symbol(d["type"])
    obj_method = d["method"]
    obj_strength = d["value"]
    obj_user = d["user_id"]
    obj_attr = d["attr_id"]
    obj_created = DateTime(d["created_at"][1:19])
    obj_updated = DateTime(d["updated_at"][1:19])
    obj_description = d["description"]

    return MangalInteraction(obj_id, obj_from, obj_to, obj_level, obj_date,
        obj_directed, obj_interaction, obj_method, obj_strength, obj_user,
        obj_attr, obj_created, obj_updated, obj_description)

end
