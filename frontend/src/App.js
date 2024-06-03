import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import { get, post } from './services/api.service';
<<<<<<< HEAD
import Home from './home/home';
=======

>>>>>>> 86d57869455c19294823ff70e13dc9677ff459d4
// import FetchDataComponent from './services/FetchDataComponent';


function App() {

    const fetchData = async () => {
      try {
          const data = await get("auth", {});
          console.log("Response from API:", data);
          // setRDPList(data.RDPList);
      } catch (error) {
          console.error("Error occurred while fetching data:", error);
      }
  };
  fetchData()
  
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/signUp" />} />
    //     <Route path="/signUp" element={<SignUp />} />
    //     <Route path="/signIn" element={<SignIn />} />
    //     {/* Add other routes here */}
    //   </Routes>
    // </Router>
    <Home/>

   
    
    
  );
}

export default App;
