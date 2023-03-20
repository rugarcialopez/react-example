import React from "react";
import "./ExpenseItem.css";

type ExpenseItemProps = {
  title: string;
  amount: number;
  date: Date;
};

const ExpenseItem = (props: ExpenseItemProps) => {

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
