const express = require('express');
const router1 = express.Router();
const { postUsr } = require('../controllers/mail.controller.js')

router1.post('/', postUsr);


module.exports = router;


