from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr, validator
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Harshil's Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str


# Contact Form Models
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = Field(default="pending")
    ip_address: Optional[str] = None

    @validator('name', 'subject', 'message')
    def strip_whitespace(cls, v):
        return v.strip() if isinstance(v, str) else v

class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)

    @validator('name', 'subject', 'message')
    def strip_whitespace(cls, v):
        return v.strip() if isinstance(v, str) else v

class ContactSubmissionsResponse(BaseModel):
    total: int
    submissions: List[ContactSubmission]

# Routes
@api_router.get("/")
async def root():
    return {
        "message": "Welcome to Harshil Patel's Portfolio API",
        "version": "1.0.0",
        "endpoints": {
            "contact": "/api/contact",
            "submissions": "/api/contact/submissions"
        }
    }

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactSubmission, status_code=201)
async def submit_contact_form(
    submission: ContactSubmissionCreate,
    request: Request
):
    """
    Submit a contact form message.
    
    - **name**: Full name of the sender
    - **email**: Valid email address
    - **subject**: Subject of the message
    - **message**: Detailed message (min 10 characters)
    """
    try:
        # Get client IP address
        client_ip = request.client.host if request.client else "unknown"
        
        # Create submission object
        submission_data = submission.model_dump()
        contact_obj = ContactSubmission(**submission_data, ip_address=client_ip)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        # Insert into database
        result = await db.contact_submissions.insert_one(doc)
        
        if result.inserted_id:
            logger.info(f"Contact form submitted: {submission.email} - {submission.subject}")
            return contact_obj
        else:
            raise HTTPException(status_code=500, detail="Failed to save submission")
            
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while processing your request")


@api_router.get("/contact/submissions", response_model=ContactSubmissionsResponse)
async def get_contact_submissions(
    limit: int = 50,
    skip: int = 0,
    status: Optional[str] = None
):
    """
    Get all contact form submissions (Admin endpoint).
    
    - **limit**: Maximum number of submissions to return (default: 50, max: 100)
    - **skip**: Number of submissions to skip for pagination
    - **status**: Filter by status (pending, read, replied)
    """
    try:
        # Validate limit
        if limit > 100:
            limit = 100
            
        # Build query
        query = {}
        if status:
            if status not in ["pending", "read", "replied"]:
                raise HTTPException(status_code=400, detail="Invalid status filter")
            query["status"] = status
        
        # Get total count
        total = await db.contact_submissions.count_documents(query)
        
        # Get submissions (exclude MongoDB's _id field)
        cursor = db.contact_submissions.find(query, {"_id": 0}).sort("timestamp", -1).skip(skip).limit(limit)
        submissions = await cursor.to_list(length=limit)
        
        # Convert ISO string timestamps back to datetime objects
        for sub in submissions:
            if isinstance(sub['timestamp'], str):
                sub['timestamp'] = datetime.fromisoformat(sub['timestamp'])
        
        return ContactSubmissionsResponse(
            total=total,
            submissions=submissions
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while fetching submissions")


@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        # Test database connection
        await db.command("ping")
        return {
            "status": "healthy",
            "database": "connected",
            "timestamp": datetime.now(timezone.utc)
        }
    except Exception as e:
        logger.error(f"Health check failed: {str(e)}")
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e),
            "timestamp": datetime.now(timezone.utc)
        }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()