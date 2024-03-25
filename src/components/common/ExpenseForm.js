// ExpenseForm.js
import React, { useState } from 'react';

function ExpenseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    setNewExpense: 0,
    itemBought: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ setNewExpense: 0, itemBought: '' });
  };

  return (
    <form className="counter--sec fc" onSubmit={handleSubmit}>
      <input
        className="count--input"
        name="setNewExpense"
        value={formData.setNewExpense}
        onChange={handleInputChange}
        type="number"
      />
      <input
        placeholder="item bought"
        className="count--input2"
        onChange={handleInputChange}
        value={formData.itemBought}
        name="itemBought"
      />
      <button className="reduceExp fc">Save</button>
    </form>
  );
}

export default ExpenseForm;
