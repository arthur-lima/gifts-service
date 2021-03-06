'use strict'

const mongoose = require('mongoose');
const Contato = mongoose.model('Contato');

exports.buscarTodos = async () => {
    const res = await Contato.find({});
    return res;
}

exports.buscarTodosComJoins = async () => {
    const res = await Contato.find({}).populate('presentes');
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

exports.cadastrar = async (contato) => {
    if(!contato || !contato.presentes){
        throw "Contato inválido ou sem presente.";
    }
    let c = new Contato();
    c.nome = contato.nome;
    c.email = contato.email;
    c.telefone = contato.telefone;
    c.mensagem = contato.mensagem;
    c.presentes = contato.presentes;
    c.dt_criacao = Date.now();

    const res = await c.save();
    return res;
}

exports.atualizar = async (id, contato) => {
    if(!contato || !contato.presentes){
        throw "Contato inválido ou sem presente.";
    }
    const res = await Contato
        .findByIdAndUpdate(id, {
            $set: {
                nome: contato.nome,
                email: contato.email,
                telefone: contato.telefone,
                mensagem: contato.mensagem,
                presentes: contato.presentes,
                dt_atualizacao: Date.now()
            }
        });

    return res;
}

exports.deletar = async (id) => {
    const res = await Contato
        .findByIdAndDelete(id);
}