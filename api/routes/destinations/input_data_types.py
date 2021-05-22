from pydantic import BaseModel, Field


class DestinationsGetInputData(BaseModel):
    destination_id: int = Field(alias="destinationId")


class DestinationsGetPossibleInputData(BaseModel):
    user_id: int = Field(alias="userId")


class DestinationsCreateInputData(BaseModel):
    user: int = Field(alias="userId")
    name: str = Field(max_length=255)
    performance_indicator: str = Field(max_length=200, alias="performanceIndicator")
    verification_indicator_value: str = Field(
        max_length=200, alias="verificationIndicatorValue"
    )
    year: int = Field()
    plan: str = Field(max_length=200)
    present_value: str = Field(max_length=500, alias="presentValue")
    percent_completion: int = Field(alias="percentCompletion")


class DestinationsCreateValuesInputData(BaseModel):
    destination: int = Field(alias="destinationId")
    week: int = Field()
    value: float = Field()
