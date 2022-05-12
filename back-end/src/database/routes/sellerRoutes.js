const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const saleController = require('../controllers/saleController');

const seller = Router();

seller.get('/orders', JWTauth, saleController.listSellerOrders);

seller.put('/orders/preparing/:orderId', JWTauth, saleController.setAsPreparing);

seller.put('/orders/intransit/:orderId', JWTauth, saleController.setAsInTransit);

module.exports = seller;