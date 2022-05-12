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

const getOrderDetails = async (req, res, next) => {
  const { id } = req.params;
  
  try{
    const result = await saleService.getOrderDetails(id);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message});
  }
};

const listSellerOrders = async (req, res) => {
  const { id } = req.user;

  try {
    const orders = await saleService.listSellerOrders(id);
    return res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const listCustomerOrders = async (req, res) => {
  const { id } = req.user;

  try {
    const orders = await saleService.listCustomerOrders(id);
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const setAsDelivered = async (req, res) => {
  const { orderId } = req.params;

  try {
    await saleService.setAsDelivered(orderId);
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};

const setAsPreparing = async (req, res) => {
  const { orderId } = req.params;

  try {
    await saleService.setAsPreparing(orderId);
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};

const setAsInTransit = async (req, res) => {
  const { orderId } = req.params;

  try {
    await saleService.setAsInTransit(orderId);
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
};

module.exports = {
  createOrder,
  getOrderDetails,
  listSellerOrders,
  listCustomerOrders,
  setAsDelivered,
  setAsPreparing,
  setAsInTransit,
};
