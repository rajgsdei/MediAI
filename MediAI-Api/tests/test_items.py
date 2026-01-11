import pytest
from httpx import AsyncClient
from app.main import app

@pytest.mark.asyncio
async def test_list_items_empty():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        r = await ac.get("/api/v1/items")
    assert r.status_code == 200
    assert isinstance(r.json(), list)
