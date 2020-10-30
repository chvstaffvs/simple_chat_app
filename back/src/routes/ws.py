from typing import List
from fastapi import APIRouter, WebSocket, Path
from starlette.websockets import WebSocketDisconnect
from controllers import old_messages, save_message

router = APIRouter()


class Connections:
    def __init__(self) -> None:
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def broadcast(self):
        for connection in self.active_connections:
            await connection.send_json(old_messages())


manager = Connections()


@router.websocket("/ws")
async def chat_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            await manager.broadcast()
            receive = await websocket.receive_json()
            message = receive.get("message")
            username = receive.get("username")
            save_message(message, username)
    except WebSocketDisconnect:
        manager.disconnect(websocket)
