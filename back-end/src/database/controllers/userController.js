const user = require('../services/userService')

const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  const response = await user.createUser(name, email, password, role);
  res.status(201).json(response);
}

module.exports = {
  register
}
