// SortUsers.js
import React from "react";

function SortUsers({ onSort }) {
  const handleSortChange = (event) => {
    const value = event.target.value;
    onSort(value);
  };

  return (
    <div className="sort-bar">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="login">Login Name</option>
        <option value="id">ID</option>
      </select>
    </div>
  );
}

export default SortUsers;
