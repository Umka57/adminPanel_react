from database.database_methods import get_or_none
from json import dumps
from settings import ANSWER, ANSWER_DATA, ERROR
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

    destination = get_or_none(Destination, id=inputData.destination_id)

    if not destination:
        return ANSWER(ANSWER_DATA(list(), int())._asdict())._asdict(), 500

    try:
        items = destination.__dict__["__data__"]
        count = len(items)

        return ANSWER(ANSWER_DATA(items=items, count=count)._asdict())._asdict(), 200
    except:
        return format_exc(), 500
