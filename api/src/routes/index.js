const express = require('express');
const app = express.Router();

const clients = require('../routes/clients/clients.js');


app.use('/clients', clients);



module.exports = app; 