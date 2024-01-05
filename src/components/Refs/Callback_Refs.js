// callback refs concept
import React from "react";

export default function Callback_Refs() {
  let myRef1, myRef2; //we just have to declare variables so that we can store the ref values inside them in callback ref

  let addition = () => {
    //   console.log(myRef1);
    const num1 = +myRef1.value; //we can directly collect the value as myRef.value in callback Ref
    const num2 = +myRef2.value;
    console.log(num1 + num2);
  };
  return (
    <>
      <div className="border-primary">
        Number1:<input type="number" ref={(ele) => (myRef1 = ele)} />{/*ele will capture the value and assign it to variable */}
        Number2:<input type="number" ref={(ele) => (myRef2 = ele)} />
        <button onClick={addition}>Add</button>
      </div>
    </>
  );
}
