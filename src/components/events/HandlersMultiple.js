import React, { useState } from "react";

export default function Handlers1Multiple1() {
  let [num1, setNum1] = useState(0);   //3 changing variables (num1,num2,result) in useState method
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState("");//values will be added to default empty string

  let changeHandler1 = (event) => {
    let value = +event.target.value;  //+ for changing strings to number
    setNum1(value);//updating num1 varible
  };
  let changeHandler2 = (event) => {let value = +event.target.value;
    setNum2(value);
  }
  let addition =()=>{
                 setResult(`Addition of ${num1} & ${num2} is ${num1 + num2}`
                          );};

  return <>
      <h1>Addition Demo on click with event concept</h1>

     {/* here we are writing multiple changeHandlers to fetch changing variable */}
      <input onChange={changeHandler1} />
      <input onChange={changeHandler2} />
      <button onClick={addition}>Add the numbers</button>
      
      {/* <div>addition of {num1} and {num2} is {num1+num2}</div> */}

      <div>{result}</div>
      {/* result<=setResult() */}
    </>
}
