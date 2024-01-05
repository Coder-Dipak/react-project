import React, { useEffect } from 'react';
//import axios from 'axios';               //axios library imported       
import client from '../../utils/client'; //axios instance created file imported


export default function HttpAxiosInstance() {
//  in  real use case for multiple API calls there can be done a common url(axios instance) and the last part can be kept dynamically like below:
/*
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{console.log(response.data)})        
    });
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((response)=>{console.log(response.data)})        
     });
*/

//here we imported a axios instance file(client) to use it
 useEffect(()=>{
   client.get('users').then((resp)=>{console.log(resp.data)}) //here we just have to change the last part of Url and get the data
   //client.post(....)
   //client.put(....)
   //client.patch(....)
   //client.delete(....)
 })

  return (
    <div>HttpAxios</div>
  )
}
