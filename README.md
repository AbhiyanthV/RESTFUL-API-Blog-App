[# RESTful Blog Application API

## Objective
Create a RESTful API for a blog application that allows users to create, read, update, and delete blog posts, as well as manage comments.

## Features

- **User Authentication and Authorization**:
  - Register new users.
  - Authenticate users and provide JWT tokens.
  - Role-based access control for creating, updating, and deleting posts and comments.
    
- **Blog Post Management**:
  - Create a new blog post.
  - Read all blog posts or a single blog post.
  - Update an existing blog post.
  - Delete a blog post.
    
- **Comment Management**:
  - Create a new comment.
  - Read all comments for a specific post or a single comment.
  - Update an existing comment.
  - Delete a comment.
    
- **Validation and Error Handling**:
  - Input validation and error handling for all endpoints.

## API Endpoints

### User Authentication
- `POST /signup`: Register a new user.
- `POST /login`: Authenticate a user and return a JWT token.

### Blog Posts
- `POST /posts`: Create a new blog post.
- `GET /posts`: Get all blog posts.
- `GET /posts/{id}`: Get a single blog post by ID.
- `PUT /posts/{id}`: Update a blog post by ID.
- `DELETE /posts/{id}`: Delete a blog post by ID.

### Comments
- `POST /comments`: Create a new comment.
- `GET /comments?post_id={post_id}`: Get all comments for a specific post.
- `GET /comments/{id}`: Get a single comment by ID.
- `PUT /comments/{id}`: Update a comment by ID.
- `DELETE /comments/{id}`: Delete a comment by ID.

## Database Design
### Collections
- **Users**:
  - `id`: Unique identifier.
  - `password`: User's password.
  - `email`: User's email.
- **Posts**:
  - `id`: Unique identifier.
  - `title`: Title(name) of the blog post.
  - `content`: Content of the blog post.
  - `image`: URL of the uploaded image.
- **Comments**:
  - `id`: Unique identifier.
  - `post_id`: ID of the related blog post.
  - `content`: Content of the comment.
    
## Setup and Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/AbhiyanthV/RESTFUL-API-Blog-App
    cd blog-api
    
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
        ```env
        PORT=3000
        MONGODB_URI=your_mongodb_uri
        JWT_SECRET=your_secret_key
        ```

4. **Run the application**:
    ```bash
    npm start
    ```
## Deliverables
- Fully functional RESTful API for blog posts and comments.
- Database schema and setup scripts.
- Comprehensive API documentation using Postman.

## Tools and Technologies
- **Programming Language**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **API Documentation**: Postman
](https://github.com/AbhiyanthV/RESTFUL-API-Blog-App)
