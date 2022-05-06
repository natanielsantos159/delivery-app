const orderSchema = require('../schemas/order');

const saleService = require('../services/saleService');

const createOrder = async (req, res, next) => {
  const orderInfo = req.body;
  const { id } = req.user;

  const { error } = orderSchema.validate(req.body);
  if (error) return next(error);
  
  try {
    const orderId = await saleService.createOrder(id, orderInfo);
    return res.status(201).json({ orderId });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
};
