# URL Shortener - AFFORDMED Evaluation

A full-stack URL shortener built with Node.js and React for the AFFORDMED campus hiring evaluation.

## Features

- Create short URLs with custom codes
- Set validity periods for links
- Track click statistics
- Responsive web interface
- RESTful API backend

## Tech Stack

**Backend:**
- Node.js + Express
- In-memory data storage
- Custom logging middleware

**Frontend:**
- React
- Material UI
- Axios for API calls

## Setup

### Backend
```bash
cd affordmed-url-shortener/backend
npm install
npm start
```
Server runs on http://localhost:8080

### Frontend
```bash
cd affordmed-url-shortener/frontend
npm install
npm start
```
React app runs on http://localhost:3000

## API Endpoints

- `POST /shorturls` - Create short URL
- `GET /shorturls/:code` - Get statistics  
- `GET /:code` - Redirect to original URL

## Usage

1. Open http://localhost:3000
2. Enter URLs to shorten (up to 5 at once)
3. Set validity periods and custom codes
4. View statistics and click data

## Student Details

**Name:** Deepak Prajapati  
**Roll No:** 2213102042  
**Email:** deepak.22scse1012160@galgotiasuniversity.edu.in  
**GitHub:** deepakstwt 