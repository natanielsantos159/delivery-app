import api from './api';

export const REGISTER_USER = (body) => api.post('/register', body);

export const LOGIN = (body) => api.post('/login', body);

