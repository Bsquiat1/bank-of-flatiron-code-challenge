import React from "react";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        onSearch(searchTerm);
      }, 1000);
  
      return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, onSearch]);
  
    return (
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    );
  }

  export default SearchBar