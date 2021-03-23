from datetime import datetime
from flask import Flask

app = Flask(__name__)


@app.route("/timestamp", methods=["GET"])
def home():
    return dict(timestamp=datetime.now().timestamp())
