const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');
const saleController = require('../controllers/saleController');

const customer = Router();

customer.get('/products', JWTauth, productsController.getAllProducts);

customer.get('/orders', userController.getUserOrders);

customer.get('/orders/:id', saleController.getOrderDetails);

customer.post('/orders', JWTauth, saleController.createOrder);

module.exports = customer;