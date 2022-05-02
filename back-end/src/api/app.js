const express = require('express');
const user = require('../database/routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/', user);

module.exports = app;
