// This code represents the Route for updating an expense
const express = require('express');
const updateExpenseController = require('../controller/editExpenseController');
const router = express.Router();

router.put('/update/:id', updateExpenseController);

module.exports = router;
