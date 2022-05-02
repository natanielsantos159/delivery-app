import api from './api';

const REGISTER_USER = (body) => api.post('/register', body);

export default REGISTER_USER;
