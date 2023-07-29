const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },

  category: {
    type: String,
    required: true,
  },
  dateExpense: {
    type: Date,
    required: true,
  },
  expenseAmount: {
    type: Number,
    required: true,
  },
  
    
  
  
},
{
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

expenseSchema.plugin(uniqueValidator);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
