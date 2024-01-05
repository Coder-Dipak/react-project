import React from 'react'

export default function Child2(props) {//object destructuring of props
  return (
    <div className='border border-danger'>Child2 Component:
    <p>name from parent is : {props.name}</p>

    </div>
  )
}
