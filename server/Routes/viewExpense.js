const express = require('express');
const viewExpenseController = require('../controller/viewExpenseController');
const router = express.Router();

router.get("/getAllExpenses", viewExpenseController);

module.exports = router;
