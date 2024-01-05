import React from 'react'

export default function EventDemo3() {
    const printMsg = () => {
      console.log("PrintMsg function called...");
    };

    const addition = (a,b) => {//addition function needs 2 parameters to be invoked
        console.log(`result is ${a+b}`)
    }
    return (
      <>
        <h1>Event Demo-1</h1>
        {/* <button onClick={printMsg()}>Click me</button> */} {/* will be invoked on page load itself */}

        <button onClick={printMsg}>function without parameter</button>             
         {/* this is fine as we are not passing any parameters and if w e would have to we cant add '()' as it will be invoked on page load  */}
        
        {/* <button onClick={addition(2,3)}>Add</button> */}
        {/* this will immediately invoke the function without button calling */}

        <button onClick={()=>{addition(2,3)}}>function with parameters</button>
        {/* to avoid invocation on load with parameters we write the finction inside a anonymous function/arrow function ()=>{} */}



      </>
    );
  }
