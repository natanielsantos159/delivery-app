import api from './api';

const CREATE_ORDER = (body) => api.post('/customer/orders', body);

export default CREATE_ORDER;
