# Task and User Management Backend API

A simple backend application built with Node.js and the Express framework. It uses Sequelize as an ORM to interact with a SQLite database for managing users and their assigned tasks.

## Features

-   **User Management:** Create, register, list, and delete users.
-   **Task Management:** Create, list, and delete tasks associated with users.
-   **Pagination:** Supports paginated fetching for tasks.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) installed
-   npm (included with Node.js)

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate into the project directory:
    ```bash
    cd backend-frontend
    ```
3.  Install the required dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the server, run the following command:

```bash
npm start
```

The server will start on `http://localhost:3000`. It uses `nodemon` for development, which automatically restarts the server when code changes are detected.

## API Endpoints

### Root

-   **`GET /`**
    -   A simple welcome message to verify that the server is running.
    -   **Success Response (200):** `{ "message": "The server is running successfully!" }`

### Users (`/users`)

-   **`POST /users/register`**
    -   Registers a new user.
    -   **Request Body:**
        ```json
        {
          "email": "test@example.com",
          "name": "Test User"
        }
        ```
    -   **Success Response (201):** Returns the created user object.

-   **`GET /users`**
    -   Retrieves a list of all users.
    -   **Success Response (200):** Returns an array of user objects.

-   **`DELETE /users/:id`**
    -   Deletes a user by their `id`.
    -   **Success Response (200):** Returns a confirmation message.

### Tasks (`/tasks`)

-   **`POST /tasks`**
    -   Creates a new task. The `userId` must correspond to an existing user.
    -   **Request Body:**
        ```json
        {
          "title": "Buy groceries",
          "description": "Milk, bread, eggs",
          "userId": 1
        }
        ```
    -   **Success Response (201):** Returns the created task object.

-   **`GET /tasks`**
    -   Retrieves a list of all tasks, including the associated user for each task.
    -   **Success Response (200):** Returns an array of task objects with nested `User` objects.

-   **`GET /tasks/page/:page`**
    -   Retrieves a paginated list of tasks (20 per page).
    -   **Success Response (200):** Returns an array of task objects for the specified page.

-   **`DELETE /tasks/:id`**
    -   Deletes a task by its `id`.
    -   **Success Response (200):** Returns a confirmation message.
