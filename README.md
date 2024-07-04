# Page One: E-Book API Project

## Overview

This project is an E-Book API built with Node.js, MongoDB, and JavaScript. It provides a backend service for managing e-books, including functionalities such as adding, retrieving, updating, and deleting e-books.

## Features

- Add new e-books
- Retrieve e-books by various criteria (e.g., title, author, genre)
- Update existing e-books
- Delete e-books

## Technologies Used

 Node.js, Express.js,
 MongoDB,Mongoose, and JavaScript
## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ReNaq313/PageOne.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:** 

   Create a `.env` file similar to `.env.example` file in the root directory

   ## API Endpoints

- **GET /api/ebooks**: Retrieve a list of all e-books.
- **GET /api/ebooks/:id**: Retrieve a specific e-book by ID.
- **POST /api/ebooks**: Add a new e-book.
- **PUT /api/ebooks/:id**: Update an existing e-book by ID.
- **DELETE /api/ebooks/:id**: Delete an e-book by ID.

