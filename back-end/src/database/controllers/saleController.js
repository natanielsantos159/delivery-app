const saleService = require("../services/saleService");

const getSalesByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const sales = await saleService.getSalesByUserId(id);
    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { 
  getSalesByUserId,
}