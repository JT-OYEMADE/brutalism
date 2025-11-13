import axios from 'axios';

const client = axios.create({
  baseURL: 'http://email-list-api-4.onrender.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// INTERCEPTORS
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  async (response) => {
    // interceptor logic goes here. e.g additional headers, request encryption, session management, etc.

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
