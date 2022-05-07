import React from 'react'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpenseChart from './ExpenseChart'
import ExpensesList from './ExpenesList'


const Expenses = (props) => {
   const[filteredYear, setFilteredYear] = useState('2019')
    const updateFilter = (selectedYear) => {
setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    })
   
   
        return(
            <div>
            <div className="expenses">
                <ExpenseFilter selectYear = {filteredYear} onUpdateFilter = {updateFilter}/>
                <ExpenseChart expenses = {filteredExpenses}/>
               <ExpensesList items={filteredExpenses} />
             
  
    </div>
    </div>
        )
}
export default Expenses