const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');

const customer = Router();

customer.get('/products', JWTauth, productsController.getAllProducts);

customer.get('/orders/:id', userController.getUserOrders);

module.exports = customer;