const { User, Sale, SaleProduct } = require('../models');

const createOrder = async (userId, orderInfo) => {
  const { seller, products, totalPrice, deliveryAddress, deliveryNumber } = orderInfo;

  const { id } = await User.findOne({ where: { name: seller } });

  const result = await Sale.create({
    userId,
    sellerId: id,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'pendente',
  });

  const saleId = result.id;

  const saleProducts = products.map(product => ({
    saleId,
    productId: product.id,
    quantity: product.quantity,
  }));

  await SaleProduct.bulkCreate(saleProducts);

  return saleId;
};

const getOrderDetails = async (id) => {
  const order = await Sale.findOne({
    where: { id },
    include: [{ model: User, as: 'seller', attributes: ['name'] }]
  });

  return order;
};

const listSellerOrders = async (sellerId) => {
  const orders = await Sale.findAll({
    where: { sellerId },
  });

  return orders;
}

const listCustomerOrders = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId },
  });

  return orders;
}

module.exports = {
  createOrder,
  getOrderDetails,
  listSellerOrders,
  listCustomerOrders,
};