import api from './api';

export const REGISTER_USER = (body) => api.post('/register', body);

export const LOGIN = (body) => api.post('/login', body);

export const PRODUCTS = () => api.get('/customer/products');

export const GET_USER_ORDERS = () => api.get('customer/orders');

export const GET_SELLERS = () => api.get('/sellers');
