import React, { useState } from "react";

export default function HandlerSingleFunction0() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState("");

  let changeHandler = (event) => {
    let value = +event.target.value;
    let name = event.target.name;
    /* as in functional component update through multiple setter functions 
    we have to invoke setter on condition but it is also not good to practice*/
    if (name === 'num1') {
      setNum1(value);
    } else{
      setNum2(value);
    }
  };
  let addition = () => {
    setResult(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
  };

  return (
    <>
      <h1>Addition Demo on click with event concept</h1>

      <input name="num1" onChange={changeHandler} />
      <input name="num2" onChange={changeHandler} />
      <button onClick={addition}>Add the numbers</button>

      <div>{result}</div>
    </>
  );
}
