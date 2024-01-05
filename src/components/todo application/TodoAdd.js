import React from 'react'

export default function TodoAdd({AddTodo}) {

  return <>
    <p>Id:  <input/></p>
    <p>Text:<input/></p>
    <button onClick={()=>{AddTodo({id:5,text:'todo-5'})}}>Submit</button>
    {/* here for now we are passing a harcoded object but please do it: collect the data from inputs and make it a object and pass it */}
  </>
}
