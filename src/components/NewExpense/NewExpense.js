import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const saveExpenseDataHandler= newExpense =>{
        const expenseData = {
            ...newExpense,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

  return (
    <div className="new-expense">
      <ExpenseForm  onSaveData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
