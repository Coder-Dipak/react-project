//we can write 2 types of forms:controlled(using onChange) & uncontrolled(using useRef)
import React, { useState } from 'react'

//this is controlled form example:
export default function FormsControlled() {
    const [name,setName]=useState('sachin');//2 state variables to hold the changing input data by user
    const [pwd,setPwd]=useState('1234');
    //if we want to use collect the form dertail on evry keyup then use onChange method.
    //if we want to collect the form details at once ,then use useRef()

     const submitMyform=(e)=>{   //this simple function will submit the form directly and refreshs the page
        console.log(name,pwd);
        e.preventDefault();//this will prevent the page reload after submiting the data.
     }
  return <>
        <form onSubmit={submitMyform}>{/* submitMyForm is a user-defined-function that will contain the logic   */}
            <p>name:<input type='text'        value={name} onChange={(e)=>{setName(e.target.value)}}/></p>
            <p>password:<input type='password' value={pwd} onChange={(e)=>{setPwd(e.target.value)}}/></p>

            {/* a submit button will look like this */}
            <input type='submit' value='LogIn' />  {/* <input type='submit' />   */}
        </form>
  </>
}
