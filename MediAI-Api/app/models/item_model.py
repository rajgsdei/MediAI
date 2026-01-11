from pydantic import BaseModel, Field
from typing import Optional

class ItemBase(BaseModel):
    name: str = Field(..., example="Example Item")
    description: Optional[str] = Field(None, example="A description")

class ItemCreate(ItemBase):
    pass

class ItemUpdate(BaseModel):
    name: Optional[str]
    description: Optional[str]

class ItemInDB(ItemBase):
    id: str

    class Config:
        orm_mode = True
