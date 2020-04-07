const express = require('express');
const router = express.Router();

const LoginController = require('../controller/LoginController');


/* GET users listing. */



router.post('/', LoginController.Login);



// eslint-disable-next-line no-undef
module.exports = router;
