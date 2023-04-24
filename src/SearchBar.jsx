import React from 'react';

function SearchBar(props) {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    props.onSearch(query);
  };

  return (
    <div>
      <label htmlFor="search">Search by amount:</label>
      <input
        id="search"
        type="text"
        onChange={handleSearch}
        placeholder="Enter search query"
      />
    </div>
  );
}

export default SearchBar;
