var express = require('express');
var router = express.Router();
var UserController = require('../modules/user/user.controller');

router.get('/', UserController.getUsers);

module.exports = router;
