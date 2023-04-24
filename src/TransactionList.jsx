import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';

function TransactionList(props) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Recent Transactions</h2>
      {transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionList;
