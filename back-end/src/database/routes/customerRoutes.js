const { Router } = require('express');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');

const customer = Router();

customer.get('/products', productsController.getAllProducts);

customer.get('/orders/:id', userController.getUserOrders);

module.exports = customer;