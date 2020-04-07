const express = require('express');
const router = express.Router();

const MoneyController = require('../controller/MoneyController');


/* GET users listing. */


router.get('/', MoneyController.getMoneys);
router.get('/:id',MoneyController.getMoney);
router.post('/', MoneyController.addMoney);
router.put('/', MoneyController.updateMoney);
router.delete('/:id',MoneyController.deleteMoney);



// eslint-disable-next-line no-undef
module.exports = router;
