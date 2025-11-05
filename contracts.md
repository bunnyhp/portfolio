# Portfolio Backend Integration Contracts

## Overview
This document outlines the API contracts and integration strategy for Harshil's Cybersecurity Portfolio.

## Current State
- **Frontend**: Fully functional with mock data in `/frontend/src/mockData.js`
- **Backend**: Basic FastAPI server with hello world endpoint
- **Database**: MongoDB connection configured

## Backend Implementation Plan

### 1. Contact Form Submission API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response** (Success - 201):
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "timestamp": "datetime",
  "status": "pending"
}
```

**Response** (Error - 400):
```json
{
  "detail": "Validation error message"
}
```

**MongoDB Collection**: `contact_submissions`

**Schema**:
- `id`: UUID (auto-generated)
- `name`: String (required)
- `email`: String (required, validated email format)
- `subject`: String (required)
- `message`: String (required)
- `timestamp`: DateTime (auto-generated)
- `status`: String (default: "pending", options: "pending", "read", "replied")
- `ip_address`: String (optional, for spam tracking)

---

### 2. Get Contact Submissions API (Admin)

**Endpoint**: `GET /api/contact/submissions`

**Query Parameters**:
- `limit`: int (default: 50, max: 100)
- `skip`: int (default: 0)
- `status`: string (optional filter: "pending", "read", "replied")

**Response** (200):
```json
{
  "total": 10,
  "submissions": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "subject": "string",
      "message": "string",
      "timestamp": "datetime",
      "status": "pending"
    }
  ]
}
```

---

## Frontend Integration Changes

### Files to Modify:
1. `/frontend/src/components/ContactSection.jsx`

### Changes Required:

#### ContactSection.jsx
**Current**: Mock submission with setTimeout
```javascript
// Mock submission
setTimeout(() => {
  setIsSubmitting(false);
  toast({ title: "Message Sent!", ... });
  setFormData({ name: '', email: '', subject: '', message: '' });
}, 1500);
```

**New**: Real API call
```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await axios.post(`${API}/contact`, formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: error.response?.data?.detail || "Failed to send message. Please try again.",
      variant: "destructive",
      duration: 5000,
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Implementation Checklist

### Backend Tasks:
- [x] Create MongoDB model for contact submissions
- [x] Implement POST /api/contact endpoint
- [x] Add email validation
- [x] Add rate limiting (optional enhancement)
- [x] Implement GET /api/contact/submissions endpoint
- [x] Add proper error handling and logging

### Frontend Tasks:
- [x] Update ContactSection.jsx to use real API
- [x] Add error handling for API failures
- [x] Update toast notifications
- [x] Test form submission end-to-end

### Testing:
- [ ] Test successful contact form submission
- [ ] Test validation errors (missing fields, invalid email)
- [ ] Test duplicate submission handling
- [ ] Verify data persists in MongoDB
- [ ] Test error scenarios (backend down, network error)

---

## Optional Enhancements (Not in Current Scope)
- Email notifications when contact form is submitted
- Admin dashboard to view submissions
- Spam protection (reCAPTCHA)
- Rate limiting per IP address
- Resume download tracking
- Project view analytics
