import React from 'react';
import './App.css';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import { get, post } from './services/api.service';
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
    <div className="App">

    <SignIn/>
    {/* <SignUp/> */}
      {/* <service/> */}
      {/* <FetchDataComponent/> */}
      
    </div>
    
  );
}

export default App;
