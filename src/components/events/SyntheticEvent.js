import React from 'react'

export default function SyntheticEvent() {
    function f1(event){
   console.log(event);//SyntheticBaseEvent{..,..,PointerEvent,..etc}
    }
  return <>
  <button onClick={f1}>click me</button>
  </>
}
// in normalEvent there is cross browser compatibility ussues,so react peoples costomized it and made syntheticEvent to address the issue
