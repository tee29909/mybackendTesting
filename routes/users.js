const express = require('express');
const router = express.Router();
const usersController = require('../controller/UsersController');



/* GET users listing. */
router.get('/', usersController.getUsers);
router.get('/:id',usersController.getUser);
router.post('/', usersController.addUser);
router.put('/', usersController.updateUser);
router.delete('/:id',usersController.deleteUser);




// eslint-disable-next-line no-undef
module.exports = router;
