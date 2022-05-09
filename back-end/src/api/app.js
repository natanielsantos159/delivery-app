const express = require('express');
const cors = require('cors');
const user = require('../database/routes/userRoutes');
const customer = require('../database/routes/customerRoutes');
const errorHandler = require('../database/middlewares/errorHandler');
const seller = require('../database/routes/sellerRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', user);

app.use('/customer', customer);

app.use('/seller', seller);

app.use('/images', express.static('public'));

app.use(errorHandler);

module.exports = app;
