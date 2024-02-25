from fastapi import FastAPI
from pydantic import BaseModel
from string_to_morsecode import morseCode as encode
from morsecode_to_string import morse_to_text as decode

app = FastAPI()

class Data(BaseModel):
    text: str

@app.post("/create-morse")
async def create_morse(data: Data):
    return {"morse_code": encode(data.text)}

@app.post("/create-text")
async def create_text(data: Data):
    return {"decoded_string": decode(data.text)}    
