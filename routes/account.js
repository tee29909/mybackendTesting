const express = require('express');
const router = express.Router();

const AccountController = require('../controller/AccountController');


/* GET users listing. */



router.post('/deposit', AccountController.Deposit);
router.post('/withdraw', AccountController.Withdraw);



// eslint-disable-next-line no-undef
module.exports = router;
