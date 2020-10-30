from fastapi import APIRouter, Path
from controllers import create_or_get_profile, old_messages

router = APIRouter()


@router.post("/user/{username}")
async def register_user(username: str = Path(...)):
    create_or_get_profile(username)


@router.get("/messages")
async def get_messages():
    return old_messages()