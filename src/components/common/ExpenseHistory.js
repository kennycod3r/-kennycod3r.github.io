// ExpenseHistory.js
import React from "react";

function ExpenseHistory({ history }) {
  return (
    <div className="expense-history">
      {history.map((item, index) => (
        <>
          {item.itemDates && <p className="item--date">{item.itemDates}</p>}
          <div key={index} className="expense-item item--bought fsb">
            <p className="color--div">{item.itemBought}</p>
            <p>{item.dateBought}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default ExpenseHistory;
