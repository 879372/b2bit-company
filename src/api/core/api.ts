import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers.Accept = 'application/json;version=v1_web';
    config.headers["Content-Type"] = 'application/json';

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
