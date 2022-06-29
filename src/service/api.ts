import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3002/"
});

api.interceptors.request.use(async (config: any) => {
  return config;
}, (error: any) => {
  return Promise.reject(error);
});

api.interceptors.response.use((response) => {
  return response;
}, (error: any) => {
  return Promise.reject(error);
});

export default api;
