const express = require('express');
const registerUserController = require('../controller/registerController');
const router = express.Router();

router.post("/", registerUserController);

module.exports = router;
