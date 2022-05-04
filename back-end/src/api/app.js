const express = require('express');
const cors = require('cors');
const user = require('../database/routes/userRoutes');
const saleRoute = require('../database/routes/saleRoutes');
const customer = require('../database/routes/customerRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', user);

app.use('/sales', saleRoute);

app.use('/customer', customer);

app.use('/images', express.static('public'));

module.exports = app;
