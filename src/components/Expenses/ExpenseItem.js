import React  from "react";

import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  console.log(props.expense);

  const deleteExpenseHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={styles["expense-item__description"]}>
          <h2 className={styles["expense-item__description h2"]}>{props.title}</h2>
          <div className={styles["expense-item__price"]}>${props.amount}</div>

          <button className={styles["delete-button"]} onClick={deleteExpenseHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
