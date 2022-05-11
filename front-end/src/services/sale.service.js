import api from './api';

export const GET_ORDER_INFO = (id) => api.get(`customer/orders/${id}`);

export const SET_AS_DELIVERED = (id) => api.put(`customer/orders/delivered/${id}`);
