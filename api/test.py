from requests import get, post

print(
    post(
        "http://127.0.0.1:5000/table.get", json=dict(user_id=1, quarter=2, year=2021)
    ).text
)
