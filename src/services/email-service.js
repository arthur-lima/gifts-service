'use strict'

const config = require('../config');
const sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (destinatario, assunto, corpo) => {
    sendgrid.send({
        to: destinatario,
        from: 'arthuredani@casamento.io',
        subject: assunto,
        html: corpo
    });
}