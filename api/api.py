from datetime import datetime
from flask import Flask

from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/YOURAPP/*": {"origins": "*"}})

@app.route("/timestamp", methods=["GET"])
def home():
    return dict(timestamp=datetime.now().timestamp())
