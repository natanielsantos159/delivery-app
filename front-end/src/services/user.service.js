import api from './api';

/* const GET_ALL_PRODUCTS = () => api.get('/products'); */

const LOGIN = (body) => api.post('/login', body);

export default LOGIN;
