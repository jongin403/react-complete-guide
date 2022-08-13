import React from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

const NewExpense = () => {
  return (
    <div clasName='new-expense'>
      <ExpenseForm />
    </div>
  )
};

export default NewExpense;