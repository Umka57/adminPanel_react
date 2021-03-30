from re import L
from peewee import (
    CharField,
    FloatField,
    ForeignKeyField,
    PostgresqlDatabase,
    Model,
    IntegerField,
)

from playhouse.sqlite_ext import JSONField
from utils import config_get_params

_name, _host, _port, _user, _password = config_get_params(
    [
        "database_name",
        "database_host",
        "database_port",
        "database_username",
        "database_password",
    ]
)

driver = PostgresqlDatabase

database = driver(
    _name,
    host=_host,
    port=_port,
    user=_user,
    password=_password,
)


class BaseModel(Model):
    class Meta:
        database = database


class Position(BaseModel):
    position_name = CharField(max_length=200)


class Role(BaseModel):
    role_name = CharField(max_length=50)


class User(BaseModel):
    lastname = CharField(max_length=50)
    name = CharField(max_length=50)
    patronymic = CharField(max_length=50)
    telephone = CharField(max_length=20, null=True)
    email = CharField(max_length=256, null=True)
    position = ForeignKeyField(Position, on_delete="RESTRICT", null=True)
    role = ForeignKeyField(Role, on_delete="RESTRICT", null=True)


class Destination(BaseModel):
    user = ForeignKeyField(User, on_delete="RESTRICT")
    name = CharField(max_length=255)
    performance_indicator = CharField(max_length=200)
    verification_indicator_value = CharField(max_length=200)
    year = IntegerField()
    plan = CharField(max_length=200)
    present_value = CharField(max_length=500)
    percent_completion = IntegerField()


class DestinationValues(BaseModel):
    destination = ForeignKeyField(Destination, on_delete="RESTRICT")
    week = IntegerField()
    value = FloatField()


class KPI(BaseModel):
    user_id = ForeignKeyField(User, on_delete="RESTRICT")
    percent_completion = FloatField()


# * Инициализация таблиц базы данных
if database:
    Position.create_table(True)
    Role.create_table(True)
    User.create_table(True)
    Destination.create_table(True)
    DestinationValues.create_table(True)
    KPI.create_table(True)