import React from "react";

function SearchBar({ onSortChange, onFilterChange }) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="alphabetical"
          name="sort"
          onChange={() => onSortChange("alphabetical")}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          onChange={() => onSortChange("price")}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
