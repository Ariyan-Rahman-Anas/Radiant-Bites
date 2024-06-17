import axios from "axios";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://radiant-bites-back-end.vercel.app";

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
// export const updateData = async (endpoint, id, data) => {
//   try {
//     const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating data:", error);
//     throw error;
//   }
// };


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




const imageCache = {}; // Cache to store fetched images

export const fetchRandomImageUrl = async (query = "") => {
  if (imageCache[query]) {
    console.log(`Serving cached image for query: ${query}`);
    return imageCache[query];
  }

  // const client_id = "mDR5ewUO0kTaA1RNhC4k3DR4IxQohhq5BjOUDuPSqU0";
  const client_id = "mDR5ewUO0kTaA1RNhC4k3DR4IxQohhq5BjOUDuPSqU0";
  let url = `https://api.unsplash.com/photos/random?client_id=${client_id}`;

  if (query) {
    url += `&query=${query}`;
  }

  try {
    const response = await fetch(url, {
      headers: {
        "Accept-Version": "v1",
      },
    });

    if (!response.ok) {
      console.error(`Error fetching image: ${response.statusText}`);
      return `https://source.unsplash.com/1200x540/?${query}`; // Use source.unsplash.com as fallback
    }

    const data = await response.json();
    const imageUrl = data.urls.regular;
    imageCache[query] = imageUrl; // Cache the image URL
    console.log(`Fetched and cached image URL: ${imageUrl}`);
    return imageUrl;
  } catch (error) {
    console.error("Error fetching random image:", error);
    return `https://source.unsplash.com/1200x540/?${query}`; // Use source.unsplash.com as fallback
  }
};