const { Sale } = require('../models');

const getSalesByUserId = async (userId) => {
  const sales = await Sale.findAll({ where: { userId }});
  return sales;
}

module.exports = { 
  getSalesByUserId,
}