import React, {useState } from 'react'

export default function CompFunction() {
    let [color,setColor]=useState('red')
    let ChangeColor=()=>{
     setColor('red')
    }
    return <>
       <div>{console.log('render() method called')}</div>
      <div>color value is {color}</div>
      <button onClick={ChangeColor}>change color</button>
    </>
  
}
// all the function component bydefault pure componets so we dont have to worry much


