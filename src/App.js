import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  ];

  return (
    <div>
      <div>Let's get started!</div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
