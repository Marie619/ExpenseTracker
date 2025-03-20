import React from "react";
import styles from "./NewExpense.module.css";
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
    <div className={styles["new-expense"]}>
      <ExpenseForm  onSaveData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
