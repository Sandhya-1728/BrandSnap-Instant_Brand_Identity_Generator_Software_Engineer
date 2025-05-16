from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.core.config import settings
from app.api.routes import api_router
from app.core.celery_app import celery_app

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="BrandSnap - Instant Brand Identity Generator API",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router, prefix="/api")

@app.get("/")
async def root():
    return JSONResponse(
        content={
            "message": "Welcome to BrandSnap API",
            "version": settings.VERSION,
            "status": "operational"
        }
    )

@app.get("/health")
async def health_check():
    return JSONResponse(
        content={
            "status": "healthy",
            "celery": celery_app.control.inspect().active()
        }
    ) 