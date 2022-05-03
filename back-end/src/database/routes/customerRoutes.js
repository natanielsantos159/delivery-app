const { Router } = require('express');
const productsController = require('../controllers/productsController');

const customer = Router();

customer.get('/products', productsController.getAllProducts);

module.exports = customer;