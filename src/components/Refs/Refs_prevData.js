import React, { useEffect, useState } from "react";
import { useRef } from "react";

export default function Refs_prevData() {
  const [counter, setCounter] = useState(0);
  const myRef = useRef();//declare ref variable

  useEffect(() => {
    myRef.val = counter;//storing the counter value in the ref variable as the update will take place after it
  });
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="text-center">
      <div>acceesing the prev data thorough ref variables</div>
      <hr />
      <h2>Now:{counter},before:{myRef.val}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
