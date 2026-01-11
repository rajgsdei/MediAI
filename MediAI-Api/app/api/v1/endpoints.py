from fastapi import APIRouter, HTTPException
from typing import List
from app.models.item_model import ItemCreate, ItemInDB, ItemUpdate
from app.services.item_service import ItemService

router = APIRouter()
service = ItemService()

@router.post("/items", response_model=ItemInDB)
async def create_item(item: ItemCreate):
    return await service.create_item(item)

@router.get("/items", response_model=List[ItemInDB])
async def list_items():
    return await service.list_items()

@router.get("/items/{item_id}", response_model=ItemInDB)
async def get_item(item_id: str):
    item = await service.get_item(item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.put("/items/{item_id}", response_model=ItemInDB)
async def update_item(item_id: str, data: ItemUpdate):
    item = await service.update_item(item_id, data)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.delete("/items/{item_id}", response_model=ItemInDB)
async def delete_item(item_id: str):
    item = await service.delete_item(item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item
