from pydantic import BaseModel, Field


class AuthSignInInputData(BaseModel):
    login: str = Field(max_length=32)
    access_token: str = Field(max_length=32)
