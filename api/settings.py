from collections import namedtuple
from pydantic import BaseModel, Field, validator
from pydantic.class_validators import root_validator

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


class UsersGetPossibleInputData(BaseModel):
    position_id: int = Field(None, alias="positionId")
    role_id: int = Field(None, alias="roleId")

    @validator(position_id, check_fields=False)
    def position_id_validator(cls, v: int) -> int:
        if v is None:
            raise ValueError(f"Cannot set {cls.position_id} to None")

        return int(v)

    @validator(role_id, check_fields=False)
    def role_id_validator(cls, v: int) -> int:
        if v is None:
            raise ValueError(f"Cannot set {cls.position_id} to None")

        return int(v)


class UsersGetInputData(BaseModel):
    user_id: int = Field(alias="userId")


ProfilePageData = namedtuple("ProfilePageData", "users rectors")

ANSWER_ERROR = dict(response=0)
ANSWER_RIGHT = dict(response=1)