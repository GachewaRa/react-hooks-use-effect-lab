// SearchUsers.js
import React, { useState } from "react";

function SearchUsers({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by Login Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchUsers;
