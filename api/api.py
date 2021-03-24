from datetime import datetime
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
app.config["CORS_HEADERS"] = "Content-Type"
CORS(app)


@app.route("/timestamp", methods=["GET"])
def home():
    return dict(timestamp=datetime.now().timestamp())
