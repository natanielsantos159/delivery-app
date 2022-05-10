const adminService = require('../services/adminService');

const getAdminManager = async (req, res) => {
  const response = await adminService.getAdminManager();

  return res.status(200).json(response);
};


module.exports = {
  getAdminManager,
};
