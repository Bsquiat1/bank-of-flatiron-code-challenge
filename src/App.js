import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import AddTransactionForm from './AddTransaction';
import TransactionTable from './TransactionTable';
import './App.css'


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.log(error));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
      .then(response => response.json())
      .then(data => setTransactions([...transactions, data]))
      .catch(error => console.log(error));
  };


  return (
    <div>
      <h1>Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={transactions} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      
    </div>
  );
}

export default App;
