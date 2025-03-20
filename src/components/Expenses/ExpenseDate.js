import styles from "./ExpenseDate.module.css";


const ExpenseDate =(props)  => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
    </div>
  );
}

export default ExpenseDate;
