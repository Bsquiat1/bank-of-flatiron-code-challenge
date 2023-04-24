import React, { useState } from 'react';

function AddTransactionForm(props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      description: description,
      amount: parseFloat(amount),
      date: date,
      category: category,
    };

    props.onAddTransaction(newTransaction);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="string" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </div>
        <div>
        <label htmlFor="category">Category:</label>
        <input type="string" id="category" value={category} onChange={(event) => setCategory(event.target.value)} />
      </div>
      
      
      
      <div>
        <button type="submit">Add Transaction</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default AddTransactionForm;
