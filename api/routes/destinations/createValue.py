from json import dumps
from traceback import format_exc

from database.database_models import DestinationValues
from flask import request
from pydantic import ValidationError

from routes import routes
from .input_data_types import DestinationsCreateValuesInputData


@routes.route("/destinations.createValues", methods=["POST"])
def destinations_create_values():
    try:
        inputData = DestinationsCreateValuesInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        destination_values = DestinationValues.create(**inputData.__dict__)

        destination_values.save()

        return destination_values.__dict__["__data__"], 200

    except:
        return format_exc(), 500
