from fastapi import FastAPI
from pydantic import BaseModel
from string_to_morsecode import morseCode as encode
from morsecode_to_string import morse_to_text as decode
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Data(BaseModel):
    text: str

@app.post("/create-morse")
async def create_morse(data: Data):
    return {"morse": encode(data.text)}

@app.post("/create-text")
async def create_text(data: Data):
    return {"text": decode(data.text)}    
