const express = require('express');
const router = express.Router();
const { postUsr } = require('../controllers/mail.controller.js')

router.post('/', postUsr);


module.exports = router;


