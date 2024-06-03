import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signUp.css'; 
import { get, post} from '../../services/api.service';


const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!username) {
      toast.error('Name is required');
      return;
    }
    if (!email) {
      toast.error('Email is required');
      return;
    }
    if (!phone) {
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

    console.log('Email: ', email, 'Password: ', password, 'Name: ', username, 'Mobile: ', phone);
    await fetchData(username, email, phone, password);
  };

 
  const fetchData = async () => {
    try {
        const data = await post("user/register", {
          data:({ username, email, phone, password }),
        });
        console.log("Response from API:", data);
console.log(data.data.message)
        toast.success(data.data.message)
        // setRDPList(data.RDPList);
    } catch (error) {
        console.error("Error occurred while fetching data:", error);
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
            value={username}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter first and last username"
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
            value={phone}
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
