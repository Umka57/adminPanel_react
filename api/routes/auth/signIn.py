from datetime import datetime, timedelta
import uuid
from copy import deepcopy
from json import dumps
from traceback import format_exc

from flask.wrappers import Response

from database.database_methods import get_or_none
from database.database_models import User, UserSessions
from flask import make_response, request
from pydantic import ValidationError
from routes import routes
from settings import ERROR
from utils import get_auth_salt, md5, run_is_not_auth

from .input_data_types import AuthSignInInputData


@routes.route("/auth.sign-in", methods=["POST"], endpoint="sign_in")
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
        return ERROR(True, "Пароль и/или Логин")._asdict(), 200

    uid = uuid.uuid1()

    uid_life_time = timedelta(days=1)
    uid_end_time = datetime.now() + uid_life_time

    UserSessions.create(
        user=user, session_token=uid, session_token_date_end=uid_end_time
    )

    user_data = deepcopy(user.__dict__["__data__"])

    user_data.pop("access_token")

    response = make_response(user_data)

    response.set_cookie("access_token", str(uid), max_age=uid_life_time.total_seconds())

    return response, 200
