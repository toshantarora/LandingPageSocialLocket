import axios from 'axios';

const API_URL = process.env.REACT_APP_URL;

const API = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
  responseType: 'json',
});

// Add a request interceptor
API.interceptors.request.use(
  (req) => {
    // Do something before request is sent
    return req;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export { API };
