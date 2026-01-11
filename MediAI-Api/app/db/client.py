from motor.motor_asyncio import AsyncIOMotorClient
from typing import Optional
from app.core.config import settings

client: Optional[AsyncIOMotorClient] = None
db = None

async def connect_to_mongo():
    global client, db
    client = AsyncIOMotorClient(settings.MONGO_URI)
    db = client[settings.MONGO_DB]

async def close_mongo():
    global client
    if client:
        client.close()
