import React,{useEffect, useState} from 'react'

export default function ToggleDemo() {
    let [flag,setFlag]=useState(true);
    let toggleFlag=function(){
      setFlag(!flag);//updating function is a async function so if we want to print any element after it we should use useEffect() 
    }
    useEffect(()=>{  //for printing the updated values
        console.log(flag);
    })
  return <>
  {flag?
  <h3>this is the magic paragraph operated by below button</h3>:null
  }
<button className='btn btn-primary' onClick={toggleFlag}>{flag?'hide':'show'}</button>
  </>
}
