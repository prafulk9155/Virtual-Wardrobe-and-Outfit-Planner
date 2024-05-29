
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!email) {
      toast.error('Email is required');
      return;
    }
    if (!password) {
      toast.error('Password is required');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    console.log('Email:', email, 'Password:', password);
    await fetchData(email, password);
  };

  const fetchData = async (email, password) => {
    try {
      const response = await fetch('https://user/resister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(`Welcome back!`);
        // Handle successful login
      } else {
        toast.error(data.message || 'Authentication failed');
      }
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="box">
      <h2>Login</h2>
      <form className="box-main" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;


