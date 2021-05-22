from json import dumps
from traceback import format_exc

from database.database_models import Destination
from flask import request

from routes import routes


# Метод добавления пользователя
@routes.route("/users.create")
def users_create():
    from hashlib import md5
    from random import SystemRandom
    from string import ascii_lowercase

    second_name, name, patronymic, position, is_admin = (
        request.args.get("second_name"),
        request.args.get("name"),
        request.args.get("patronymic"),
        request.args.get("position"),
        request.args.get("is_admin"),
    )

    if not (
        second_name and name and patronymic and position and not (is_admin is None)
    ):
        return ANSWER_ERROR, 400

    random_symbols = ascii_lowercase + "0123456789"

    login = "".join([SystemRandom().choice(random_symbols) for _ in range(6)])
    password = "".join([SystemRandom().choice(random_symbols) for _ in range(10)])

    access_token = md5(
        (md5(password.encode("utf-8")).hexdigest() + config_get("AUTH_SALT")).encode(
            "utf-8"
        )
    ).hexdigest()

    try:
        User.create(
            first_name=name,
            second_name=second_name,
            patronymic=patronymic,
            is_admin=is_admin,
            position=position,
            access_token=access_token,
            login=login,
        )
    except Exception as e:
        return ANSWER_ERROR, 500

    response = {"login": login, "password": password}
    response.update(request.args)

    return {"response": response}, 200
