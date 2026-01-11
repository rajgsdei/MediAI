# MediAI API

A minimal FastAPI + MongoDB (motor) project scaffold.

Getting started

1. Create a virtual environment (outside the project tree) and activate it:

```powershell
python -m venv ../.venv-midiaiproj
../.venv-midiaiproj/Scripts/Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run MongoDB (Docker compose):

```powershell
docker compose up -d
```

4. Start the app:

```powershell
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API:
- `GET /api/v1/items` — list items
- `POST /api/v1/items` — create item
- `GET /api/v1/items/{item_id}` — get item
- `PUT /api/v1/items/{item_id}` — update item
- `DELETE /api/v1/items/{item_id}` — delete item

Environment variables: see `.env.example`.
