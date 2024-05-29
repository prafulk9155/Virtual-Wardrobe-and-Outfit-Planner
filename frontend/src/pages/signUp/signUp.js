import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signUp.css'; 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!name) {
      toast.error('Name is required');
      return;
    }
    if (!email) {
      toast.error('Email is required');
      return;
    }
    if (!mobile) {
      toast.error('Mobile number is required');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    console.log('Email: ', email, 'Password: ', password, 'Name: ', name, 'Mobile: ', mobile);
    await fetchData(name, email, mobile, password);
  };

  const fetchData = async (name, email, mobile, password) => {
    try {
      const response = await fetch('signup/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, mobile, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`Welcome ${data.username}! Your account has been created.`);
        // Handle successful signup
      } else {
        toast.error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="box">
      <h2>Create Account</h2>
      <form className="box-main" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter first and last name"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder='eg: abc123@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Mobile no</label>
          <input
            type="number"
            placeholder='+91'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder='min 6 Character'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder= ' min 6 Character'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
