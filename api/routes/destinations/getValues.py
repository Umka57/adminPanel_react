from json import dumps
from traceback import format_exc
from utils import run_is_auth

from database.database_models import DestinationValues
from flask import request
from pydantic import ValidationError

from routes import routes
from .input_data_types import DestinationsGetInputData


@routes.route(
    "/destinations.getValues", methods=["POST"], endpoint="destinations_getValues"
)
@run_is_auth
def destinations_get_values():
    try:
        inputData = DestinationsGetInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        tables = DestinationValues.select().where(
            (DestinationValues.destination == inputData.destination_id)
        )

    except Exception as e:

        return format_exc(), 500

    try:
        return dumps([i.__dict__["__data__"] for i in tables]), 200
    except:
        return format_exc(), 500
