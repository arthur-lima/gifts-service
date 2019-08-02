'use strict'

const mongoose = require('mongoose');
const Contato = mongoose.model('Contato');

exports.buscarTodos = async () => {
    const res = await Contato.find({});
    return res;
}

exports.buscarPorNome = async (nome) => {
    const res = await Contato.find({ nome: nome });
    return res;
}

exports.buscarPorEmail = async (email) => {
    const res = await Contato.findOne({ email: email })
    return res;
}

exports.buscarPorID = async (id) => {
    const res = await Contato.findById(id);
    return res;
}

exports.cadastar = async (contato) => {
    let c = new Contato();
    c.nome = contato.nome;
    c.email = contato.email;
    c.telefone = contato.telefone;
    c.mensagem = contato.mensagem;

    const res = await c.save();
    return res;
}

exports.atualizar = async (id, contato) => {
    const res = await Contato
        .findByIdAndUpdate(id, {
            $set: {
                nome: contato.nome,
                email: contato.email,
                telefone: contato.telefone,
                mensagem: contato.mensagem
            }
        });

    return res;
}

exports.deletar = async (id) => {
    const res = await Contato
        .findByIdAndDelete(id);
}