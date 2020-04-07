require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require("./routes");

const app = express();

app.use(cors());
//Informando que o padrão utilizado nas requisições será o json
app.use(express.json());

app.use(routes);

//Para evitar erros de validação 500
app.use(errors());

module.exports = app;