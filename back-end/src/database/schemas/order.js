const joi = require('joi');

const orderSchema = joi.object({
  products: joi.array().items(joi.object({
    id: joi.number().required(),
    name: joi.string().required(),
    price: joi.number().required(),
    quantity: joi.number().required(),
  })).required(),
  totalPrice: joi.number().required(),
  seller: joi.string().required(),
  deliveryAddress: joi.string().required(),
  deliveryNumber: joi.number().required(),
});

module.exports = orderSchema;
