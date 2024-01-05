import React, { useEffect } from 'react';
import axios from 'axios';
import clientIS from '../../utils/clientIS';

export default function HttpInterceptor() {
  useEffect(()=>{
    async function fetchData(){
      const promise1=clientIS.get('users')
      const promise2=clientIS.get('todos');
      try{
        let [resp1,resp2]=await axios.all([promise1,promise2])
        console.log(resp1,resp2)   }
      catch(err){
        console.log('error occured',err)}
    }
    fetchData();
  })
  return (
    <div>Http with Interceptor</div>
  )
}
