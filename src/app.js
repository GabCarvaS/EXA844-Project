"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");
const app = express();
const router = express.Router();

//Banco
mongoose.connect(config.connectionString);

//Models
const product = require("./models/product");
const car = require("./models/car");

//Rotas
const indexRoute = require("./routes/indexRoute");
const productRoute = require("./routes/productRoute");
const carRoute = require("./routes/carRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  /*res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );*/
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use("/", indexRoute);
app.use("/products", productRoute);
app.use("/cars", carRoute);

module.exports = app;
