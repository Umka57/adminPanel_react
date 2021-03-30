from datetime import datetime
from flask import Flask
from flask_cors import CORS, cross_origin
from database import *
import

app = Flask(__name__)
cors = CORS(app, resources={r"/YOURAPP/*": {"origins": "*"}})


@app.route("/table.get", methods=["GET"])
def table_get():
    user_id, quarter, year = (
        request.args.get("user_id"),
        request.args.get("quarter"),
        request.args.get("year"),
    )

    if not (user_id and quarter and year):
        return ANSWER_ERROR, 400

    last_month = 3 * int(quarter)
    year = int(year)
    user_id = int(user_id)

    try:
        tables = (
            Destination.select()
            .join(
                DestinationValues,
                on=(Destination.id == DestinationValues.destination_id),
            )
            .where(
                (Destination.user == user_id)
                & (Destination.year == year)
                & (DestinationValues.month in list(range(last_month - 3, last_month)))
            )
        )

    except Exception as e:
        from traceback import format_exc

        print(format_exc())
        return ANSWER_ERROR, 500

    try:
        return dumps([i.__dict__["__data__"] for i in tables], ensure_ascii=False), 200
    except Exception as e:
        return ANSWER_ERROR, 400


@app.teardown_appcontext
def shutdown_session(exception=None):
    database.close()


# @app.route("/timestamp", methods=["GET"])
# def home():
#     pass