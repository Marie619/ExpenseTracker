import React, { useState, Fragment } from "react";
import styles from "./ExpenseForm.module.css";
import ErrorModal from "../UI/ErrorModal";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");
  const [error, setError] = useState();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); // to prevent the default reqeust sending on pressing button

    if (
      enteredTitle.trim.length === 0 ||
      enteredAmount.trim.length === 0 ||
      enteredDate.trim.length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid data (Non Empty)"
      });
    }
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveData(expense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const setErrorHandler = (props) => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={setErrorHandler}
        ></ErrorModal>
      )}

      <form onSubmit={submitHandler}>
        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className={styles["new-expense__control"]}>
            <label>Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
        </div>
        <div className={styles["new-expense_actions"]}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
