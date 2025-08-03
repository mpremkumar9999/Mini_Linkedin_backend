🧑‍💼🌐 Mini LinkedIn Platform
A minimal social networking platform built with the MERN stack that allows users to register/login with OTP, create and view posts, connect with other users, and manage profiles — similar to a basic version of LinkedIn.

📌 Features
✅ User Authentication (Email-based with OTP)

🔐 JWT-based Login

👤 User Profiles (Name, Email, Bio)

📝 Public Post Feed (Create, Edit, Delete, View)

🤝 Suggested Connections & Network List

🧑‍💻 Profile Page with user’s posts

🔍 Search Posts by content

📱 Responsive Layout using MUI

🛠 Tech Stack
Frontend
React + Vite

React Router DOM

Material UI (MUI)

Axios

Backend
Node.js + Express

MongoDB (Mongoose)

JWT for Auth

Bcrypt for password hashing

Nodemailer for OTP Emails

🖥️ Frontend Setup
🔁 Step 1: Clone the Repository
bash
Copy
Edit
git clone https://github.com/mpremkumar9999/Mini_Linkedin_frontend.git
📂 Step 2: Navigate to the Frontend Directory
bash
Copy
Edit
cd Mini_Linkedin_frontend
📦 Step 3: Install Dependencies
bash
Copy
Edit
npm install
⚙️ Step 4: Create a .env file
In the root folder, create a .env file and add:

env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api
🚀 Step 5: Start the Frontend Server
bash
Copy
Edit
npm run dev
Your frontend will be available at: http://localhost:5173

⚙️ Backend Setup
🔁 Step 1: Clone the Repository
bash
Copy
Edit
git clone https://github.com/mpremkumar9999/Mini_Linkedin_backend.git
📂 Step 2: Navigate to the Backend Directory
bash
Copy
Edit
cd Mini_Linkedin_backend
📦 Step 3: Install Dependencies
bash
Copy
Edit
npm install
⚙️ Step 4: Create a .env File
Create a .env file in the root directory and add the following:

env
Copy
Edit
PORT=5000
MONGO_URL=your_mongodb_connection_url
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
📧 Note: If using Gmail with 2FA, use an App Password.

🚀 Step 5: Start the Backend Server
bash
Copy
Edit
npm run dev
Your backend will be running at: http://localhost:5000

