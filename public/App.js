import React, { useState, useEffect } from "react";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const searchTransactions = (searchTerm) => {
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  const sortTransactions = (sortBy) => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
    setTransactions(sortedTransactions);
  };

  return (
    <div className="container">
      <h1>Transaction Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar searchTransactions={searchTransactions} />
      <TransactionTable
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        sortTransactions={sortTransactions}
      />
    </div>
  );
}

export default App;
