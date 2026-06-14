# Subscription Management Application

A full-stack web application that allows users to subscribe using their name and email address. Subscriber information is stored in a MySQL database, and a confirmation email is sent through Mailtrap Email Sandbox for testing purposes.

This project demonstrates frontend form validation, REST API development, database integration, email delivery, and full-stack communication between Angular and FastAPI.

---

## Features

* User subscription form
* Angular Reactive Forms validation
* FastAPI REST API
* MySQL database integration
* Confirmation email delivery using SMTP
* Mailtrap Email Sandbox integration
* Duplicate email detection
* Global loading spinner using HTTP interceptor
* Responsive Bootstrap UI
* Backend request validation with Pydantic

---

## Tech Stack

### Frontend

* Angular 21
* TypeScript
* Reactive Forms
* RxJS
* Bootstrap 5

### Backend

* FastAPI
* SQLAlchemy
* Pydantic
* Python

### Database

* MySQL
* PyMySQL

### Email Service

* Mailtrap Email Sandbox
* SMTP

---

## Application Workflow

1. User enters their name and email address.
2. Angular validates the form before submission.
3. The frontend sends a POST request to the FastAPI backend.
4. FastAPI validates the incoming request using Pydantic.
5. The system checks whether the email already exists.
6. If the email is new:

    * Subscriber information is saved to MySQL.
    * A confirmation email is sent via Mailtrap.
7. If the email already exists:

    * The user receives a friendly notification indicating they are already subscribed.
8. The frontend displays the appropriate success or information message.

---

## Architecture

Frontend (Angular)
↓
REST API (FastAPI)
↓
MySQL Database
↓
Mailtrap SMTP

---

## API Endpoint

### Subscribe User

**POST** `/subscribe`

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

Success Response:

```json
{
  "message": "Subscription successful",
  "id": 1
}
```

Already Subscribed Response:

```json
{
  "detail": "✅ This email is already subscribed to our updates."
}
```

---

## Validation Strategy

### Frontend Validation

* Required field validation
* Email format validation
* Name length validation
* Disabled submit button when form is invalid

### Backend Validation

* Pydantic request validation
* Email format verification using EmailStr
* Duplicate email detection before database insertion

---

## Project Structure

### Frontend

```text
src/
└── app/
    ├── subscribe-form/
    ├── services/
    │   └── subscribe.service.ts
    ├── interceptors/
    │   └── loading.interceptor.ts
    └── shared/
        └── loading.service.ts
```

### Backend

```text
backend/
├── main.py
├── database.py
├── models.py
├── email_utils.py
├── .env
└── requirements.txt
```

---

## Key Technical Decisions

### Why Angular?

Angular provides a structured architecture, dependency injection, strong TypeScript support, and powerful Reactive Forms that simplify form validation and state management.

### Why FastAPI?

FastAPI offers automatic request validation, excellent performance, asynchronous support, and automatic API documentation generation through Swagger UI.

### Why SQLAlchemy?

SQLAlchemy simplifies database operations through ORM models while helping prevent SQL injection through parameterized queries.

### Why Mailtrap?

Mailtrap allows safe email testing without sending messages to real users, making it ideal for development and QA environments.

---

## Future Improvements

* Database-level unique email constraints
* Background email processing using FastAPI BackgroundTasks
* Email verification workflow
* Unsubscribe functionality
* API rate limiting
* Docker containerization
* Unit and integration testing
* Alembic database migrations
* Logging and monitoring

---

## Running the Application

### Backend

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

### Frontend

```bash
npm install
ng serve
```

Frontend runs on:

```text
http://localhost:4200
```

---

## Author

MD Oshama

Full Stack Developer

Technologies: Angular, FastAPI, Spring Boot, Java, Python, SQL, REST APIs
