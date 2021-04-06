from . import routes
from database import *
from traceback import format_exc


@routes.route("/roles.getPossible", methods=["GET", "POST"])
def roles_get_possible():
    try:
        data = Role.select()

        return_data = {"count": len(data)}
        respone = []

        for role in data:
            respone.append(role.__dict__["__data__"])

        return_data.update(dict(response=respone))

        return return_data, 200

    except Exception as e:

        return format_exc(), 500