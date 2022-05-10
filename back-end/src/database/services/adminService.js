const { User } = require('../models');

const getAdminManager = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  getAdminManager,
};
