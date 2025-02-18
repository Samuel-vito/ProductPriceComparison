import React, { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-bar">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for products..." />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};
export default SearchBar;
