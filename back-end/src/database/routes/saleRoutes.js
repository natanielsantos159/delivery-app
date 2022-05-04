const { Router } = require('express');
const saleController = require('../controllers/saleController');

const saleRoute = Router();

saleRoute.get('/user/:id', saleController.getSalesByUserId);

module.exports = saleRoute;
