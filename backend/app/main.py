from fastapi import FastAPI

app = FastAPI(title="MotorMarket API")


@app.get("/")
def root():
    return {"message": "MotorMarket API is running"}