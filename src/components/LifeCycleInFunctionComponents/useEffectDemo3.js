import React, { useState } from "react";
import { useEffect } from "react";

export default function UseEffectDemo3() {
  const [a, setA] = useState(10);

  useEffect(() => {
    console.log(" useEffect called:Mounted/Updated...");

    return () => {//unmount will happen with return statement :whenever component is disabled from the parent flag button unmpont method called automatically
      console.log("useEffect called:Unmounted");
    };
  });
  // whenever component gets updated,it first got unmounted then gets re-rendered
  
  return (
    <>
      <h1>UseEffectDemo1 Component</h1>
      <h2>a-{a}</h2>
      <button onClick={() =>{setA(a + 1);}}>increment-a</button>
    </>
  );
}