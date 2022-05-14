const { User } = require('../models');
const md5 = require('md5');

const getAdminManager = async () => {
  const users = await User.findAll();

  return users;
};

const createUser = async (userData) => {
  const { name, email, password, role } = userData;

  const newUser = await User.create({ name, email, password: md5(password), role });

  return newUser;
};

module.exports = {
  getAdminManager,
  createUser,
};
