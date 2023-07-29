const express = require('express');
const Expense = require('../models/expenseSchema');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, description, category, dateExpense, expenseAmount } = req.body;

  if (!name || !description || !category || !dateExpense || !expenseAmount) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const data = {
      name,
      description,
      category,
      dateExpense,
      expenseAmount
    };
  
    await Expense.create(data);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during registration" });
    console.log(error);
  }
});

module.exports = router;
