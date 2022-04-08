const express = require("express");
const app = express.Router();

const clients = require("../routes/clients/clients.js");
const products = require("../routes/products/products.js");
const tabs = require("../routes/tabs/tabs.js");

app.use("/clients", clients);
app.use("/products", products);
app.use("/tabs", tabs);

module.exports = app;
