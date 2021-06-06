from settings import ANSWER, ANSWER_DATA
from traceback import format_exc
from utils import run_is_auth

from database.database_models import Position

from routes import routes


@routes.route(
    "/positions.getPossible", methods=["GET"], endpoint="positions_getPossible"
)
@run_is_auth
def positions_get_possible():
    try:
        data = Position.select()

        items = []

        for position in data:
            items.append(position.__dict__["__data__"])

        count = len(items)

        return ANSWER(ANSWER_DATA(items=items, count=count)._asdict())._asdict(), 200

    except Exception as e:

        return format_exc(), 500
