import api from './api';

export const GET_ORDER_INFO = (id) => api.get(`/customer/orders/${id}`);

export const CREATE_ORDER = (body) => api.post('/customer/orders', body);

export const GET_USER_ORDERS = () => api.get('/customer/orders');

export const GET_SELLER_ORDERS = () => api.get('/seller/orders');

export const SET_AS_DELIVERED = (id) => api.put(`/customer/orders/delivered/${id}`);
