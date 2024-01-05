import React from 'react'

export default function Category(props) {
  return <>
         <div className='text-center categorie'>
           <img  src={props.img_url} alt=''/>
           <p>{props.name}</p>
         </div>
  </>
}
