import React, { useEffect } from 'react';
import axios from 'axios';//npm i axios


export default function HttpAxios() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')//return a promise
        .then((response)=>{console.log(response.data)})        //response has the data inside
    });

    // const fetchUsers = async () => {
	// 	const url = "https://jsonplaceholder.typicode.com/users";
	// 	const response = await axios.get(url);
	// 	setUsers(response.data);
    // };

  return (
    <div>HttpAxios</div>
  )
}
