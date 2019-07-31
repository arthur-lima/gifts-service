'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

//conecta ao banco
mongoose.connect(
    config.connectionString,
    { useNewUrlParser: true }
);
mongoose.set('useCreateIndex', true);
//carrega models
const Contato = require('./models/contato-model')

//carrega as rotas
const indexRoute = require('./routes/index-route');
const contatoRoute = require('./routes/contato-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/contatos', contatoRoute);

module.exports = app;