import React, { useState } from 'react';

function AddTransactionForm(props) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      name: name,
      amount: parseFloat(amount)
    };

    props.onAddTransaction(newTransaction);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </div>
      <div>
        <button type="submit">Add Transaction</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default AddTransactionForm;
