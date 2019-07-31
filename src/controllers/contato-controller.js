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

exports.criar = async (req, res, next) => {
    try {
        const data = await contatoRepository.criar(req.body);
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
        res.status(200).send({
            message: 'Contato atualizado com sucesso!'
        });
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