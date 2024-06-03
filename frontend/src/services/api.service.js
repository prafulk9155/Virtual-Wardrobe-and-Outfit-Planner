const BASE_URL = "http://192.168.41.242:5000/" // Replace with your API base URL
// const BASE_URL = "http://localhost:5000/api/";
// Function to handle HTTP GET requests
export const get = async (endpoint) => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during GET request:", error.message);
      throw error;
    }
  };

// Function to handle HTTP POST requests
export const post = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during POST request:", error);
    throw error;
  }
};