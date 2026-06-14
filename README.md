# Subscription Management Application

## Overview

This project is a full-stack web application that allows users to subscribe by providing their name and email address. The application stores subscriber information in a MySQL database and sends a confirmation email through Mailtrap Email Sandbox for testing purposes.

The project demonstrates modern frontend and backend development practices using Angular, FastAPI, SQLAlchemy, MySQL, and SMTP integration.

---

## Features

* User subscription form with name and email fields
* Client-side validation using Angular Reactive Forms
* Backend request validation using Pydantic
* Persistent storage with MySQL
* Automated confirmation email delivery
* Global loading indicator during API requests
* Responsive UI built with Bootstrap
* RESTful API architecture
* Environment-based configuration management

---

## Technology Stack

### Frontend

* Angular 21 (Standalone Components)
* TypeScript
* Reactive Forms
* RxJS
* Bootstrap 5
* HTTP Interceptors

### Backend

* FastAPI
* SQLAlchemy ORM
* Pydantic
* Python
* SMTP (smtplib)

### Database

* MySQL
* PyMySQL Driver

### Email Testing

* Mailtrap Email Sandbox

---

## System Architecture

User → Angular Frontend → FastAPI Backend → MySQL Database

```
                                 ↘

                                 Mailtrap SMTP
```

### Workflow

1. User enters name and email.
2. Angular validates form inputs.
3. Frontend sends a POST request to the API.
4. FastAPI validates the request using Pydantic.
5. Subscriber information is saved to MySQL.
6. Confirmation email is generated and sent via Mailtrap.
7. API returns a success response.
8. Frontend displays confirmation and resets the form.

---

## Project Structure

### Frontend

src/

├── app/

│   ├── components/

│   │   └── subscribe-form/

│   ├── services/

│   │   └── subscribe.service.ts

│   ├── interceptors/

│   │   └── loading.interceptor.ts

│   └── shared/

│       └── loading.service.ts

### Backend

backend/

├── main.py

├── database.py

├── models.py

├── email_utils.py

├── .env

└── requirements.txt

---

## API Endpoint

### Subscribe User

POST /subscribe

Request:

```json
{
  "name": "Moh Noori",
  "email": "moh@scriptchain.com"
}
```

Response:

```json
{
  "message": "Subscription successful",
  "id": 1
}
```

---

## Validation Strategy

### Frontend Validation

* Required field validation
* Email format validation
* Disabled submit button for invalid forms

### Backend Validation

* Pydantic schema validation
* EmailStr email verification
* Request payload type checking

---

## Security Considerations

* Environment variables for sensitive credentials
* SQLAlchemy ORM prevents SQL injection
* Restricted CORS configuration
* Server-side input validation
* SMTP credentials stored outside source code

---

## Future Improvements

* Background email processing using Celery or FastAPI BackgroundTasks
* Duplicate email detection
* Email verification workflow
* Unsubscribe functionality
* API rate limiting
* Docker containerization
* Automated testing pipeline
* Alembic database migrations
* Monitoring and logging

---

## Key Technical Decisions

### Why Angular?

Angular provides a structured architecture, built-in dependency injection, reactive forms, and strong TypeScript support, making it suitable for scalable frontend applications.

### Why FastAPI?

FastAPI offers automatic validation through Pydantic, excellent performance, asynchronous support, and automatic API documentation generation.

### Why SQLAlchemy?

SQLAlchemy provides ORM capabilities that simplify database interactions, improve maintainability, and reduce risks associated with raw SQL queries.

### Why Mailtrap?

Mailtrap allows safe email testing in a sandbox environment without sending messages to real recipients during development.

---

## Author

MD Oshama

Full Stack Developer

Technologies: Angular, Spring Boot, FastAPI, Java, Python, SQL, REST APIs
