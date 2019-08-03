'use strict'

const express = require('express');
const router = express.Router();
const presenteController = require('../controllers/presente-controller');

router.get('/', presenteController.buscarTodos);
router.post('/', presenteController.cadastrar);
router.post('/cadastrar-em-lote', presenteController.cadastrarEmLote);
router.put('/', presenteController.atualizar)

module.exports = router;