import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VITE_API_URL,
  headers: {
    Authorization: process.env.VITE_BEARER,
  },
});

export default apiClient;
