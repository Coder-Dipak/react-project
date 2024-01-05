import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default function Parent() {
    const[a,setA]=useState(10);
    const[name,setName]=useState('Banalata')

    const f1=function(){
        console.log('i am f1 from parent component')
    }
    const updateName= function(newName){//this is a parameterizes callback function so child has to pass parameter to access it
         setName(newName);
    }//whenever state value(for parent),props(for child),the respective components will be re-rendered by react
    
  return (
    <h4 className='border border-dark text-center m-2 p-3'>This is parent component:
    <p>my variable a is : {a}</p>
    <p>my name is :{name}</p>

    <div className='row'>
        <div className='col'>
         <Child1 a={a} f1={f1} updateName={updateName}/>      {/* we can change the names while passing to child  like fChild={f1}*/}
        </div>
        <div className='col'>
         <Child2 a={a} name={name} />
        </div>
         
    </div>
    </h4>
  )
}
