from json import dumps
from traceback import format_exc

from database.database_models import Destination
from flask import request
from pydantic import ValidationError

from routes import routes
from .input_data_types import DestinationsGetPossibleInputData


@routes.route("/destinations.getPossible", methods=["POST"])
def destinations_get_possible():
    try:
        inputData = DestinationsGetPossibleInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        data = Destination.select().where(Destination.user == inputData.user_id)

        return_data = {"count": len(data)}
        respone = []

        for destination in data:
            respone.append(destination.__dict__["__data__"])

        return_data.update(dict(response=respone))

        return return_data, 200

    except:
        return format_exc(), 500
