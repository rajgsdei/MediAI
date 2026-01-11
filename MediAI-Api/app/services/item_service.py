from typing import List, Optional
from app.db.client import db
from app.models.item_model import ItemCreate, ItemUpdate, ItemInDB
from bson import ObjectId

class ItemService:
    collection_name = "items"

    async def create_item(self, item: ItemCreate) -> ItemInDB:
        doc = item.dict()
        res = await db[self.collection_name].insert_one(doc)
        doc["id"] = str(res.inserted_id)
        return ItemInDB(**doc)

    async def list_items(self) -> List[ItemInDB]:
        cursor = db[self.collection_name].find()
        items = []
        async for doc in cursor:
            doc["id"] = str(doc.pop("_id"))
            items.append(ItemInDB(**doc))
        return items

    async def get_item(self, item_id: str) -> Optional[ItemInDB]:
        doc = await db[self.collection_name].find_one({"_id": ObjectId(item_id)})
        if not doc:
            return None
        doc["id"] = str(doc.pop("_id"))
        return ItemInDB(**doc)

    async def update_item(self, item_id: str, data: ItemUpdate) -> Optional[ItemInDB]:
        update_doc = {k: v for k, v in data.dict().items() if v is not None}
        if not update_doc:
            return await self.get_item(item_id)
        res = await db[self.collection_name].find_one_and_update(
            {"_id": ObjectId(item_id)}, {"$set": update_doc}, return_document=True
        )
        if not res:
            return None
        res["id"] = str(res.pop("_id"))
        return ItemInDB(**res)

    async def delete_item(self, item_id: str) -> Optional[ItemInDB]:
        doc = await db[self.collection_name].find_one_and_delete({"_id": ObjectId(item_id)})
        if not doc:
            return None
        doc["id"] = str(doc.pop("_id"))
        return ItemInDB(**doc)
