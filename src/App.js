import React, { useState } from 'react';
import TransactionList from './TransactionList';
import SearchBar from './SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
