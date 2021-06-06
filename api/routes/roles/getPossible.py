from settings import ANSWER, ANSWER_DATA
from utils import run_is_auth
from routes import routes
from database.database_models import Role
from traceback import format_exc


@routes.route("/roles.getPossible", methods=["GET"], endpoint="roles_getPossible")
@run_is_auth
def roles_get_possible():
    try:
        data = Role.select()

        items = []

        for role in data:
            items.append(role.__dict__["__data__"])

        count = len(items)

        return ANSWER(ANSWER_DATA(items=items, count=count)._asdict())._asdict(), 200

    except Exception:

        return format_exc(), 500
