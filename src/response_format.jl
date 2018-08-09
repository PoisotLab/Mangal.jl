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

function format_network_response(d::Dict{T,Any}) where {T <: AbstractString}

    point_type = d["localisation"]["type"] == "Point" ? Point : Polygon
    if point_type == Polygon
        coords = [float.(x) for x in first(d["localisation"]["coordinates"])]
        point_coordinates = point_type(coords)
    else
        coords = float.(d["localisation"]["coordinates"])
        point_coordinates = point_type(coords...)
    end


    obj_id = d["id"]
    obj_public = d["public"]
    obj_name = d["name"]
    obj_date = DateTime(d["date"][1:19])
    obj_position = point_coordinates
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
    obj_taxon = Mangal.backbone(d["taxo_id"])

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
    obj_description = d["description"]

    return MangalReferenceTaxon(obj_id, obj_name, obj_status, obj_bold, obj_tsn,
        obj_ncbi, obj_eol, obj_created, obj_updated, obj_description)

end
