from . import routes
from database import *
from traceback import format_exc


@routes.route("/positions.getPossible", methods=["GET", "POST"])
def positions_get_possible():
    try:
        data = Position.select()

        return_data = {"count": len(data)}
        respone = []

        for position in data:
            respone.append(position.__dict__["__data__"])

        return_data.update(dict(response=respone))

        return return_data, 200

    except Exception as e:

        return format_exc(), 500
