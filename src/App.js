import React, {useState} from "react";

import styles from  "./App.module.css";
import "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = expense => {

    setExpenses(prevState => {
      return [expense, ...prevState];
    })
  }

  const deleteExpenseHandler = expenseid => {
    setExpenses(prevState =>{
      const updatedExpense = prevState.filter(expense => expense.id !==expenseid)
      return updatedExpense;
    })
  }

  return (
    <div className={styles["App-header"]}>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses= {expenses} onDeleteItem = {deleteExpenseHandler} />
    </div>
  );
}

export default App;
