const express = require('express');
const bodyParser = require('body-parser');
const user = require('../database/routes/userRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/', user);

module.exports = app;
