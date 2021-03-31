# DEVELOPED BY BOOSTBOTS
from datetime import datetime
from json import dumps
from logging import exception
from settings import DestinationsGetInputData, DestinationsGetPossibleInputData
from flask import Flask, request
from flask_cors import CORS, cross_origin
from database import *
from pydantic import ValidationError
from traceback import format_exc


ANSWER_ERROR = dict(response=0)
ANSWER_RIGHT = dict(response=1)

app = Flask(__name__)
cors = CORS(app, resources={r"/YOURAPP/*": {"origins": "*"}})


@app.route("/destinations.get", methods=["POST"])
def destinations_get():
    try:
        inputData = DestinationsGetInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        tables = Destination.select().where(
            (Destination.id == inputData.destination_id)
        )

    except Exception as e:

        return format_exc(), 500

    try:
        print([i.__dict__["__data__"] for i in tables])
        return dumps([i.__dict__["__data__"] for i in tables]), 200
    except Exception as e:
        return format_exc(), 500


@app.route("/destinations.getValues", methods=["POST"])
def destinations_get_values():
    try:
        inputData = DestinationsGetInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        tables = DestinationValues.select().where(
            (DestinationValues.destination == inputData.destination_id)
        )

    except Exception as e:

        return format_exc(), 500

    try:
        return dumps([i.__dict__["__data__"] for i in tables]), 200
    except Exception as e:
        return format_exc(), 500


@app.route("/destinations.getPossible", methods=["POST"])
def destinations_get_possible():
    try:
        inputData = DestinationsGetPossibleInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        data = Destination.select().where(Destination.user == inputData.user_id)

        return_data = {"count": len(data)}
        respone = []

        for destination in data:
            respone.append(destination.__dict__["__data__"])

        return_data.update(dict(response=respone))
        from pprint import pprint

        pprint(return_data)
        return return_data, 200

    except Exception as e:

        return format_exc(), 500


@app.teardown_appcontext
def shutdown_session(exception=None):
    database.close()
