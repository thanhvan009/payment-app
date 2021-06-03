import axios from 'axios';

const apiClient = axios.create({
  baseURL: '',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

export default apiClient;