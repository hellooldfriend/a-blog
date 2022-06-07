import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <input
      className="search_input"
      type="text"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;