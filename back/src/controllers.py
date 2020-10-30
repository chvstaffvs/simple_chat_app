from functools import partial
from typing import Any, Dict
from pony import orm
from model import Message, Profile
from random import randint


@orm.db_session
def old_messages() -> Dict[str, Any]:
    messages = Message.select(lambda message: message)
    return [
        {
            "message": message.message,
            "owner": message.profile.username,
            "color": message.profile.color,
        }
        for message in messages
    ]


@orm.db_session
def save_message(message: str, username: str) -> None:
    profile = Profile.get(username=username)
    Message(message=message, profile=profile)


color_gen = partial(randint, 0, 255)


@orm.db_session
def create_or_get_profile(username: str):
    profile = Profile.get(username=username)
    if not profile:
        color = "#%02X%02X%02X" % (color_gen(), color_gen(), color_gen())
        profile = Profile(username=username, color=color)
    return profile
