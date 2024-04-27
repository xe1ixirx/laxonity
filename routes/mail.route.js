const express = require('express');
const routerUsr = express.Router();
const routerMail = express.Router();
const { postUsr, postMail } = require('../controllers/mail.controller.js')

routerUsr.post('/', postUsr);
routerMail.post('/', postMail);


module.exports = { routerUsr, routerMail }


