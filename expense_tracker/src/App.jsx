import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import "./index.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now(),
      date: new Date().toISOString(),
    };
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const totalExpense = expenses.reduce((sum, e) => sum + parseFloat(e.amount || 0), 0);

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAdd={addExpense} />

      <div className="chart-container">
        <h3>Expense Breakdown</h3>
        <ExpenseChart data={expenses} />
        <p className="total-expense">
          Total Expense: <span>₹{totalExpense.toLocaleString("en-IN")}</span>
        </p>
      </div>

      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}
