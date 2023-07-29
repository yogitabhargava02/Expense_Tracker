const express = require('express');
const deleteExpenseController = require('../controller/deleteExpenseController');
const router = express.Router();

router.delete('/delete/:id', deleteExpenseController);

module.exports = router;
