from peewee import DoesNotExist


def get_or_none(model, **kwargs):
    try:
        return model.get(**kwargs)
    except Exception as DoesNotExist:
        return None
