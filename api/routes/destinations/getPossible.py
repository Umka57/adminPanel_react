from json import dumps
from utils import run_is_auth
from settings import ANSWER, ANSWER_DATA
from traceback import format_exc

from database.database_models import Destination
from flask import request
from pydantic import ValidationError

from routes import routes
from .input_data_types import DestinationsGetPossibleInputData


@routes.route(
    "/destinations.getPossible", methods=["POST"], endpoint="destinations_getPossbile"
)
@run_is_auth
def destinations_get_possible():
    try:
        inputData = DestinationsGetPossibleInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        destinations = Destination.select().where(Destination.user == inputData.user_id)

        count = len(destinations)
        items = [destination.__dict__["__data__"] for destination in destinations]

        return ANSWER(ANSWER_DATA(items=items, count=count)._asdict())._asdict(), 200

    except:
        return format_exc(), 500
