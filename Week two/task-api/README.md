# Task API

A simple RESTful CRUD API built with **Node.js** and **Express.js** for managing tasks.

This project was created as part of the **FlyRank Backend Internship – Week 2 Assignment A1**.

The API stores tasks in memory (no database), supports full CRUD operations, and is documented using **Swagger UI**.

---

## Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Input validation
- Proper HTTP status codes
- Swagger UI documentation

---

## Technologies Used

- Node.js
- Express.js
- Swagger UI Express
- OpenAPI 3.1

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project folder:

```bash
cd Task-API
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

The server will start on:

```
http://localhost:5000
```

Swagger UI:

```
http://localhost:5000/docs
```

---

## API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /tasks     | Get all tasks     |
| GET    | /tasks/:id | Get a task by ID  |
| POST   | /tasks     | Create a new task |
| PUT    | /tasks/:id | Update a task     |
| DELETE | /tasks/:id | Delete a task     |

---

## Example curl Request

```bash
curl -i -X POST http://localhost:5000/tasks \
-H "Content-Type: application/json" \
-d "{\"title\":\"Buy milk\"}"
```

Example response:

```http
HTTP/1.1 201 Created

{
  "message": "the task created successfully",
  "data": {
    "id": 4,
    "title": "Buy milk",
    "done": false
  }
}
```

---

## Swagger UI

Swagger documentation is available at:

```
http://localhost:5000/docs
```

![alt text](<Screenshot 2026-07-16 124234.png>)

Example:

## ![alt text](<Screenshot 2026-07-16 124248.png>)

## Project Structure

```
.
├── controller
├── Data
├── routes
├── app.js
├── index.js
├── openapi.json
├── package.json
└── README.md
```

---

## Notes

- Data is stored **in memory**.
- Restarting the server resets all tasks.
- No database is used in this assignment.

---
