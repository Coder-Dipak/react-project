import React from 'react'

export default function PropsDestructuringFunction(props) {//we can replace props={name,msg} too directly,same meaning & no need of next line
    let {name,msg}=props
//   return <h2> Hi {props.name},{props.msg}</h2>
  return <h2> Hi {name},{msg}</h2>
  
}
