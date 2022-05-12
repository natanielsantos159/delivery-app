import api from './api';

const USERS = () => api.get('/admin/manage');

export default USERS;