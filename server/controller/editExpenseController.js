// This code represents the Controller for updating an expense
const Expense = require('../models/expenseSchema');

const updateExpense = async (req, res) => {
  const { id } = req.params;
  const { name, description, category, dateExpense, expenseAmount } = req.body;

  if (!name || !description || !category || !expenseAmount) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    // Find the expense by ID and update the fields
    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      {
        name,
        description,
        category,
        dateExpense,
        expenseAmount
      },
      { new: true } // This option returns the updated document
    );

    if (!updatedExpense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json({ success: true, data: updatedExpense });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during update" });
    console.log(error);
  }
};

module.exports = updateExpense;
