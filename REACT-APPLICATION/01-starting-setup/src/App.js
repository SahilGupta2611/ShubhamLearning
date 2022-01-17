import { useState } from "react";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
// import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "bike insurance",
    amount: 294,
    date: new Date(2021, 11, 27),
  },
  {
    id: "e2",
    title: "truck insurance",
    amount: 948,
    date: new Date(2021, 4, 17),
  },
  {
    id: "e3",
    title: "car insurance",
    amount: 24,
    date: new Date(2020, 8, 20),
  },
  {
    id: "e4",
    title: "motor insurance",
    amount: 894,
    date: new Date(2019, 1, 7),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <Card>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
