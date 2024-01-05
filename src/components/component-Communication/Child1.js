import React from 'react'

export default function Child1({a,f1,updateName}) {
  return <>
    <div className='border border-primary'>Child1 component:
    <p>variable from parent is a:{a}</p>

    <button onClick={f1}>call f1 </button>

    {/* if we want to change a variable of its parent then child it must trigger the updating function written in parent */}
     {/* <button onClick={updateName()}>update-name</button>:->cant pass like coz it will execute on load */}
     <button onClick={()=>{updateName('dipak')}}>update-name</button>
    </div>
  
  </>
}
