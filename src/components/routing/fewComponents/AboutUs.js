import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AboutUs() {
  const navigate=useNavigate()

  const doSomethingAndGoToHome=()=>{
    console.log("i am that something u r expecting,after me u can route to next")
    navigate('/home')
  }

  return (<>
    <h1>this is AboutUs component</h1>

    {/* as this is a anchor tag it will repaint the whole dom which is not recommended */}
    <a href='/home'>go to home page on full dom reload</a>
    <hr/>

    {/* as this Link tag from react-router-dom this will only repaint the required portion of dom */}
    <Link to='/home'>Go to home page only required component reload</Link>
    <hr/>

    {/* do some js action and then go to home page,if this was required then we have to use useNavigate from react-router-dom*/}
    <button onClick={doSomethingAndGoToHome}>click me to go home page</button>
    <hr/>
    
     {/* navigate to previus and next route using navigate method  */}
    <button onClick={()=>{navigate(-1)}}>previous button</button>{/*we can give 2,-2 etc also it will work respectively  */}
    <button onClick={()=>{navigate(1)}}>next button</button>



    </>
  )
}
