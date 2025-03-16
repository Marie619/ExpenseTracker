import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2025");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpenseChart expenses = {filteredExpenses} />      
      <ExpensesList expenseList = {filteredExpenses} />
    </Card>
  );
};

export default Expenses;
