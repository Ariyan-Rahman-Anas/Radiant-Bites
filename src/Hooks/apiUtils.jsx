import axios from "axios";

const BASE_URL = "http://localhost:3000"; 
// const BASE_URL = "https://radiant-bites-back-end.vercel.app";

// Function to fetch data
export const getData = async (endpoint) => {
  try {
      const response = await axios.get(`${BASE_URL}/${endpoint}`);
    //   console.log("data is: ", response.data);
      return response.data?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to post data
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Function to update data
export const updateData = async (endpoint, id, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Function to delete data
export const deleteData = async (endpoint, id) => {
  try {
    await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};