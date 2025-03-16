import React,{useState} from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";



const ExpenseItem = (props) => {
  const [deleteExpense,setDeleteExpense]= useState([props.expense]);

  console.log(props.expense);

  const deleteExpenseHandler = (event) =>{
    const updatedExpense = deleteExpense.filter(item => item !==event.target.value);
    setDeleteExpense(updatedExpense);
    
  }


  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item__description h2">{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <div className="expense-item__delete" onClick={deleteExpenseHandler}>Delete</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
