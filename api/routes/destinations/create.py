from json import dumps
from traceback import format_exc

from database.database_models import Destination
from flask import request
from pydantic import ValidationError

from routes import routes
from .input_data_types import DestinationsCreateInputData


@routes.route("/destinations.create", methods=["POST"])
def destinations_create():
    try:
        inputData = DestinationsCreateInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        destination = Destination.create(**inputData.__dict__)

        destination.save()

        return destination.__dict__["__data__"], 200

    except:
        return format_exc(), 500
