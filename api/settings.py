from collections import namedtuple
from pydantic import BaseModel, Field, validator
from pydantic.class_validators import root_validator

CONFIG_PATH = "./config.json"

ERROR = namedtuple("REST_API_ERROR", "eror error_message")
ANSWER = namedtuple("REST_API_ANSWER", "response")
ANSWER_DATA = namedtuple("REST_API_ANSWER_DATA", "items count")

ProfilePageUserData = namedtuple(
    "ProfilePageUserData", "id first_name second_name patronymic is_admin position"
)

ProfilePageRectorData = namedtuple(
    "ProfilePageRectorData",
    "user_id first_name second_name patronymic transform_name superscription email phone photo_link full_position",
)


ProfilePageData = namedtuple("ProfilePageData", "users rectors")

ANSWER_ERROR = dict(response=False)
ANSWER_RIGHT = dict(response=True)
