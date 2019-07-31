'use strict'

const mongoose = require('mongoose');
const Contato = mongoose.model('Contato');

exports.get = (req, res, next) => {
    Contato.find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(400).send(error);
        });
}

exports.getPorNome = (req, res, next) => {
    Contato.find({ nome: req.params.nome })
        .then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(400).send(error);
        });
}

exports.getPorEmail = (req, res, next) => {
    Contato.findOne({ email: req.params.email })
        .then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(400).send(error);
        });
}

exports.getPorID = (req, res, next) => {
    Contato.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(400).send(error);
        });
}

exports.post = (req, res, next) => {
    let contato = new Contato();
    contato.nome = req.body.nome;
    contato.email = req.body.email;
    contato.telefone = req.body.telefone;
    contato.mensagem = req.body.mensagem;

    contato.save()
        .then(success => {
            res.status(201).send({
                message: 'Contato cadastrado com sucesso!'
            });
        }).catch(error => {
            res.status(400).send({
                message: 'Falha ao cadastrar contato!',
                data: error
            });
        });
};

exports.put = (req, res, next) => {
    Contato
        .findByIdAndUpdate(req.params.id, {
            $set: {
                nome: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone,
                mensagem: req.body.mensagem
            }
        }).then(success => {
            res.status(200).send({
                message: 'Contato atualizado com sucesso!'
            });
        }).catch(error => {
            res.status(400).send({
                message: 'Falha ao atualizar contato!',
                data: error
            });
        });
};

exports.delete = (req, res, next) => {
    Contato
        .findByIdAndDelete(req.body.id)
        .then(success => {
            res.status(200).send({
                message: 'Contato removido com sucesso!'
            });
        }).catch(error => {
            res.status(400).send({
                message: 'Falha ao remover contato!',
                data: error
            });
        });
};