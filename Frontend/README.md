# MediAI Frontend (React)

This is a Vite + React scaffold that mimics parts of the `MediAI-SmartAssist` Django app.

Quick start:

```powershell
cd Frontend
npm install
npm run dev
```

Notes:
- The dev server proxies `/api/*` to `http://localhost:8000` by default (see `vite.config.js`).
- `src/api/mockApi.js` will fall back to local mock data if the Django backend is unreachable.

Next steps:
- Implement full UI for forms, lists, and auth flows.
- Integrate with Django REST endpoints and map serializers.
