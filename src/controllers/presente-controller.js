'use strict'

const presenteRepository = require('../repositories/presente-repository');

exports.buscarTodos = async (req, res, next) => {
    try {
        const data = await presenteRepository.buscarTodos();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.cadastrar = async (req, res, next) => {
    try {
        const data = await presenteRepository.cadastrar(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.cadastrarEmLote = async (req, res, next) => {
    try {
        if(!Array.isArray(req.body)){
            res.status(400).send(error);
            throw "Envie uma lista de presentes.";
        }
        req.body.forEach(presente => {
            presenteRepository.cadastrar(presente);
        });
        res.status(200).send("Presentes cadastrados com sucesso!");
    } catch (error) {
        res.status(500).send(error);
    }
}