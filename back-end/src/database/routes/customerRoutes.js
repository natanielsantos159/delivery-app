const { Router } = require('express');
const productsController = require('../controllers/productsController');
const saleController = require('../controllers/saleController');

const customer = Router();

customer.get('/products', productsController.getAllProducts);

customer.get('/orders/:id', saleController.getSalesByUserId);

module.exports = customer;