const { User } =  require('../models');

const createUser = async (name, email, password, role ) => {
  const user = await User.create({ name, email, password, role });
  console.log(user);
  return user;
}

const findUserByEmail = async (email) => {
  const foundUser = await User.findOne({ where: { email }, attributes: { exclude: ['password'] } });
  console.log(foundUser);
  return foundUser;
}

module.exports = {
  createUser,
  findUserByEmail
}