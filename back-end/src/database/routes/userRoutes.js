const { Router } = require('express');
const userController = require('../controllers/userController');

const user = Router();

user.post('/register', userController.register);

module.exports = user;