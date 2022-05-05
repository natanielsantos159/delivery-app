import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// Configuração pra interceptar todas as requests e enviar um token nos headers
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    config.headers.Authorization = user.token;
  }
  return config;
});

export default api;
