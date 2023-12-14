import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Toilet Paper", amount: 294.67, date: new Date(2020, 2, 14) },
    { title: "New TV", amount: 294.67, date: new Date(2021, 2, 12) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("div", {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
