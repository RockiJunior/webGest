const express = require('express');
const app = express.Router();

const clients = require('../routes/clients/clients.js');
const products = require('../routes/products/products.js');


app.use('/clients', clients);
app.use('/products', products);


module.exports = app; 