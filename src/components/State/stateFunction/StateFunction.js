import React,{useState} from 'react'

export default function StateFunction() {
    let [counter,setCounter]=useState(0);
    // useState is a function or hook that will hold initial value of variable 
    // and returns an array of variable and update-operation-function

    let increment=()=>{
          setCounter(counter+1);                    
      }
  return <>
  <h3>this is for explaining a Function component with state and useState()</h3>

  <div>counter value is : {counter}</div>
  <button className='btn btn-primary' onClick={increment}>click me for increment</button>

  </>
}

