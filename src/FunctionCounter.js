import React from "react";
import { useState } from "react";

// const getInitialState = () => 0;
export default function FunctionCounter() {
//   const [count, setCount] = useState(getInitialState);
  const [count, setCount] = useState(0);
  

  return (
    <div>
      <small>Function Counter</small>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

