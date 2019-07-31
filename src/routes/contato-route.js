'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');

router.get('/', controller.get);
router.get('/:nome', controller.getPorNome);
router.get('/admin/:id', controller.getPorID);
router.get('/pessoal/:email', controller.getPorEmail);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.delete);

module.exports = router;