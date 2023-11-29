from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import timedelta
from utils import authenticate_user, create_access_token
from fastapi.middleware.cors import CORSMiddleware


class User(BaseModel):
    username: str
    password: str


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.post("/auth/token")
async def generate_token(user: User):
    db_user = authenticate_user(user.username, user.password)

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    token_data = {"sub": user.username}
    token_expires = timedelta(minutes=60)
    token = create_access_token(token_data, expires_delta=token_expires)
    return {"token": token}


@app.get("/auth/token")
async def generate_free_access_token():
    token_expires = timedelta(minutes=60)
    token = create_access_token({"user_id": 0}, expires_delta=token_expires)
    return {"token": token}
