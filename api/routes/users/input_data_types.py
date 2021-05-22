from pydantic import BaseModel, Field, validator


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
