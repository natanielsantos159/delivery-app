import api from './api';

const GET_ORDER_INFO = (id) => api.get(`customer/orders/${id}`);

export default GET_ORDER_INFO;
