# AFFORDMED Campus Hiring Evaluation - URL Shortener

## Project Overview
A full-stack URL Shortener application built for AFFORDMED Campus Hiring Evaluation within 3-hour time limit.

## 🚀 Features
- **Backend Microservice** with RESTful APIs
- **React Frontend** with Material UI
- **Custom Shortcodes** support
- **Validity Periods** for URLs
- **Click Analytics** with detailed tracking
- **Mandatory Logging Middleware** (file-based)
- **Responsive Design** for mobile/desktop

## 🏗️ Architecture
```
affordmed-url-shortener/
├── backend/           # Node.js/Express API
├── frontend/          # React application
├── Full-Stack.md      # Requirements document
└── Pre-Test-Setup.md  # Setup instructions
```

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **In-memory storage** for URL data
- **Custom logging middleware** (mandatory requirement)
- **CORS** enabled for frontend integration
- **nanoid** for unique shortcode generation

### Frontend  
- **React** with React Router
- **Material UI** for styling
- **Axios** for API calls
- **Responsive design** for all devices

## 📡 API Endpoints

### 1. Create Short URL
```http
POST http://localhost:8080/shorturls
Content-Type: application/json

{
  "url": "https://example.com",
  "validity": 30,
  "shortcode": "custom123"
}
```

### 2. Get URL Statistics
```http
GET http://localhost:8080/shorturls/:shortcode
```

### 3. Redirect to Original URL
```http
GET http://localhost:8080/:shortcode
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
```bash
cd affordmed-url-shortener/backend
npm install
npm start
# Server runs on http://localhost:8080
```

### Frontend Setup
```bash
cd affordmed-url-shortener/frontend
npm install
npm start
# React app runs on http://localhost:3000
```

## 🔧 Usage

1. **Create URLs**: Use the frontend to create up to 5 URLs simultaneously
2. **Custom Options**: Set validity periods and custom shortcodes
3. **Analytics**: View detailed click statistics
4. **Mobile Ready**: Responsive design works on all devices

## 📱 Screenshots

### Desktop View
- URL Shortener Page: Clean Material UI interface
- Statistics Page: Detailed analytics with click data

### Mobile View  
- Responsive design optimized for mobile devices
- Touch-friendly interface

### API Testing
- All endpoints tested and documented
- Redirect functionality verified

## ✅ Requirements Met

- ✅ **Microservice Architecture**: Single backend service with defined APIs
- ✅ **Mandatory Logging**: Custom file-based logging middleware
- ✅ **React Frontend**: Material UI styled responsive application
- ✅ **URL Shortening**: Custom shortcodes and validity periods
- ✅ **Analytics**: Click tracking with timestamps and referrer data
- ✅ **Error Handling**: Robust error handling throughout
- ✅ **Production Quality**: Clean code with proper structure

## 🔗 Live URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Example Short URL**: http://localhost:8080/affordmed

## 👨‍💻 Developer

**Deepak Prajapati**
- Email: deepak.22scse1012160@galgotiasuniversity.edu.in
- Roll No: 2213102042
- GitHub: deepakstwt

## 📝 Evaluation Details

- **Time Limit**: 3 Hours ✅
- **Framework**: Express.js + React ✅
- **Styling**: Material UI ✅
- **Logging**: Custom middleware ✅
- **Responsive**: Mobile/Desktop ✅

---
*Built for AFFORDMED Campus Hiring Evaluation* 