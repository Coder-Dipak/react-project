import React from 'react'

export default function ConditionalCSS() {
    let n=6;
  return <>
  <div className='text-center'>
       <h4 >{n} is {n%2===0?'even number':'odd number'}</h4>

    {/* if number is odd/even change backgroundColor */}
       <h3 style={n%2===0?{backgroundColor:'green'}:{backgroundColor:'red'}}>
            {n} is {n%2===0?'even number':'odd number'}
        </h3>

    {/* if number is odd/even change button color */}
    <button className={`btn ${n%2===0?'btn-success':'btn-danger'}`}>conditional button {n}</button>

  </div>

  </>
}
