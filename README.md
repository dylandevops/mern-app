# MERN Stack Quotes Application

This is a simple, three-tier MERN (MongoDB, Express.js, React.js, Node.js) stack application deployed using Docker and Docker Compose. The application allows users to view a list of quotes and add new ones, demonstrating a full-stack data flow.

## 🚀 Features

- **Frontend:** A responsive web interface built with React.js.
- **Backend:** A RESTful API built with Express.js and Node.js to handle data requests.
- **Database:** A MongoDB database for persistent storage of quotes.
- **Containerization:** The entire application is containerized using Docker, making it portable and easy to run in any environment.
- **Orchestration:** All three services are managed and networked together using Docker Compose.

## 🏛️ Architecture

The application follows a standard three-tier architecture:

- **Frontend:** Runs in a separate Docker container, served by an Nginx web server. It communicates with the backend API.
- **Backend:** Runs in its own Docker container, handling API requests and business logic.
- **Database:** A MongoDB instance running in its own container, managed by Docker Compose.

The services are networked together by Docker, allowing the backend to connect to the database using the service name `db`.

## 🛠️ Prerequisites

To run this application, you need to have the following installed on your system:

- **Docker:** A Docker Engine and CLI.
- **Docker Compose:** The `docker compose` plugin (V2).

## 🏃 Getting Started

Follow these simple steps to get the application up and running on your local machine.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/mern-app.git](https://github.com/your-username/mern-app.git)
    cd mern-app
    ```

2.  **Build and run the application:**
    From the root directory of the project, run the following command. This will build the Docker images for the frontend and backend, pull the MongoDB image, and start all three services.

    ```bash
    docker compose up --build
    ```

3.  **Access the application:**
    Once all the services are up and running, open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

    You should see the quotes application interface.

## 🧪 Testing the Application

- **View Quotes:** The homepage will display any quotes already saved in the database.
- **Add a New Quote:** Use the form at the bottom of the page to add a new quote. Enter the text and author, and click "Add Quote". The new quote will appear on the page, confirming that the frontend, backend, and database are all communicating correctly.

## 📁 Project Structure
mern-app/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── .gitignore
├── docker-compose.yml
└── README.md

## 💻 Technologies Used

-   **Frontend:** React.js, JavaScript
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB
-   **Containerization:** Docker
-   **Orchestration:** Docker Compose
