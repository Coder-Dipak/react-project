import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Careers() {
  return(<>
    <h1>this is Careers Component which has 2 more hyperlinks as below</h1>
    <hr/>

    <button><Link to='permanentjobs'>permanent jobs</Link></button>
    <button><Link to='contractjobs'>contract jobs</Link></button>
    <Outlet/>{/* to load the routers as child component  we have to outlet  */}

  </>
  )
}
