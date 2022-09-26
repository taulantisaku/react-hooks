import  { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 10) {
      return;
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };
  return{
    // count: count,
    // increment: increment,
    // decrement: decrement
     count,
     increment,
     decrement
    }
}
