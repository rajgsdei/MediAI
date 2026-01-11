from fastapi import FastAPI
from app.api.v1.endpoints import router as v1_router
from app.db.client import connect_to_mongo, close_mongo

app = FastAPI(title="MediAI API")

app.include_router(v1_router, prefix="/api/v1")

@app.on_event("startup")
async def startup_event():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_event():
    await close_mongo()
