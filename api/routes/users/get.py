from json import dumps
from traceback import format_exc

from database.database_models import User
from flask import request
from pydantic import ValidationError

from routes import routes
from .input_data_types import UsersGetInputData
from utils import run_is_auth


@routes.route("/users.get", methods=["POST"], endpoint="users_get")
@run_is_auth
def users_get():
    try:
        inputData = UsersGetInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        data = User.select().where((User.id == inputData.user_id))

    except Exception:

        return format_exc(), 500

    if not data:
        return f"User @id{inputData.user_id} not found", 400

    try:
        return dumps(data[0].__dict__["__data__"]), 200
    except Exception as e:
        return format_exc(), 500
