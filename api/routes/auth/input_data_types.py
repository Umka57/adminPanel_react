from pydantic import BaseModel, Field


class AuthSignInInputData(BaseModel):
    login: str = Field(max_length=32)
    password: str = Field(max_length=32)
