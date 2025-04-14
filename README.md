# Task Management App

### _A Full-Stack Application with Authentication & Task Management_

---

## 📜 **Project Overview**

Welcome to the **Task Management App**! This is a full-stack application built to help users manage their tasks with complete authentication and task management functionality. Whether you're planning your day or tracking your progress, this app gives you a simple yet powerful tool to manage your personal tasks, all while ensuring your data remains secure.

This app allows users to:
- Register and log in using JWT-based authentication.
- Create, view, edit, and delete their personal tasks.
- View task details and track progress in a clean and user-friendly interface.

---

## 🔧 **Tech Stack**

### **Backend:**
- **Node.js**
- **MongoDB** - For data storage
- **JWT Authentication** - For secure login and task management
- **bcrypt** - For securely hashing passwords

### **Frontend:**
- **React** - For building the frontend
- **TailwindCSS** - For stylish and responsive UI
- **Axios** - For API communication

### **Deployment:**
https://just-do-it-lime-chi.vercel.app/

---

## 📝 **Features**

- **User Authentication:**
  - **Register**: Users can create an account by providing their name, email, and password.
  - **Login**: After registration, users can log in securely to manage their tasks.
  - **JWT Authentication**: Access to tasks is protected using JWT tokens.

- **Task Management:**
  - **Create Tasks**: Add new tasks with a title, description, and status.
  - **View Tasks**: List all tasks related to the authenticated user.
  - **Edit Tasks**: Update task details (title, description, and status).
  - **Delete Tasks**: Remove tasks that are no longer needed.

- **Secure and Clean Code:**
  - Passwords are stored securely using **bcrypt**.
  - All APIs are protected to ensure that users can only manage their own tasks.
  - Errors and validation are handled gracefully.

---

## ⚙️ **Backend API Endpoints**

- **POST** `/register`: Register a new user.
- **POST** `/login`: Log in and receive a JWT token.
- **GET** `/tasks`: Retrieve all tasks for the authenticated user.
- **POST** `/tasks`: Create a new task.
- **PUT** `/tasks/{task_id}`: Edit an existing task.
- **DELETE** `/tasks/{task_id}`: Delete a task.

---

