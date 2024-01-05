import React from "react";
import { useState } from "react";

export default function Hover() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>In Click Counter Component - count is {count}</h2>
      <button onMouseOver={increment}>Hover me To Increment</button>
    </>
  );
}