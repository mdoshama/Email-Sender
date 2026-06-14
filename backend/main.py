from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import engine, get_db, Base
from models import Subscriber, SubscriberCreate
from email_utils import send_confirmation_email

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/subscribe")
def subscribe(subscriber: SubscriberCreate, db: Session = Depends(get_db)):

    # Check if email already exists
    existing_subscriber = (
        db.query(Subscriber)
        .filter(Subscriber.email == subscriber.email)
        .first()
    )

    if existing_subscriber:
        raise HTTPException(
            status_code=400,
            detail="🙌 Thanks! This email is already subscribed."
        )

    # Save new subscriber
    new_subscriber = Subscriber(
        name=subscriber.name,
        email=subscriber.email
    )

    db.add(new_subscriber)
    db.commit()
    db.refresh(new_subscriber)

    # Send confirmation email
    try:
        send_confirmation_email(
            subscriber.name,
            subscriber.email
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Email failed: {str(e)}"
        )

    return {
        "message": "Subscription successful",
        "id": new_subscriber.id
    }