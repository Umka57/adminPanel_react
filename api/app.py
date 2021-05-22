# DEVELOPED BY BOOSTBOTS\
from flask import Flask
from flask_cors import CORS

from database.database_models import database
from routes import routes
from utils import config_get

app = Flask(__name__)

app.config["SECRET_KEY"] = config_get("FLASK_SECRET_KEY")

cors = CORS(app, resources={r"/YOURAPP/*": {"origins": "*"}})
app.register_blueprint(routes)


@app.teardown_appcontext
def shutdown_session(exception=None):
    if not database.is_closed():
        database.close()


@app.before_request
def before_request():
    if database.is_closed():
        database.connect()


@app.after_request
def after_request(response):
    if not database.is_closed():
        database.close()

    return response
