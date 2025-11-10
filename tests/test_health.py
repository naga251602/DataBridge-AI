from backend.main import app

def test_health_route():
    client = app.test_client()
    r = client.get("/api/health")
    assert r.status_code == 200
    data = r.get_json()
    assert data["status"] == "ok"
    assert "Aistora" in data["service"]
