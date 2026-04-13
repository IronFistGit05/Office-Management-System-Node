# 🏢 Office Management System (Node.js + Express + MongoDB)

## 📌 Project Overview

The ****Office Management System**** is a RESTful web application built using ****Node.js, Express, MongoDB, and EJS****. It allows users to manage employees and departments within an organization.

### 🔑 Key Features:

-   👨‍💼 Employee CRUD (Create, Read, Update, Delete)
-   🏢 Department management
-   🔗 Employee–Department relationship
-   👥 Supervisor assignment (self-referencing employees)
-   🔍 Search employees by name
-   📄 Pagination for employee listing
-   🌍 Dynamic Country → State → City dropdown (External API integration)
-   🎨 Clean UI using Bootstrap

## 🌐 Live Deployment

🚀 ****Live Application:****  
👉 [https://office-management-system-node.onrender.com/](https://office-management-system-node.onrender.com/)

📌 Example Routes:

-   Employees: [https://office-management-system-node.onrender.com/employees](https://office-management-system-node.onrender.com/employees)
-   Departments: [https://office-management-system-node.onrender.com/departments](https://office-management-system-node.onrender.com/departments)

> ⚠️ Note: The app may take a few seconds to load initially (Render free tier spins down inactive services).

## ⚙️ Installation & Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/your-username/office-management-system.git  
cd office-management-system  

### 2️⃣ Install Dependencies

npm install  

### 3️⃣ Setup Environment Variables

Create a `.env` file in root directory:

MONGO\_URI=your\_mongodb\_atlas\_connection\_string  

### 4️⃣ Run the Application

#### Development Mode:

npm run dev  

#### Production Mode:

npm start  

### 5️⃣ Open in Browser

http://localhost:3000  

## 📡 API Documentation

### 👨‍💼 Employee Routes

| Method | Endpoint            | Description                                  |
| ------ | ------------------- | -------------------------------------------- |
| GET    | /employees          | Get all employees (with search & pagination) |
| GET    | /employees/new      | Render create employee form                  |
| POST   | /employees          | Create a new employee                        |
| GET    | /employees/:id/edit | Render edit employee form                    |
| PUT    | /employees/:id      | Update employee                              |
| DELETE | /employees/:id      | Delete employee                              |

### 🏢 Department Routes

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | /departments     | Get all departments           |
| GET    | /departments/new | Render create department form |
| POST   | /departments     | Create new department         |

## 🌍 External API Used

-   Country-State-City Data:  
    [https://countriesnow.space/api/v0.1/](https://countriesnow.space/api/v0.1/)

## 🛠 Tech Stack

-   Backend: Node.js, Express.js
-   Database: MongoDB (Mongoose ODM)
-   Frontend: EJS, Bootstrap
-   API Integration: CountriesNow API

## 🚀 Future Enhancements (Optional)

-   JWT Authentication (Admin login)
-   Dashboard analytics
-   Advanced filtering & sorting
-   Frontend upgrade (React/Vue)

## 📌 Author

Developed as part of an academic assignment.
