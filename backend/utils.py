import jwt
from datetime import datetime, timedelta
from sampledb import sample_db
from settings import settings


def authenticate_user(username: str, password: str):
    user = sample_db.users_db.get(username)
    if not user:
        return False
    if user["password"] != password:
        return False
    return user


def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET, algorithm="HS256")
    return encoded_jwt
