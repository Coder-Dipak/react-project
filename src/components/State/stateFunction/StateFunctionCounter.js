import React, { useState } from 'react'

export default function StateFunctionCounter() {
  let [counter,setcount]=useState(0);
  let increment=()=>{
    // setcount(counter+1) //if one time update only
    setcount((prevCount)=>prevCount+1);//this will increment from previous count for multiple batch update 
  }
  let increment5=()=>{
    // setcount(counter+5)
    increment();
    increment();
    increment();
    increment();
    increment();
  }
  return <>
  <h3>counter value is {counter}</h3>
  <button className='btn btn-primary' onClick={increment}>increment</button>
  <button className='btn btn-primary' onClick={increment5}>increment-5</button>
  </>
    
    
}

