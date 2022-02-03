import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onSubmit}){
  const [newItem, setNewItem] = useState('');
  const [newItemCategory,setNewItemCategory] = useState('Produce');

  function handleNewTextChange(event) {
    setNewItem(event.target.value);
  }

  function handleNewItemCategoryChange(event) {
    setNewItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      id: uuid(),
      newItem,
      newItemCategory,
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={newItem}
          onChange={handleNewTextChange}
          />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newItemCategory}
          onChange={handleNewItemCategoryChange}>          
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
