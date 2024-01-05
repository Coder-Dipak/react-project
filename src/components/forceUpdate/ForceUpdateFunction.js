import React from 'react'

export default function ForceUpdateFunction() {
   let counter=0;
   let increment=()=>{
    counter=counter+1;
    console.log(counter);
    // in functional component there is no method like forceUpdate() concept  so wn cant update focibly in any manner
  }

  return <>
  <div>[In function Component:forceUpdate() method not availble]</div>

  <div>counter value is :{counter}</div>
  <button className='btn btn-primary' onClick={increment}>click me for increament</button>
</>
}


