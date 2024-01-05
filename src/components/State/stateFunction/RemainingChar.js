import React, { useState } from 'react'

export default function RemainingChar() {
  let [remaining,setRemain]=useState(100);// bydefault remaining value is 100

  let changeHandler=(event)=>{
      let msg=event.target.value;
      setRemain(100-msg.length);//setRemain always the value to remaining which is changing time to time
  }

  return <>
  <textarea onKeyUp={changeHandler} maxLength={100} rows={5} cols={30} ></textarea>
  <span>Remaining Characters are {remaining}</span>
  </>
}
