import React from "react";
import useCounter from "./hooks/useCounter";

export default function Quantity() {
  //   const counter = useCounter();
  //   console.log("counter => ", counter);

  const { count, increment, decrement } = useCounter();
  console.log(count);
  return (
    <div>
      <small>Quantity</small>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
