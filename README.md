🚀 Mini LinkedIn Platform 🧑‍💼🌐
A minimal social networking platform built with the MERN stack that allows users to register/login with OTP, create and view posts, manage their profiles, and connect with other users — similar to a basic version of LinkedIn.

📌 Features
✅ Email-based Registration with OTP

🔐 JWT-based Authentication

👤 User Profiles (Name, Email, Bio)

📝 Public Post Feed (Create, Edit, Delete, View)

🤝 Suggested Connections & Network List

🔍 Search Posts by Content

🧑‍💻 View Other Users' Profiles and Posts

📱 Responsive UI using Material UI (MUI)

🛠 Tech Stack
Frontend
React + Vite

React Router DOM

Material-UI (MUI)

Axios

Backend
Node.js + Express

MongoDB (Mongoose)

JWT (Authentication)

Bcrypt (Password Hashing)

Nodemailer (OTP Email Verification)

🖥️ Frontend Setup
🔁 Clone and Install
bash
Copy
Edit
git clone https://github.com/mpremkumar9999/Mini_Linkedin_frontend.git


cd Mini_Linkedin_frontend
npm install


🔧 Create .env File
env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api
🚀 Run the Frontend
bash
Copy
Edit
npm run dev
The frontend will be available at: http://localhost:5173

⚙️ Backend Setup
🔁 Clone and Install
bash
Copy

Edit
git clone https://github.com/mpremkumar9999/Mini_Linkedin_backend.git

cd Mini_Linkedin_backend
npm install


🔧 Create .env File
env
Copy
Edit
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
📧 Note: Use an App Password if your Gmail account has 2-Step Verification enabled.

🚀 Run the Backend
bash
Copy
Edit
npm run dev
The backend server will run on: http://localhost:5000

🧪 Testing the App
Start Backend: http://localhost:5000

Start Frontend: http://localhost:5173

Register with your email using OTP verification

Login, create posts, visit profiles, and explore the community!
