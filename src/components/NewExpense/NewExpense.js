import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const AddExpenseForm = (expenseData) => {
const expense = {
    ...expenseData,
    id:Math.random().toString()
}
props.onUpdteExpenseForm(expense);
}
return(
    <div className="new-expense">
        <ExpenseForm onAddExpenseForm = {AddExpenseForm}/>
    </div>
)
}


export default NewExpense;