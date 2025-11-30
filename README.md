Site is Live on : https://imagify2-wxtb.onrender.com/ 

A full-stack AI SaaS application that converts text into high-quality images using ClipDrop API, integrates credit-based generation, handles payments via Razorpay, supports user authentication, and provides a modern, smooth UI built with React + Tailwind.


🚀 Features
🔐 User Authentication

Register / Login with JWT

Protected routes

Persistent login using tokens

🖼️ AI Image Generation

Generate high-quality AI images using ClipDrop API

Prompt-based generation

Save generated output in UI

💳 Credit System

Each user gets credits

Generating images deducts credits

"Buy Credits" page to purchase more

Razorpay integrated for payments

💰 Razorpay Payments

Secure checkout

Auto-update user credits after successful payment

📦 Full SaaS Functionality

Token-based authentication

Payment flow

Credits logic

Usage tracking

🧱 MERN Stack

MongoDB → Database

Express → Backend API

React (Vite) → Frontend

Node.js → Server

Render → Deployment

🏗️ Tech Stack
Frontend

React (Vite)

Axios

Tailwind CSS

React Router

React Toastify

Backend

Node.js

Express.js

JWT Authentication

Mongoose (MongoDB)

ClipDrop API

Payments

Razorpay API

Deployment

Render (Frontend + Backend)

MongoDB Atlas

📁 Project Folder Structure
root/
│── client/        # React Frontend (Vite)
│── server/        # Node + Express Backend
│── README.md
│── package.json

🔧 Environment Variables

Create a .env inside server/:

MONGODB_URI=
JWT_SECRET=
CLIPDROP_API=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
CURRENCY=INR


For frontend (client/.env):

VITE_BACKEND_URL=https://your-backend.onrender.com

🚀 How to Run Locally
1. Clone the Repo
git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Install Dependencies
Backend
cd server
npm install

Frontend
cd ../client
npm install

3. Start the Project
Start Backend
cd server
npm start

Start Frontend
cd client
npm run dev
