const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const { User } = require('../models');

const secret = readFileSync('jwt.evaluation.key', 'utf-8');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret)
    
    const user = User.findOne({ where: { email: decoded.data.email } });

    if (!user) {
      return res.status(400).json({ error: 'User does not exist' });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}