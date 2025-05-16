from celery import Celery
from app.core.config import settings

celery_app = Celery(
    "brandsnap",
    broker=f"redis://{settings.REDIS_HOST}:{settings.REDIS_PORT}/0",
    backend=f"redis://{settings.REDIS_HOST}:{settings.REDIS_PORT}/0",
    include=[
        "app.services.brand_generator",
        "app.services.image_generator",
        "app.services.document_generator"
    ]
)

celery_app.conf.update(
    task_serializer="json",
    accept_content=["json"],
    result_serializer="json",
    timezone="UTC",
    enable_utc=True,
    task_track_started=True,
    task_time_limit=3600,  # 1 hour
    worker_max_tasks_per_child=50,
    broker_connection_retry_on_startup=True
)

# Optional: Configure task routes
celery_app.conf.task_routes = {
    "app.services.brand_generator.*": {"queue": "brand_tasks"},
    "app.services.image_generator.*": {"queue": "image_tasks"},
    "app.services.document_generator.*": {"queue": "document_tasks"}
} 