import React from 'react';
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <ExpenseItem title="Card insurance" amount={294.67} date={new Date()}/>
      {/* <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem /> */}
    </div>
  );
}

export default App;
