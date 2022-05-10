const { User, Sale, SaleProduct, Product } = require('../models');

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
    status: 'Pendente',
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
    include: [
      { model: User, as: 'seller', attributes: ['name'] },
      { model: Product, as: 'products', attributes: ['name', 'price']}
    ]
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

const setAsDelivered = async (orderId) => {
  await Sale.update(
    { status: 'Entregue' }, 
    { where: { id: orderId }},
  );
}

module.exports = {
  createOrder,
  getOrderDetails,
  listSellerOrders,
  listCustomerOrders,
  setAsDelivered,
};
