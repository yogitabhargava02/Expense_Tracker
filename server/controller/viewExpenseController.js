const Expenses = require('../models/expenseSchema');

const getAllExpenses = async (req, res) => {
  try {
    // Fetch all expenses from the database
    const expenses = await Expenses.find({});

    // Send the data back to the client as a JSON response
    res.json({ status: "ok", data: expenses });
  } catch (error) {
    // Handle errors and send an error response if needed
    res.status(500).json({ message: "An error occurred during displaying" });
    console.log(error);
  }
};

module.exports = getAllExpenses;
