Mini LinkedIn Platform 🧑‍💼🌐
A minimal social networking platform built with the MERN stack that allows users to register/login, create and view posts, connect with other users, and manage profiles—similar to a basic version of LinkedIn.


📌 Features
User Authentication (Email-based with OTP)

JWT-based Login

User Profiles (Name, Email, Bio)

Public Post Feed (Create, Edit, Delete, View)

Suggested Connections & Network List

Profile Page with user’s posts

Responsive Layout using MUI

Search Posts by Content

🛠 Tech Stack
Frontend

React + Vite

React Router DOM

Material-UI (MUI)

Axios

Backend

Node.js + Express

MongoDB (Mongoose)

JWT for Auth

Bcrypt for password hashing

Nodemailer for OTP Email

🖥️ Frontend Setup
bash
Copy
Edit
git clone https://github.com/mpremkumar9999/Mini_Linkedin_frontend.git
cd Mini_Linkedin_frontend
npm install
🔧 Environment Variables
Create a .env file in the root with:

bash
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api
🚀 Start Frontend
bash
Copy
Edit
npm run dev
⚙️ Backend Setup
bash
Copy
Edit
git clone https://github.com/mpremkumar9999/Mini_Linkedin_backend.git
cd Mini_Linkedin_backend
npm install
🔧 Environment Variables
Create a .env file with the following:

ini
Copy
Edit
PORT=5000
MONGO_URL=your_mongodb_connection_url
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
📧 Note: Use an app password if you're using Gmail with 2FA.

🚀 Start Backend
bash
Copy
Edit
npm run dev
🧪 Test the App
Start backend (localhost:5000)

Start frontend (localhost:5173)

Register a new user with email OTP verification

Start using your Mini LinkedIn: create posts, visit profiles, explore the network!

