import os
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, SessionLocal
import models
from passlib.context import CryptContext
from jose import JWTError, jwt
from datetime import datetime, timedelta
from typing import Optional

# Additional imports for ML model endpoint
import joblib
import numpy as np

# Additional imports for chatbot endpoint
from google import genai
from google.genai import types

# Calculate the base directory for the model files.
# This navigates two levels up from the backend folder to Desktop,
# then goes into the Model/Model folder.
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "Model", "Model"))

# Load ML model and scaler
rf_model = joblib.load(os.path.join(BASE_DIR, "heart_disease_model.pkl"))
scaler = joblib.load(os.path.join(BASE_DIR, "scaler.pkl"))

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT settings
SECRET_KEY = "your-secret-key-here"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=15))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@app.post("/signup")
async def signup(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.username == form_data.username).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    
    hashed_password = pwd_context.hash(form_data.password)
    new_user = models.User(username=form_data.username, hashed_password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User created successfully"}

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.username == form_data.username).first()
    if not user or not pwd_context.verify(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/predict")
async def predict(data: dict):
    try:
        if not data or "features" not in data:
            raise HTTPException(status_code=400, detail="Invalid input format. 'features' key is required")
        
        input_data = np.array(data["features"]).reshape(1, -1)
        
        if input_data.shape[1] != 20:
            raise HTTPException(status_code=400, detail=f"Expected 20 features, got {input_data.shape[1]}")
        
        scaled_data = scaler.transform(input_data)
        prediction = rf_model.predict(scaled_data)
        probability = rf_model.predict_proba(scaled_data)[0][1]
        
        return {
            "prediction": int(prediction[0]),
            "probability": float(probability),
            "status": "success"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/chatbot-response")
async def chatbot_response(user_input: str):
    try:
        client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))
        model = "gemini-2.0-flash"
        contents = [
            types.Content(role="user", parts=[types.Part.from_text(text=user_input)]),
            types.Content(role="model", parts=[types.Part.from_text(text="Hi there! I'm excited to be your heart health instructor. I'm here to help you understand more about keeping your heart healthy. To get started, what are you most interested in learning about today? For example, are you curious about: * Understanding Heart Disease: What it is, the different types, and risk factors? * Healthy Eating for Your Heart: What foods to eat, and what to limit? * Exercise and Physical Activity: How much do you need, and what kind is best? * Managing Stress: Techniques to reduce stress and its impact on your heart. * Understanding Your Numbers: What do blood pressure, cholesterol, and blood sugar mean? * Making Lifestyle Changes: How to make small, sustainable changes for better heart health? Just let me know what's on your mind, and we'll go from there! I'm here to provide information, answer your questions, and help you develop a personalized plan for a healthier heart.")]),
            types.Content(role="user", parts=[types.Part.from_text(text="INSERT_INPUT_HERE")]),
        ]
        generate_content_config = types.GenerateContentConfig(
            temperature=1,
            top_p=0.95,
            top_k=40,
            max_output_tokens=8192,
            response_mime_type="text/plain",
            system_instruction=[types.Part.from_text(text="heart health instructor")],
        )

        response_text = ""
        for chunk in client.models.generate_content_stream(
            model=model,
            contents=contents,
            config=generate_content_config,
        ):
            response_text += chunk.text

        return {"response": response_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)