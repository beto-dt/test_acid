require('dotenv').config();
const express = require('express');
const cors = require("cors");
const { dbConnectMySql } = require('./config/mysql');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/v1",require('./routes'));

app.listen(port);

dbConnectMySql();

module.exports = app;