const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const saleController = require('../controllers/saleController');

const seller = Router();

seller.get('/orders', JWTauth, saleController.listSellerOrders);

module.exports = seller;