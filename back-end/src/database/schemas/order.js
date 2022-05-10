const joi = require('joi');

const orderSchema = joi.object({
  products: joi.array().items(joi.object({
    id: joi.number().required(),
    name: joi.string().required(),
    price: joi.number().required(),
    quantity: joi.number().required(),
  })).required(),
  totalPrice: joi.number().required(),
  sellerId: joi.number().required(),
  deliveryAddress: joi.string().required(),
  deliveryNumber: joi.number().required(),
});

module.exports = orderSchema;
