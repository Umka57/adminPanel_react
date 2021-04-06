from json import dumps
from traceback import format_exc

from database import *
from pydantic import ValidationError
from settings import UsersGetInputData, UsersGetPossibleInputData
from flask import request
from . import routes


@routes.route("/users.getPossible", methods=["POST"])
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


@routes.route("/users.get", methods=["POST"])
def users_get():
    try:
        inputData = UsersGetInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        data = User.select().where((User.id == inputData.user_id))

    except Exception as e:

        return format_exc(), 500

    if not data:
        return f"User @id{inputData.user_id} not found", 400

    try:
        return dumps(data[0].__dict__["__data__"]), 200
    except Exception as e:
        return format_exc(), 500
