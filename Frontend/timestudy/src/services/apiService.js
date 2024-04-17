import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const importData = async (formData) => {
  try {
    await axios.post(`${API_BASE_URL}/import`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    throw new Error('Error importing data:', error);
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

export const fetchSummary = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/summary`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching summary:', error);
  }
};

