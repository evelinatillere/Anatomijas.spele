

# pip install "fastapi[standard]"
# python3 -m pip install "fastapi[standard]"
# python -m pip install "fastapi[standard]"
from fastapi import FastAPI
app = FastAPI()
@app.get("/")
async def root():
    return {"message": "Hello World"}

# lai palaistu:
# fastapi dev API_fast.py


