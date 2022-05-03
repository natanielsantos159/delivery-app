const productsService = require('../services/productsService');

const getAllProducts =  async (req, res) => {
  const result = await productsService.getAllProducts();

  return res.status(200).json(result);
};


module.exports = {
  getAllProducts,
};
