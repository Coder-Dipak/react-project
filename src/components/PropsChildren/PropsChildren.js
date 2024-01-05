import React from 'react'

export default function PropsChildren(props) {
  return <h2>{props.children}</h2>//props and children are both reserved keywords
}

/* props.children concept can be usfull as a consumer component using a child 
component where the static framework data written like(modal/table),and the parent 
is passing the content data to that child */
