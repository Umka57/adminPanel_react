from json import dumps
from traceback import format_exc
from utils import run_is_not_auth, md5, get_auth_salt
from settings import ERROR

from flask import request, make_response
from pydantic import ValidationError
from .input_data_types import AuthSignInInputData
from database.database_models import User, UserSessions
from database.database_methods import get_or_none
from routes import routes
import uuid


@routes.route("/auth.sign-in", methods=["POST"])
@run_is_not_auth
def sign_in():
    try:
        inputData = AuthSignInInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    password_hash = md5(get_auth_salt() + "\:/" + inputData.access_token)

    user = get_or_none(User, login=inputData.login, access_token=password_hash)

    if not user:
        return ERROR(True, "Пароль и/или Логин")._asdict()

    uid = uuid.uuid1()

    session = UserSessions.create(user=user, session_token=uid)

    res = make_response("Setting a cookie")

    res.set_cookie("access_token", str(uid), max_age=60 * 60 * 24)

    return res
