REST API for Users and Cards

This project is a REST API designed to manage user and card data, supporting full CRUD operations. Built with Node.js and Express, it provides a solid backend infrastructure for handling user records and card details.

Table of Contents
- Libraries Used
- Getting Started
- Environment Variables
- Running the Project
- API Documentation

Libraries Used
- express: Framework for building the server.
- mongoose: To connect and interact with MongoDB.
- cors: For enabling Cross-Origin Resource Sharing.
- jsonwebtoken: For generating and verifying JSON Web Tokens.
- bcryptjs: For securing user passwords.
- joi: For validating user inputs.
- chalk: To add color to console outputs.
- config: For managing configuration options.
- cross-env: To set environment variables across different platforms.
- dotenv: For loading environment variables from a .env file.
- lodash: Utility functions for various data operations.
- morgan: HTTP request logging.

Getting Started
To start working with this project:

1. Clone the repository from GitHub.
2. Install the required dependencies:

npm install


--IMPORTANT--
Environment Variables
To view the project, you have to create a .env file in the root directory and include the following variables:

- JWT_SECRET: Your secret key for generating JSON Web Tokens.
- ATLAS_CONNECTION_STRING: Your MongoDB Atlas connection string.

Running the Project
To run the project in various environments, use these commands:

- For local development:

npm run dev

- For production (using MongoDB Atlas):

npm start

API Documentation
Access API documentation for the Users and Cards endpoints here:

https://web.postman.co/workspace/e5660918-8e37-42d0-8619-d973a72cb6a8/documentation/24113009-537e190e-617b-48a0-b771-dd4a5cdd8305
