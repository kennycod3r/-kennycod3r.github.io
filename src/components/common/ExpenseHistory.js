// ExpenseHistory.js
import React from 'react';

function ExpenseHistory({ history }) {
  return (
    <div className="expense-history">
      {history.map((item, index) => (
        <div key={index} className="expense-item">
          <p>{item.itemBought}</p>
          <p>{item.dateBought}</p>
          {item.itemDates && <p>{item.itemDates}</p>}
        </div>
      ))}
    </div>
  );
}

export default ExpenseHistory;
