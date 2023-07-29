const express = require('express');
const Expenses = require('../models/expenseSchema');
// const Expense = require('../models/expenseSchema');
const router = express.Router();

router.get("/getAllExpenses", async (req, res) => { // Update the route to '/'
  
  try {
    const Expense=await Expenses.find({});
    res.send({status:"ok", data:Expense});
    }
   catch (error) {
    res.status(500).json({ message: "An error accured during displaying" });
    console.log(error);
  }
});

module.exports = router;
