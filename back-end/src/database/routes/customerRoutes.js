const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const productsController = require('../controllers/productsController');
const userController = require('../controllers/userController');
const saleController = require('../controllers/saleController');

const customer = Router();

customer.get('/products', JWTauth, productsController.getAllProducts);

customer.get('/orders', JWTauth, saleController.listCustomerOrders);

customer.post('/orders', JWTauth, saleController.createOrder);

module.exports = customer;