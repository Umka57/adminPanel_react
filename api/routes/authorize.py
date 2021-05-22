# from json import dumps
# from traceback import format_exc

# from database import *
# from flask import request
# from pydantic import ValidationError
# from settings import ANSWER_RIGHT, AuthSignInInputData

# from routes import routes


# @routes.route("/auth.sign-in", methods=["POST"])
# def sign_in():
#     try:
#         inputData = AuthSignInInputData.parse_raw(dumps(request.json))
#     except ValidationError as error:
#         return error.json(), 400
#     except:
#         return format_exc(), 500

#     return inputData.__dict__, 200


# @routes.route("/auth.sign-up", methods=["POST"])
# def sign_up():
#     return "", 200
