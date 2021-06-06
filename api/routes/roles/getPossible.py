from utils import run_is_auth
from routes import routes
from database.database_models import Role
from traceback import format_exc


@routes.route("/roles.getPossible", methods=["GET"], endpoint="roles_getPossible")
@run_is_auth
def roles_get_possible():
    try:
        data = Role.select()

        return_data = {"count": len(data)}
        respone = []

        for role in data:
            respone.append(role.__dict__["__data__"])

        return_data.update(dict(response=respone))

        return return_data, 200

    except Exception:

        return format_exc(), 500
