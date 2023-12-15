import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const initExpenses = [
  {
    title: "Toilet Paper",
    amount: 1.67,
    date: new Date(2020, 2, 14),
    id: "e1",
  },
  { title: "New TV", amount: 24.67, date: new Date(2021, 2, 12), id: "e2" },
  {
    title: "Car Insurance",
    amount: 123.67,
    date: new Date(2021, 2, 28),
    id: "e3",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
