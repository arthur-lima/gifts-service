'use strict'

const contatoRepository = require('../repositories/contato-repository');

exports.buscarTodos = async (req, res, next) => {
    try {
        const data = await contatoRepository.buscarTodos();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.buscarRelatorio = async (req, res, next) => {
    try {
        const contatos = await contatoRepository.buscarTodosComJoins();
        res.status(200).send(contruirRelatorio(contatos));
    } catch (error) {
        res.status(500).send(error);
    }
}

function contruirRelatorio(contatos) {
    return contatos.map(c => ({
        nome: c.nome,
        email: c.email,
        telefone: c.telefone,
        mensagem: c.mensagem,
        presentes: c.presentes.map(p => ({
            nome: p.nome,
            valor: p.valor
        }))
    }));
}

exports.buscarPorNome = async (req, res, next) => {
    try {
        const data = await contatoRepository.buscarPorNome(req.params.nome);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.buscarPorEmail = async (req, res, next) => {
    try {
        const data = await contatoRepository.buscarPorEmail(req.params.email);
        if (!data) {
            throw "E-mail não cadastrado";
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.buscarPorID = async (req, res, next) => {
    try {
        const data = await contatoRepository.buscarPorID(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.cadastrar = async (req, res, next) => {
    try {
        const data = await contatoRepository.cadastrar(req.body);
        res.status(201).send({
            message: 'Contato cadastrado com sucesso!'
        })
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao cadastrar contato!',
            data: error
        });
    }
};

exports.atualizar = async (req, res, next) => {
    try {
        const data = await contatoRepository.atualizar(req.params.id, req.body);
        if (!data) {
            throw "Contato não cadastrado";
        }
        res.status(200).send({ message: 'Contato atualizado com sucesso!' });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao atualizar contato!',
            data: error
        });
    }
};

exports.deletar = async (req, res, next) => {
    try {
        const data = await contatoRepository.deletar(req.body.id);
        res.status(200).send({
            message: 'Contato removido com sucesso!'
        });
    } catch (error) {
        res.status(400).send({
            message: 'Falha ao remover contato!',
            data: error
        });
    }
};