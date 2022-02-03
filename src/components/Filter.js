import React from "react";

function Filter({ selectedText, onCategoryChange, onTextChange }) {
  function handleSearchChange(event) {
    // we could pass up the whole event object via onSearchChange
    // but passing *only* the value makes the data easier to work with in the parent
    onTextChange(event.target.value);
  }
  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..."
        value={selectedText}
        onChange={onTextChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
