
const express = require('express');
const router = express.Router();
const createExpenseController = require('../controller/createExpenseController');

router.post('/', createExpenseController);

module.exports = router;
