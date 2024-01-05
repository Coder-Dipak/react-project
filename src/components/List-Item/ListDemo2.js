import React from "react";

export default function ListDemo2() {
  let employees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
  ];

  let headers = Object.keys(employees[0]);
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            {headers.map((header, ind) => {
              return <th key={ind}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                {/* <td>{employee.eId}</td>
                <td>{employee.name}</td>
                <td>{employee.sal}</td> */}
                {Object.values(employee).map((value,ind)=>{
                     return <td key={ind}>{value}</td>
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
