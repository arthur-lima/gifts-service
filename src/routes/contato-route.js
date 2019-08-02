'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');

router.get('/', controller.buscarTodos);
router.get('/:nome', controller.buscarPorNome);
router.get('/admin/:id', controller.buscarPorID);
router.get('/pessoal/:email', controller.buscarPorEmail);
router.post('/', controller.cadastrar);
router.put('/:id', controller.atualizar);
router.delete('/', controller.deletar);

module.exports = router;