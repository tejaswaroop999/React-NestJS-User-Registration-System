import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css'; // Make sure your CSS file is imported

const RegistrationForm = () => {
  // Define 'user' state with initial values
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Function to update 'user' state based on form inputs
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users', user);
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
    
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
        <div className="checkbox-container">
          <input
            type="checkbox"
            // other checkbox props
          />
          <label>Remember Me</label>
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-redirect">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
