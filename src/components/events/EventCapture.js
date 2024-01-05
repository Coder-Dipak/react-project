import React from 'react'

export default function EventCapture() {
  return <>
  {/* this is EventBubbling as onclick used */}
  <div onClick={()=>{console.log('div clicked')}}>
    this is a div
    <p onClick={()=>{console.log('para clicked')}}>
        this is a paragraph
       <span onClick={()=>{console.log('span clicked')}}>
        this is a span
         <button onClick={(e)=>{console.log('button clicked');e.stopPropagation()}}>this is a button</button>{/* to strop the eventpropagation event.stopPropagation() */}
       </span>
    </p>
    </div></>
}
// OnClick-->onClickCapture :EventCapture will happen,this onClickCapture is unique to react only
