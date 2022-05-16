const { User } = require('../models');
const md5 = require('md5');

const getAdminManager = async () => {
  const users = await User.findAll();

  return users;
};

const createUser = async (name, email, password, role) => {
  const newUser = await User.create({ name, email, password: md5(password), role });

  return newUser;
};

const removeUser = async (id) => {
  const deletedUser = await User.destroy({ where: { id } });
  return deletedUser;
}

module.exports = {
  getAdminManager,
  createUser,
  removeUser
};
