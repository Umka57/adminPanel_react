# DEVELOPED BY BOOSTBOTS\
from flask import Flask
from flask_cors import CORS

from database import *
from routes import routes

app = Flask(__name__)
cors = CORS(app, resources={r"/YOURAPP/*": {"origins": "*"}})
app.register_blueprint(routes)


@app.teardown_appcontext
def shutdown_session(exception=None):
    database.close()
