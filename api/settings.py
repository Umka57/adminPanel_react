from collections import namedtuple
from pydantic import BaseModel, Field

CONFIG_PATH = "./config.json"

ProfilePageUserData = namedtuple(
    "ProfilePageUserData", "id first_name second_name patronymic is_admin position"
)

ProfilePageRectorData = namedtuple(
    "ProfilePageRectorData",
    "user_id first_name second_name patronymic transform_name superscription email phone photo_link full_position",
)


class DestinationsGetInputData(BaseModel):
    destination_id: int = Field(alias="destinationId")


class DestinationsGetPossibleInputData(BaseModel):
    user_id: int = Field(alias="userId")


ProfilePageData = namedtuple("ProfilePageData", "users rectors")
