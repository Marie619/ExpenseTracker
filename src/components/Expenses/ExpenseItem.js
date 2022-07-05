import React, { useState } from "react";
import styles from "./ExpenseItem.module.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ConfirmModal from "../UI/ConfirmModal";

const ExpenseItem = (props) => {
  //Using state to change the value of title on UI
  const [confirm, setConfirm] = useState(false);

  const onDeleteExpense = () => {
    props.deleteExpenseItem(props.id);
  };

  const clickHandler = () => {
    setConfirm(true);
  };
  const onCancelHandler = () => {
    setConfirm(null);
  };

  return (
    <div>
      {confirm && (
        <ConfirmModal
          title="Confirmation"
          message="Do you want to delete this item?"
          positive={onDeleteExpense}
          negative={onCancelHandler}
        />
      )}
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={props.date} />
        <div className={styles["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={styles["expense-item__price"]}>{props.amount}</div>
          <button
            className={styles["expense-item__delete"]}
            onClick={clickHandler}
          >
            Delete
          </button>
        </div>
      </Card>
    </div>
  );
};

export default ExpenseItem;
