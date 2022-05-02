const { User } =  require('../models');

const createUser = async (name, email, password, role ) => {
  const user = await User.create({ name, email, password, role });
  console.log(user);
  return user;
}

module.exports = {
  createUser
}