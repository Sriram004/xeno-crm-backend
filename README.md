# 📘 Xeno CRM Backend — Node.js + Express API

## 🚀 Overview
This is the backend server for the **Xeno CRM Internship Assignment 2025**. It powers APIs for:
- Customer ingestion
- Campaign creation & delivery simulation
- AI-powered message suggestions (OpenAI)
- Campaign logs

---

## 🧱 Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** (via Mongoose)
- **OpenAI API** for AI integration
- **dotenv** for environment variables

---

## 📁 Folder Structure
```
backend/
├── models/          # Mongoose schemas (Customer, Campaign, DeliveryLog)
├── routes/          # Express route files
├── server.js        # Main entry point
├── .env             # Environment configuration
└── package.json
```

---

## 🛠️ Setup Instructions

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Configure environment variables
Create a `.env` file with the following:
```
MONGO_URI=your_mongodb_uri
OPENAI_KEY=your_openai_api_key
```

### 3. Start the server
```bash
npm run dev     # If using nodemon
# OR
npm start       # If using node directly
```

Server will run on `http://localhost:5000`

---

## 📡 API Endpoints
### Customers
- `POST /api/customers` — Add customer
- `GET /api/customers` — List customers

### Campaigns
- `POST /api/campaigns` — Create campaign with condition & simulate delivery
- `GET /api/campai
