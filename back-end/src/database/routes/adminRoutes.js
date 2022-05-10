const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const adminController = require('../controllers/adminController');

const admin = Router();

admin.get('/manage', adminController.getAdminManager);

module.exports = admin;