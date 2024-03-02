React-NestJS User Registration System

This project is a simple user registration system built with a React frontend and a NestJS backend. It allows users to register via a web form by providing basic information such as name, email, and password.

## Features

- **React Frontend**:
  - Interactive registration form.
  - Client-side form validation.
  - Feedback on successful or failed registration attempts.

- **NestJS Backend**:
  - REST API endpoint for user registration (`/users`).
  - Server-side data validation.
  - CORS configured for secure cross-origin requests.
  - In-memory storage of user data (extendable to database integration).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Start the NestJS server:
   ```bash
   npm run start
   ```

4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

5. Start the React development server:
   ```bash
   npm start
   ```

## Usage

Navigate to `http://localhost:3001` in your browser to access the registration form. Fill in the fields and submit the form to register.


