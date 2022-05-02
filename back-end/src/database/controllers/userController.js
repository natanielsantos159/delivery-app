const user = require('../services/userService')
const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');

const secret = readFileSync('jwt.evaluation.key', 'utf-8');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    await user.createUser(name, email, password, role);

    const token = jwt.sign({ data: { email } }, secret);

    return res.status(201).json({ token });

  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  register
}
