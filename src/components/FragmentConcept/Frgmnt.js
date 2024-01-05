import React from 'react'

export default function Frgmnt() {
  return <React.Fragment>
              <div>react version is -{React.version}</div>
              <p>this is paragraph</p>
         </React.Fragment>   // Fragment acts like a container but it wont be there in DOM
                             // <> </> is also works same as shortcut after react-16 update       

        /*  <div>
               <div>Demo1</div>               //we can wrap in a container
               <p>this is paragraph</p> 
            </div>
        */

        /*<div>Demo1</div> 
          <p>this is paragraph</p>          //cant return 2 elements
        */
}
