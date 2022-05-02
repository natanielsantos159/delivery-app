const { findUserByEmail } = require('../services/userService');

const register = async (req, res, next) => {
  const { email, password, name } = req.body;
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const userAlreadyExists = await findUserByEmail(email, name);

  if (userAlreadyExists) {
    return res.status(404).json({ error: 'User already exists' });
  }

  if (name.length < 12) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  
  if (!regexEmail.test(email)) {
    return res.status(404).json({ error: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Invalid Password' });
  }
  next();
}

module.exports = {
  register,
}