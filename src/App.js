import React, { useState, useEffect } from "react";
import TransactionsTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
import TransactionsRow from "./TransactionsRow";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setFilteredTransactions([...filteredTransactions, transaction]);
  };

  const handleSearchTermChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filteredTransactions);
  };

  const handleSort = (column) => {
    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
    setFilteredTransactions(sortedTransactions);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <h1>Bank Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar searchTerm={searchTerm} onSearchTermChange={handleSearchTermChange} />
      <TransactionsTable
        transactions={filteredTransactions}
        onSort={handleSort}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
