//we can write 2 types of forms:controlled(using onChange) & uncontrolled(using useRef)
//if we want to use collect the form dertail on evry keyup then use onChange method.
//if we want to collect the form details at once ,then use useRef()
import React, { useRef } from 'react'

//this is Uncontrolled form example:
export default function FormsUncontrolled() {
let ref1=useRef();
let ref2=useRef();

const submitMyform=(e)=>{  
        e.preventDefault();
        console.log(ref1.current.value,ref2.current.value)
}
  return <>
        <form onSubmit={submitMyform}>
            <p>name:    <input type='text'     defaultValue={'sachin'}  ref={ref1}/></p>
            <p>password:<input type='password'                          ref={ref2}/></p>

            {/* <input type='submit' value='LogIn'/>  */}
            <button>clickToSubmit</button>
            {/* inside form every button is considered submit button only */}
        </form>
  </>
}
