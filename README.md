# Password Reset Flow - Frontend
## Description
This project is a frontend web application built with React and styled using Bootstrap. It includes user authentication and password reset functionality, allowing users to register, log in, and reset their passwords if needed. The application is responsive and designed to work seamlessly across various screen sizes.

## Features
- **User Authentication:** Register and log in with secure form validation.
- **Password Reset:** Request a password reset via email and set a new password.
- **Responsive Design:** Built with Bootstrap for a mobile-friendly experience.
- **API Integration:** Connects to a Node.js backend with RESTful API endpoints for authentication and password reset.
  
## Tech Stack
- **React -** JavaScript library for building user interfaces.
- **Bootstrap -** CSS framework for responsive design.
- **Axios -** HTTP client for API requests.
- **React Router -** Library for routing and navigation.

## Available Pages and Components
1. **Login Page**
- Path: `/login`
- Allows users to log in to the application with their email and password.
- Components Used: Login.js

2. **Register Page**
- Path: `/register`
- Allows new users to sign up.
- Components Used: Register.js

3. **Forgot Password Page**
- Path: `/forgot-password`
- Users can request a password reset by providing their email.
- Components Used: ForgotPassword.js

4. **Reset Password Page**
- Path: `/reset-password`
- Allows users to enter a new password after clicking the reset link sent to their email.
- Components Used: ResetPassword.js

## API Endpoints
This frontend application connects to a backend API. Below are the API endpoints expected by the frontend:

- POST `/auth/register` - Registers a new user
- POST `/auth/login` - Logs in a user and returns a token
- POST `/auth/requestPasswordReset` - Sends a password reset link to the user’s email
- POST `/auth/resetPassword` - Resets the user’s password using a token

## License
This project is licensed under the MIT License.
