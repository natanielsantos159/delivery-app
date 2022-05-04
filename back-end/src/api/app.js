const express = require('express');
const cors = require('cors');
const user = require('../database/routes/userRoutes');
const saleRoute = require('../database/routes/saleRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', user);

app.use('/sales', saleRoute);

module.exports = app;
