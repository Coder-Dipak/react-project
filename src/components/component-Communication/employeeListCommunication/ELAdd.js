import React,{useState} from 'react'

export default function ELAdd({updateEmployee}) {
    let [num1,setNum1]=useState(0)
    let [num2,setNum2]=useState(0)
    let [num3,setNum3]=useState(0)
    let [num4,setNum4]=useState(0)

    let collect=()=>{
        let NewObj={eId:num1,name:num2,sal:num3,gender:num4}
        // console.log(NewObj);
        updateEmployee(NewObj); 
    }
  return <>
    <div className='border border-danger'>Employee Add component</div>
    <h4>Enter new employee details</h4>
    <input name='num1'    placeholder='Enter employee id'  onChange={(e)=>{setNum1(e.target.value)}}></input><br/>
    <input name='num2'   placeholder='Enter employee name' onChange={(e)=>{setNum2(e.target.value)}} className='m-1'></input><br/>
    <input name='num3' placeholder='Enter employee salary' onChange={(e)=>{setNum3(e.target.value)}}></input><br/>
    <input name='num4' placeholder='Enter employee gender' onChange={(e)=>{setNum4(e.target.value)}} className='m-1'></input><br/><br/><br/>
    <button onClick={collect}>Add New Employee</button>
  </>
}
