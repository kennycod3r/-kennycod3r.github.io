// Counter.js
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={`counterLabel ${count > 0 ? "decreasing" : ""}`}>
      + ${count}
    </h1>
  );
}

export default Counter;
