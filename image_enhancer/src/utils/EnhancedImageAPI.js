import axios from "axios";

// API configuration
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://techhk.aoscdn.com';

export const enhancedImageAPI = async (file) => {
  try {
    // Step 1: Upload image and get task ID
    const taskId = await uploadImage(file);
    console.log("Image uploaded successfully. Task ID:", taskId);

    // Step 2: Poll for enhanced image using task ID
    const enhancedImageData = await polling(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);

    return enhancedImageData;

  } catch (error) {
    console.log("Error while enhancing image:", error.message);
    throw error;
  }
};


const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-KEY": API_KEY,
    },
  });

  return data.data.task_id;
};


const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });

  return data.data;
};


const polling = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  // State 4 = still processing
  if (result.state === 4) {
    console.log("Processing the image...");

    if (retries >= 10) {
      throw new Error("Max retry limit reached.");
    }

    // Wait for 2 seconds before retrying
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return polling(taskId, retries + 1);
  }

  return result;
};
