import React from 'react';
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DummyExpenses = [
  {
    id: 'e1',
    title: 'Tissue',
    amount: 44.33,
    date: new Date(2020, 2, 3)
  },
  {
    id: 'e2',
    title: 'Placement',
    amount: 44.11,
    date: new Date(2019, 4, 2)
  },
  {
    id: 'e3',
    title: 'Reggae',
    amount: 44.22,
    date: new Date(2021, 9, 8)
  },
  {
      id: 'e4',
      title: 'Gunna',
      amount: 200,
      date: new Date(2022, 5, 6)
  }
]

function App() {
 const[expenses, setExpenses] = useState(DummyExpenses)
 const updteExpenseForm = (expense) => {
setExpenses((prevExpense) => {
  return[expense, ...prevExpense]
})
 }
  
  return(
    <div>
      <NewExpense onUpdteExpenseForm = {updteExpenseForm}/>
    <Expenses items={expenses} />
    
    </div>
  )
}
export default App;
