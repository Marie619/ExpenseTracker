import React from "react";
import Card from "./Card";
import classes from "./ConfirmModal.module.css";

const ConfirmModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.negative}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button
            type="submit"
            className={classes["pos"]}
            onClick={props.positive}
          >
            Confirm
          </button>
          <button
            type="submit"
            className={classes["neg"]}
            onClick={props.negative}
          >
            Cancel
          </button>
        </footer>
      </Card>
    </div>
  );
};

export default ConfirmModal;
