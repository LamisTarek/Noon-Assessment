import axios from "axios";

// Create a new Axios instance with custom configurations
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Set the base URL
  timeout: 10000, // Adjust the timeout as needed
  headers: {
    "Content-Type": "application/json", // Set the default content type
  },
});

export default axiosInstance;
