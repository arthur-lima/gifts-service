'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');

router.get('/', controller.buscarTodos);
router.get('/:id', controller.buscarPorID);
router.get('/nome/:nome', controller.buscarPorNome);
router.get('/email/:email', controller.buscarPorEmail);
router.post('/', controller.cadastrar);
router.put('/:id', controller.atualizar);
router.delete('/', controller.deletar);

module.exports = router;