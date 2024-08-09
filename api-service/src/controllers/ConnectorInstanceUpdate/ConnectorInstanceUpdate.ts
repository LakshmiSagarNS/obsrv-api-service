import _ from "lodash";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { schemaValidation } from "../../services/ValidationService";
import { ResponseHandler } from "../../helpers/ResponseHandler";
import ConnectorInstanceUpdate from "./ConnectorInstanceUpdateValidationSchema.json";
import { obsrvError } from "../../types/ObsrvError";
import { connectorInstance } from "../../services/ConnectorInstanceService";

const validateRequest = async (req: Request) => {

    const connector_id = _.get(req, ["body", "request", "id"])
    const isRequestValid: Record<string, any> = schemaValidation(req.body, ConnectorInstanceUpdate)
    if (!isRequestValid.isValid) {
        throw obsrvError(connector_id, "CONNECTOR_INSTANCE_INVALID_INPUT", isRequestValid.message, "BAD_REQUEST", 400)
    }

    const connectorInstanceBody = req.body.request
    const { id, ...rest } = connectorInstanceBody
    if (_.isEmpty(rest)) {
        throw obsrvError(connector_id, "CONNECTOR_INSTANCE_UPDATE_NO_FIELDS", "Provide atleast one field in addition to the id to update the connector instance", "BAD_REQUEST", 400)
    }

    const connectorInstanceStatus = connectorInstance.getConnectorInstanceStatus(connector_id)
    if (!_.includes(["Draft", "ReadyToPublish"], await connectorInstanceStatus)) {
        throw obsrvError(connector_id, "CONNECTOR_INSTANCE_NOT_IN_DRAFT_STATE_TO_UPDATE", "Connector Instance cannot be updated as it is not in draft state", "BAD_REQUEST", 400)
    }
}

const connectorInstanceUpdate = async (req: Request, res: Response) => {
    await validateRequest(req)
    const updateResponse = await connectorInstance.updateConnectorInstance(req.body.request)
    ResponseHandler.successResponse(req, res, { status: httpStatus.OK, data: updateResponse });
}
export default connectorInstanceUpdate;