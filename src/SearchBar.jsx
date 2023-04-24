import React from 'react';

function SearchBar(props) {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    props.onSearch(query);
  };

  return (
    <div className="SearchBar">
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        onChange={handleSearch}
        placeholder="Enter search query"
      />
      <button type="button">Go</button>
    </div>
  );
}


export default SearchBar;
