import React from "react";
import './ExpenseForm.css';
import { useState } from "react";


const ExpenseForm = (props) => {

const[enteredTitle, setEnteredTitle] = useState('')
const[enteredAmount, setEnteredAmount] = useState('')
const[enteredDate, setEnteredDate] = useState('')

const titleChangeHandler = (event) => {
setEnteredTitle(event.target.value);
}
const amountChangeHandler = (event) => {
setEnteredAmount(event.target.value);
}
const dateChangeHandler = (event) => {
setEnteredDate(event.target.value);
}
const submitHandler = (event) => {
event.preventDefault();
const expenseData = {
    title: enteredTitle,
    amount: +enteredAmount,
    date: new Date(enteredDate)
}
props.onAddExpenseForm(expenseData)
setEnteredTitle('');
setEnteredAmount('');
setEnteredDate('');
}
    return(
        
            <form onSubmit={submitHandler}>
                <div className="new-expense-controls">
                <div className="new-expense-control">
                <label>Title</label>
                <input type= 'text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense-control">
                <label>Amount</label>
                <input type= 'number' min ='0.01' step='0.01' value={enteredAmount}  onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense-control">
                <label>Date</label>
                <input type= 'date' value={enteredDate} onChange={dateChangeHandler} ></input>
                </div>
                <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
                </div>
                </div>
            </form>
        
    )
}
export default ExpenseForm;