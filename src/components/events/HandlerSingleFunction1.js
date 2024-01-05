import React, { useState } from "react";

export default function HandlerSingleFunction1() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState("");

  let addition = () => {
    setResult(`Addition of ${num1} & ${num2} is ${num1 + num2}`);
  };

  return (
    <>
      <h1>Addition Demo on click with event concept</h1>

     {/* we can directly write the arrow function to onchange attribute,which is heavily used for function component  */}
      <input name="num1" onChange={(e)=>{setNum1(+e.target.value)}} />
      <input name="num2" onChange={(e)=>{setNum2(+e.target.value)}} />
      <button onClick={addition}>Add the numbers</button>

      <div>{result}</div>
    </>
  );
}
