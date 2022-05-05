const userService = require('../services/userService')
const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const secret = readFileSync('jwt.evaluation.key', 'utf-8');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.password !== md5(password)) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    delete user.dataValues.password;
    delete user.dataValues.id;

    const token = jwt.sign({ data: { email } }, secret, { expiresIn: '1h' });

    return res.status(200).json({ token, user });

  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userData = await userService.createUser(name, email, password, role);

    const token = jwt.sign({ data: { email } }, secret, { expiresIn: '1h' });

    delete userData.dataValues.password;

    return res.status(201).json({ user: userData, token });

  } catch (error) {
    return res.status(500).json({ error: 'Invalid or expired token' });
  }
}

const getUserOrders = async (req, res) => {
  const { id } = req.params;

  try {
    const orders = await userService.getUserOrders(id);
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  login,
  register,
  getUserOrders,
}
