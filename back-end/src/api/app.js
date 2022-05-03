const express = require('express');
const cors = require('cors');
const user = require('../database/routes/userRoutes');
const customer = require('../database/routes/customerRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', user);

app.use('/customer', customer);

module.exports = app;
