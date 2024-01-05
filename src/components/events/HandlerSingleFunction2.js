import React, { useState } from "react";

export default function HandlerSingleFunction2() {
  /* let [num1, setNum1] = useState(0);  
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState("");*/

// we can also shorten above by passing a single object to useState()
let [obj,setObj]=useState({num1:0,num2:0,result:''})

let changeHandler=(event)=>{
  // let newObj={...obj,num1:event.target.value}
  let newObj={...obj,[event.target.name]:event.target.value}
     setObj(newObj);
}

let addition = () => {
    setObj({...obj,result:`Addition of ${obj.num1} & ${obj.num2} is ${obj.num1 +obj.num2}`});
};

  return (
    <>
      <h1>Addition Demo on click with event concept</h1>

      <input name="num1" onChange={changeHandler} />
      <input name="num2" onChange={changeHandler} />
      <button onClick={addition}>Add the numbers</button>

      <div>{obj.result}</div>
    </>
  );
}
