const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const productsController = require('../controllers/productsController');

const customer = Router();

customer.get('/products', JWTauth, productsController.getAllProducts);

module.exports = customer;