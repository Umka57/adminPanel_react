from flask import Blueprint

routes = Blueprint("routes", __name__)

from .destinations import *
from .positions import *
from .roles import *
from .users import *
from .auth import *
