import axios from "axios";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://radiant-bites-back-end.vercel.app";

// Function to fetch data
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response?.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Function to get users by role
export const getUsersByRole = async (role) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/role/${role}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching users with role ${role}:`, error);
    throw error;
  }
};

//postData
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

//postData with file
/**
 * Function to post data with file, handling both JSON and multipart/form-data
 * @param {string} endpoint - The API endpoint to post to
 * @param {object} data - The data to be posted
 * @param {boolean} hasFile - Flag to indicate if the data includes a file
 * @returns {object} - The response data from the server
 */
export const postDataWithFile = async (endpoint, data, hasFile = false) => {
  try {
    let response;
    if (hasFile) {
      response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return response?.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};


// Function to update data
export const updateData = async (endpoint, id, data) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${endpoint}/${id}`, data);
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