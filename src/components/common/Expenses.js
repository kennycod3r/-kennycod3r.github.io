import React, { useState, useEffect } from "react";
import add from "../../images/add.svg";
import analytics from "../../images/analytics.svg";
import calendar from "../../images/calendar.svg";
import Counter from "./Counter";
import ExpenseEmoji from "./ExpenceEmoji";
import ExpenseHistory from "./ExpenseHistory";
import ExpenseForm from "./ExpenseForm";
import "./Expenses.css";
import PhoneHeader from "./PhoneHeader";

function Expenses() {
  const [expesesEmoji] = useState([
    "👕 Clothes",
    "⛱ Vacation",
    "💊 Health",
    "🍕 Food",
  ]);
  const [history, setHistory] = useState([
    { itemBought: "balmain Shirt", dateBought: "10:00 AM", itemDates: "Mar 5" },
    {
      itemBought: "balmain Shirt",
      dateBought: `0${Math.round(Math.random() * 9)}:00 PM`,
    },
    {
      itemBought: "balmain Shirt",
      dateBought: `0${Math.round(Math.random() * 9)}:00 PM`,
    },
    {
      itemBought: "balmain Shirt",
      dateBought: `0${Math.round(Math.random() * 9)}:00 PM`,
      itemDates: "Mar 5",
    },
  ]);

  const [receivedExpenseItem, setReceivedExpenceItem] = useState(
    expesesEmoji[0]
  );
  const [btnClicked, setBtnClicked] = useState(false);

  const handleAddExpense = (expenseLabel) => {
    setReceivedExpenceItem(expenseLabel);
    setBtnClicked(!btnClicked);
  };

  //const [oldCount] = useState(350);
  const [count, setCount] = useState(350);



  

  const handleFormSubmit = (formData) => {
    setHistory([...history, formData]);
    setBtnClicked(false);
    setCount((prevState) => {
      return prevState - formData.setNewExpense;
    });
    console.log(count)
  };

  return (
    <>
      <div className="phone">
        <PhoneHeader />
        {!btnClicked ? (
          <Counter count={count} />
        ) : (
          <ExpenseForm onSubmit={handleFormSubmit} />
        )}
        <div className="expenseItem--section">
          {!btnClicked ? (
            expesesEmoji.map((item, index) => (
              <ExpenseEmoji
                key={index}
                expenseLabel={item}
                handleAddExpense={handleAddExpense}
              />
            ))
          ) : (
            <div className="fixed--add--exp">
              <div className="fsb">
                <p>{receivedExpenseItem}</p>
                <div onClick={() => setBtnClicked(!btnClicked)}>
                  <img
                    className={`svg sideSvg ${btnClicked ? "rotate" : ""}`}
                    src={add}
                    alt="user--add"
                  />
                </div>
              </div>
              <ExpenseHistory history={history} />
            </div>
          )}
        </div>
        <div className="flex other">
          <img className="svg" src={analytics} alt="analytics" />
          <button className="reduceExp fc">OTHER</button>
          <img className="svg" src={calendar} alt="calendar" />
        </div>
      </div>
    </>
  );
}

export default Expenses;

