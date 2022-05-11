const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const productsController = require('../controllers/productsController');
const saleController = require('../controllers/saleController');

const customer = Router();

customer.get('/products', JWTauth, productsController.getAllProducts);
customer.get('/orders/:id', saleController.getOrderDetails);
customer.get('/orders', JWTauth, saleController.listCustomerOrders);
customer.post('/orders', JWTauth, saleController.createOrder);
customer.put('/orders/delivered/:orderId', JWTauth, saleController.setAsDelivered);

module.exports = customer;