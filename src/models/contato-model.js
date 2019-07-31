'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true,
        trim: true
    },
    mensagem: {
        type: String,
        required: false,
        trim: true
    },
    presentes: [{
        type: String,
        required: false
    }]
});

module.exports = mongoose.model('Contato', schema);