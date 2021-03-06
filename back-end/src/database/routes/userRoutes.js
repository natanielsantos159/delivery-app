const { Router } = require('express');
const userController = require('../controllers/userController');
const userValidation = require('../middlewares/userValidation');

const user = Router();

user.get('/sellers', userController.getSellers)
user.post('/login', userController.login);
user.post('/register', userValidation.register, userController.register);

module.exports = user;