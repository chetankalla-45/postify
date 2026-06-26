# MERN Image Upload App

A full-stack MERN application that allows users to create, view, and delete posts with image uploads. Images are stored on **ImageKit**, while post information is stored in **MongoDB Atlas**.

## Features

* Upload images with captions
* View all posts
* Delete posts
* Cloud image storage using ImageKit
* RESTful API with Express.js
* MongoDB database integration
* Responsive React frontend

## Tech Stack

### Frontend

* React
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* ImageKit
* CORS

## Project Structure

```text
project/
│
├── frontend/
│
└── backend/
    ├── src/
    │   ├── db/
    │   ├── models/
    │   ├── services/
    │   └── app.js
    │
    ├── server.js
    └── package.json
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/chetankalla-45/postify.git
cd postify
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_uri
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | `/create-post` | Create a new post |
| GET    | `/posts`       | Fetch all posts   |
| DELETE | `/posts/:id`   | Delete a post     |

## Future Improvements

* JWT Authentication
* User Registration & Login
* Edit Posts
* Like & Comment System
* User Profiles
* Pagination
* Improved Error Handling

## Author

**Chetan Kalla**

GitHub: https://github.com/chetankalla-45
