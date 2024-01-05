import React from "react";

export default function EventDemo1() {
  const printMsg = () => {//printMsg is a variable,inside a functon is stored
    console.log("PrintMsg function called...");
  };
  return (
    <>
      <h1>Event Demo-1</h1>
      <button onClick={printMsg}>Click me</button>   
      {/* calling the variable only execute the function on button click only */}

      {/* <button onClick={printMsg()}>Click me</button>  */}
      {/* it will be executed immediately on page load */}
    </>
  );
}

