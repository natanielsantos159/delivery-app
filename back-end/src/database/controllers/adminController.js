const adminService = require('../services/adminService');

const getAdminManager = async (req, res) => {
  const response = await adminService.getAdminManager();

  return res.status(200).json(response);
};

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const user = req.user;

  if (user.role === 'administrator') {
    await adminService.createUser(name, email, password, role);
    return res.status(201).json({ message: 'User created' });
  }
};


module.exports = {
  getAdminManager,
  createUser,
};
