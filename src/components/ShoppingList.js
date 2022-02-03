import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [selectedText, setSelectedText] = useState("");

  function handleTextChange(event) {
    setSelectedText(event.target.value);
  }

  const itemsToDisplay = items
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter(
      (item) => item.name.toLowerCase().includes(selectedText.toLowerCase()));  
  ;
  return (
    <div className="ShoppingList">
      <ItemForm 
        onSubmit={onItemFormSubmit} />
      <Filter 
        selectedText={selectedText}
        onCategoryChange={handleCategoryChange} 
        onTextChange = {handleTextChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
