import React from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className={styles["new-expense"]}>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
