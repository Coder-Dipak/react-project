// There are many ways to extract data from API in React:
// 1. using Fetch API           (js concept)
// 2. using async-await syntax  (js concept)
// 3. using Axios library       (react concept:axios library far better than fetch method)
// 4. using custom hooks        (react concept)

import React, { useEffect } from 'react'

export default function HttpFetch() {
// here explained using fetch method
  useEffect(()=>
                { fetch('https://jsonplaceholder.typicode.com/users')        
                     .then((response)=>{                                     //promise->response
                           response.json().then((data)=>{console.log(data)}  //finalResponse->promise->data
                                               )
                                        }
                           )
                 }
            )
// here explained using fetch with Async-await format
const fetchComments=async()=>{
    let response   =await fetch('https://jsonplaceholder.typicode.com/comments');
    let data       =await response.json()  
    console.log(data);
}
useEffect(()=>{
    fetchComments();
})


  return (
    <div>HttpDemo1</div>
  )
}

