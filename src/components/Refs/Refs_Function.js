import React, { useRef } from 'react'

export default function Refs_Function() {
    const myRef1=useRef();//useRef() is ahook not a lifecycle hook
    const myRef2=useRef();
    let addition=()=>{
          console.log(myRef1)
        const num1=+myRef1.current.value;//catching the reference variable into a variable num1 & num2
        const num2=+myRef2.current.value;
        console.log(num1+num2)
        }

  return <>
    <div className='border-primary'>
        Number1:<input type='number' ref={myRef1}/>
        Number2:<input type='number' ref={myRef2}/>
        <button onClick={addition}>Add</button>
    </div>
  </>
}
