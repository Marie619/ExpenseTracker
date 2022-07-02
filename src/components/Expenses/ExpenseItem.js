import React from "react";
import styles from "./ExpenseItem.module.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  //Using state to change the value of title on UI

  return (
    <Card className={styles["expense-item"]}>
      <ExpenseDate date={props.date} />
      <div className={styles["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={styles["expense-item__price"]}>{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
