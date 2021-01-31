const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const app = require("./src/server");
const server = require("./src/server");

require("dotenv").config();
// model
// const { sequelize, model } = require('./src/configs/database');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT} and use ${NODE_ENV} ENV`);
});

