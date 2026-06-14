from sqlalchemy import Column, Integer, String, TIMESTAMP, func
from pydantic import BaseModel, EmailStr
from database import Base

# SQLAlchemy model - maps to the subscribers table
class Subscriber(Base):
    __tablename__ = "subscribers"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())


# Pydantic schema - validates incoming request body
class SubscriberCreate(BaseModel):
    name: str
    email: EmailStr