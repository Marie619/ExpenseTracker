import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenseList.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete = {props.onDelete}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
