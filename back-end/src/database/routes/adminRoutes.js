const { Router } = require('express');
const JWTauth = require('../auth/JWTauth');
const userValidation = require('../middlewares/userValidation');
const adminController = require('../controllers/adminController');

const admin = Router();

admin.get('/manage', JWTauth, adminController.getAdminManager);
admin.post('/create', JWTauth, userValidation.register, adminController.createUser);
admin.delete('/remove/:id', JWTauth, adminController.removeUser);

module.exports = admin;