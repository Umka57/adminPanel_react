from . import routes
from flask import request
from database import *
from pydantic import ValidationError
from traceback import format_exc
from settings import (
    DestinationsCreateInputData,
    DestinationsGetInputData,
    DestinationsGetPossibleInputData,
    DestinationsCreateValuesInputData,
)
from json import dumps


@routes.route("/destinations.get", methods=["POST"])
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

    except:
        return format_exc(), 500

    try:
        return dumps([i.__dict__["__data__"] for i in tables]), 200
    except:
        return format_exc(), 500


@routes.route("/destinations.getValues", methods=["POST"])
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
    except:
        return format_exc(), 500


@routes.route("/destinations.getPossible", methods=["POST"])
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

        return return_data, 200

    except:
        return format_exc(), 500


@routes.route("/destinations.create", methods=["POST"])
def destinations_create():
    try:
        inputData = DestinationsCreateInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        destination = Destination.create(**inputData.__dict__)

        destination.save()

        return destination.__dict__["__data__"], 200

    except:
        return format_exc(), 500


@routes.route("/destinations.createValues", methods=["POST"])
def destinations_create_values():
    try:
        inputData = DestinationsCreateValuesInputData.parse_raw(dumps(request.json))
    except ValidationError as error:
        return error.json(), 400
    except:
        return format_exc(), 500

    try:
        destination_values = DestinationValues.create(**inputData.__dict__)

        destination_values.save()

        return destination_values.__dict__["__data__"], 200

    except:
        return format_exc(), 500