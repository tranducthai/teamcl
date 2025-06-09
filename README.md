# Kanbask - Project Management System

## Project Overview

Kanbask is a collaborative project management platform designed to help individuals and teams communicate, coordinate, and track work progress effectively. It offers features like task management, Kanban boards, group chats, and member management to support smooth teamwork.

---

## Key Features

### 1. Communication & Collaboration
- **One-on-One Chat:** Direct messaging between members.
- **Team Chat:** Group chat for entire teams.
- **Project Chat:** Dedicated chat rooms for each project.
- **Notification System:** Real-time notifications for important updates.
- **Media Sharing:** Share images, videos, and files in chat.
- **Message Search:** Search through chat messages.

### 2. Project & Task Management
- **Task Management:** Create, assign, and track tasks.
- **Kanban Board:** Visualize and manage tasks on a Kanban board.
- **Calendar View:** View task schedules by day or month.
- **Task Commenting:** Comment directly on tasks.
- **Task Searching:** Search tasks by name, status, or assignee.
- **Log Tracking:** Track project activity and edit history.
- **Dashboard:** Project overview and task completion statistics.

### 3. User & Team Management
- **User Profile:** View and edit personal information.
- **Team Management:** Manage team members and permissions.
- **Project Members Management:** Assign members to projects.

### 4. File & Documentation
- **Docs Management:** Create and organize project documents.
- **File Upload/Download:** Upload and download project-related files.

---

## Tech Stack

| Component         | Technology                         |
|-------------------|----------------------------------|
| Frontend          | Next.js (React Framework), Tailwind CSS |
| Backend           | Express.js                       |
| Database          | NeonDB (Serverless Postgres)     |
| Authentication    | JWT                             |
| Real-time         | Socket.IO                       |
| Containerization  | Docker                          |
| Deployment        | Contabo, GitLab                 |
| Version Control   | Git, GitHub                    |

---

## Getting Started with Docker

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) installed

## Project Structure

kanbask/
├── client/ # Frontend app (Next.js)
├── server/ # Backend app (Express.js)
├── docker-compose.yml
└── README.md

yaml
Sao chép
Chỉnh sửa

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kanbask.git
cd kanbask
Build and start the containers:

bash
Sao chép
Chỉnh sửa
docker-compose up --build
Access the applications in your browser:

Frontend (Client): http://localhost:3000

Backend (API): http://localhost:8080

To stop the containers, press Ctrl+C in the terminal, then run:

bash
Sao chép
Chỉnh sửa
docker-compose down
css
Sao chép
Chỉnh sửa


