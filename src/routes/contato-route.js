'use strict'

const express = require('express');
const router = express.Router();
const contatoController = require('../controllers/contato-controller');

router.get('/', contatoController.buscarTodos);
router.get('/relatorio', contatoController.buscarRelatorio);
router.get('/:id', contatoController.buscarPorID);
router.get('/nome/:nome', contatoController.buscarPorNome);
router.get('/email/:email', contatoController.buscarPorEmail);
router.post('/', contatoController.cadastrar);
router.put('/:id', contatoController.atualizar);
router.delete('/', contatoController.deletar);

module.exports = router;