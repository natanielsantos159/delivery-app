const { User } = require('../models');
const md5 = require('md5');

const createUser = async (name, email, password, role ) => {
  const user = await User.create({ name, email, password: md5(password), role });
  return user;
}

const findUserByEmail = async (email) => {
  const foundUser = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
  return foundUser;
}

module.exports = {
  createUser,
  findUserByEmail
}