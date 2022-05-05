import api from './api';

const PRODUCTS = () => api.get('/customer/products');

export default PRODUCTS;
