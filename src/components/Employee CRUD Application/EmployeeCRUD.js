import React, { useState } from 'react'
import ELTable from './ELTable'
import ELAdd from './ELAdd'
import ELCard from './ELCard';

// component communication assignment
export default function ELParent() {
const  [Employees,setEmployees] =useState([{ eId: 101, name: "sanjay", sal: 9000 ,gender:'male'},
                                           { eId: 102, name: "dillip", sal: 8000,gender:'male' },
                                           { eId: 103, name: "deepak", sal: 7000,gender:'male' },
                                           { eId: 104, name: "bijaya", sal: 5000,gender:'Female'},
                                           { eId: 105, name: "digant", sal: 6000 ,gender:'male'}]);
const updateEmployee=function(NewObj){
    setEmployees([...Employees, NewObj]); 
}
  return <>
  <div className='border border-dark text-center m-2'>
  <h4 >This is Parent component</h4>
  <div className='row'>
    <div className='col'>
        <ELTable Employees={Employees}/>{/* data going to child as props */}
    </div>
    <div className='col'>
        <ELAdd updateEmployee={updateEmployee}/>
        {/* child is updating the data of parent through function which was passed to it by parent */}
    </div> 
  </div>
  <div className='row'>
    <ELCard Employees={Employees}/>   
  </div>
  
  </div>

  </>
}






