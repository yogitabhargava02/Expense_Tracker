import React, { useState, useEffect } from "react";
import "./Home.css";
import CreateExpenseForm from "./Expenses/CreateExpenseForm";
import ExpenseTable from "./Expenses/ExpenseTable";
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [NewExpense, setNewExpense] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const location = useLocation(); // Use useLocation instead of useNavigate
  const loggedInUser = location.state?.loggedInUser || ''; // Get the logged-in user's email from the location state
  // ... (existing code)
  useEffect(() => {
    fetch("http://localhost:8000/getAllExpenses", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "expenseData");
        setExpenseData(data.data);
      });
  }, []);

  const handleCreateNewExpense = () => {
    setNewExpense(true);
  };

  const handleCloseModal = () => {
    setNewExpense(false);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div>
        
        <div className="mt-8 flex justify-end space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleCreateNewExpense}
          >
            Create New Expense
          </button>
        </div>

       
      </div>

      {NewExpense && <CreateExpenseForm onClose={handleCloseModal} />}
      <ExpenseTable
        expenseData={expenseData}
        searchInput={searchInput}
        selectedDate={selectedDate}
        loggedInUser={loggedInUser} 
      />
    </>
  );
}
