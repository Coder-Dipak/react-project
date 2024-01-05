import React, { useEffect, useState } from 'react'

export default function AdditionDemo() {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [result, setResult] = useState(0);

    let changeHandler1 = (event) => {setNum1(event.target.value)}
    let changeHandler2 = (event) => {setNum2(event.target.value)}
    let addition = () => {setResult(+num1 + +num2)}
    
    //this useEffect will immediate the values with result so will give immediate result without clicking button
    useEffect(() => {   
        addition();
    })

return <>
    <h3>addition operation here</h3>
    <input onChange={changeHandler1} />
    <input onChange={changeHandler2} />
    <button onClick={addition}>Add</button>
    <p>addition of {num1} and {num2} is {result}</p>
</>
}
