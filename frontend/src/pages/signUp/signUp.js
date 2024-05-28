import React, { useState } from 'react';
import './signUp.css'; 

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Email: ', email, 'Password: ', password, 'Name: ', name, 'Mobile: ', mobile);
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
            type="email"  placeholder='eg: abc123@gmail.com'
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
            placeholder='eg: ******'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder='eg: ******'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
