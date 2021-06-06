from json import dumps
from traceback import format_exc
from utils import run_is_auth

from database.database_models import User
from pydantic import ValidationError
from .input_data_types import UsersGetPossibleInputData
from flask import request
from routes import routes


@routes.route("/users.getPossible", methods=["POST"], endpoint="users_getPossible")
@run_is_auth
def users_get_possible():
    try:
        _json = dumps(request.json)
        inputData = UsersGetPossibleInputData.parse_raw(_json)
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        data = User.select().where(
            (
                True
                if not inputData.position_id
                else (User.position == inputData.position_id)
            )
            & (True if not inputData.role_id else (User.role == inputData.role_id))
        )

        return_data = {"count": len(data)}
        respone = []

        for user in data:
            respone.append(user.__dict__["__data__"])

        return_data.update(dict(response=respone))

        return return_data, 200

    except Exception as e:

        return format_exc(), 500
