import api from './api';

export const REGISTER_USER = (body) => api.post('/register', body);

export const LOGIN = (body) => api.post('/login', body);

export const GET_USER_ORDERS = (userId) => api.get(`customer/orders/${userId}`);

export const GET_SELLER_ORDERS = () => api.get('/seller/orders');

export const GET_SELLERS = () => api.get('/sellers');
