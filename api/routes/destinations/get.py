from json import dumps
from traceback import format_exc

from database.database_models import Destination
from flask import request
from pydantic import ValidationError

from routes import routes
from .input_data_types import DestinationsGetInputData


@routes.route("/destinations.get", methods=["POST"])
def destinations_get():
    try:
        inputData = DestinationsGetInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        tables = Destination.select().where(
            (Destination.id == inputData.destination_id)
        )

    except:
        return format_exc(), 500

    try:
        return dumps([i.__dict__["__data__"] for i in tables]), 200
    except:
        return format_exc(), 500
