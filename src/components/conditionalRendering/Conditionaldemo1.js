import React from 'react'

export default function Conditionaldemo1() {
    let x=5;
    return <>

          <h3>{x%2===0?`${x} is even`:`${x} is odd`}</h3>
    
    </>
}
