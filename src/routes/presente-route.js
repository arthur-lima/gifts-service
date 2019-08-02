'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/presente-controller');

router.get('/', controller.buscarTodos);
router.post('/', controller.cadastrar);
router.post('/cadastrar-em-lote', controller.cadastrarEmLote);

module.exports = router;