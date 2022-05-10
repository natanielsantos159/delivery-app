const { User } = require('../models');
const { Op } = require('sequelize');
const md5 = require('md5');

const createUser = async (name, email, password, role ) => {
  const user = await User.create({ name, email, password: md5(password), role });
  return user;
}

const findUserByEmail = async (email) => {
  const foundUser = await User.findOne({ where: { email } });
  return foundUser;
}

const findUserByEmailOrName = async (email, name) => {
  const foundUser = await User.findOne({ where: { [Op.or]: { email, name } } });
  return foundUser;
}

const getSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });
  return sellers;
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserByEmailOrName,
  getSellers
}