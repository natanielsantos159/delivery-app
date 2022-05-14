import api from './api';

export const USERS = () => api.get('/admin/manage');

export const CREATE_USER = (body) => api.post('/admin/create', body);
