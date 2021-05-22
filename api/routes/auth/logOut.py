from database.database_models import UserSessions
from flask import make_response, request
from routes import routes
from utils import run_is_auth


@routes.route("/auth.log-out", methods=["POST"], endpoint="log_out")
@run_is_auth
def log_out():
    access_token = request.cookies["access_token"]

    try:
        UserSessions.delete(session_token=access_token)
    except:
        pass

    response = make_response()

    response.set_cookie("access_token", "", max_age=0)

    return response, 200
