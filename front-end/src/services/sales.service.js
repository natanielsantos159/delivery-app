import api from './api';

const GET_SALES_BY_USER_ID = (userId) => api.get(`sales/user/${userId}`);

export default GET_SALES_BY_USER_ID;
