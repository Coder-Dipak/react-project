import React from 'react';

export default function ELTable({Employees}) {
  return <>
     
    <div className='border border-primary'>Employee Table Component</div>
    <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {Employees.map((Emp,index)=>{
                return <tr key={index}>
                         <td>{Emp.eId}</td>
                         <td>{Emp.name}</td>
                         <td>{Emp.sal}</td>
                         <td>{Emp.gender}</td>
                   </tr>
            })}
        </tbody>
    </table>
  </>
  
}
