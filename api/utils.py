from settings import CONFIG_PATH, ERROR
from json import dump, load, dumps


def config_read(path: str = CONFIG_PATH):
    with open(path) as fh:
        config = load(fh)

    return config


def config_write(data, path: str = CONFIG_PATH):
    with open(path, "w") as outfile:
        dump(data, outfile)

    return data


def config_get(parameter: str, path: str = CONFIG_PATH):
    config = config_read(path)

    return config[parameter] if parameter in config else None


def config_get_params(parameters: list, path: str = CONFIG_PATH):
    config = config_read(path)

    result = [config[parameter] for parameter in parameters]

    return result


def config_set(parameter, value, path: str = CONFIG_PATH):
    config = config_read(path)

    config[parameter] = value

    config_write(config)

    return config[parameter] if parameter in config else None


def get_auth_salt(path: str = CONFIG_PATH):
    return config_get(parameter="AUTH_SALT", path=path)


def md5(string: str) -> str:
    from hashlib import md5

    return md5(string.encode("utf-8")).hexdigest()


def get_is_auth(access_token: str) -> bool:
    from database.database_models import UserSessions
    from database.database_methods import get_or_none
    from datetime import datetime

    session = get_or_none(UserSessions, session_token=access_token)

    if not session:
        return False

    elif not (session.session_token_date_end - datetime.now()).total_seconds():
        session.delete_instance()

        return False

    return True


def run_is_auth(func):
    def wrapper(*args, **kwargs):
        from flask import request

        if not ("access_token" in request.cookies):
            return ERROR(True, "Пользователь не авторизован")._asdict()

        return func(*args, **kwargs)

    return wrapper


def run_is_not_auth(func):
    def wrapper(*args, **kwargs):
        from flask import request

        if "access_token" in request.cookies:
            is_auth = get_is_auth(request.cookies["access_token"])

            return ERROR(True, "Пользователь уже авторизован")._asdict()

        return func(*args, **kwargs)

    return wrapper
