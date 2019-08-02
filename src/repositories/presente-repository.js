'use strict'

const mongoose = require('mongoose');
const Presente = mongoose.model('Presente');

exports.buscarTodos = async () => {
    const res = await Presente.find({});
    return res;
}

exports.cadastrar = async (presente) => {
    let p = new Presente();
    p.nome = presente.nome;
    p.descricao = presente.descricao;
    p.valor = presente.valor;
    p.nomeImagem = presente.nomeImagem;

    const res = await p.save();
    return res;
}