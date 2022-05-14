const adminService = require('../services/adminService');

const getAdminManager = async (req, res) => {
  const response = await adminService.getAdminManager();

  return res.status(200).json(response);
};

const createUser = async (req, res) => {
  const userData = req.body;

  const response = await adminService.createUser(userData);
  console.log(response);
  return res.status(201).json({ message: 'User created'});
};


module.exports = {
  getAdminManager,
  createUser,
};
