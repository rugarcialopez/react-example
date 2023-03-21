import React from 'react';
import Expenses from './components/Expenses/Expenses';
// import Expenses  from './components/ExpenseItem/ExpenseItem';
import { expenses } from './helpers/utils';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Expenses items={expenses}/>
      {/* <Expen */}
      {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/> */}
      {/* <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem /> */}
    </div>
  );
}

export default App;
