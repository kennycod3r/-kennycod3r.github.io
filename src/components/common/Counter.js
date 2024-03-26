// Counter.js
//import React, { useState, useEffect } from "react";

function Counter({count}) {
  //const [PreviousCount, setPreviousCount] = useState(350);
  return (
    <>
      <div className="counter--sec">
        <h1 className={`counterLabel ${count > 0 ? "decreasing" : ""}`}>
          + ${count}
        </h1>
      </div>
      <p style={{ fontSize: "small", color: "darkgray" }}>
        last refreshed 20mins ago
      </p>
    </>
  );
}

export default Counter;
