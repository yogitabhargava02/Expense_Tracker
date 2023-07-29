const express = require('express');
const Expense = require('../models/expenseSchema');
const router = express.Router();

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json({ success: true, data: deletedExpense });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during delete" });
    console.log(error);
  }
};

module.exports = deleteExpense;
