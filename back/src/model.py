from pony import orm
from database import client


class Profile(client.Entity):
    username = orm.Required(str, unique=True)
    messages = orm.Set(lambda: Message)
    color = orm.Required(str)


class Message(client.Entity):
    message = orm.Required(str)
    profile = orm.Required(Profile)
