from json import dumps
from traceback import format_exc

from database.database_models import User
from flask import request
from pydantic import ValidationError
from routes import routes
from settings import ANSWER_ERROR
from utils import get_auth_salt, md5, run_is_auth

from .input_data_types import UsersCreateInputData


# Метод добавления пользователя
@routes.route("/users.create", endpoint="users_create")
@run_is_auth
def users_create():
    from random import SystemRandom
    from string import ascii_lowercase

    try:
        inputData = UsersCreateInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    random_symbols = ascii_lowercase + "0123456789"

    login = "".join([SystemRandom().choice(random_symbols) for _ in range(6)])
    password = "".join([SystemRandom().choice(random_symbols) for _ in range(10)])

    access_token = md5(md5(password) + get_auth_salt())

    try:
        User.create(
            lastname=inputData.name,
            name=inputData.second_name,
            patronymic=inputData.patronymic,
            is_admin=inputData.is_admin,
            position=inputData.position_id,
            access_token=access_token,
            login=login,
        )
    except Exception as e:
        print(e)
        return ANSWER_ERROR, 500

    response = {"login": login, "password": password}
    response.update(request.args)

    return {"response": response}, 200
