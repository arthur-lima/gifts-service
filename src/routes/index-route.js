'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Gifts",
        version: "0.0.0"
    });
});

module.exports = router;