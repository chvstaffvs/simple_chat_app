from uvicorn import run
from fastapi import FastAPI
from database import client

app = FastAPI()


client.bind_db()
client.generate_mappings()

from routes import api, ws

app.include_router(api.router)
app.include_router(ws.router)


if __name__ == "__main__":
    run("main:app", host="0.0.0.0", port=5000, reload=True)