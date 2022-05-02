const express = require('express');
const cors = require('cors');
const user = require('../database/routes/userRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', user);

module.exports = app;
