import React from 'react'

export default function ConditionalDemo2() {
    let x=6;
    // let commonPart=<>
    //               <div>this is div1</div>
    //               <div>this is div2</div>
    //               <div>this is div3</div>
    //               <div>this is div4</div>
    //               </>

    
    // using if-else condition conditional rendering
    if(x%2===0){
        return <>
                 {/* {commonPart} */}
                 <h3>{x} is even</h3>
               </>
    }
    else{
        return <>
                 {/* {commonPart} */}
                 <h3>{x} is odd</h3>
               </>
    }

}
