import React, { useEffect } from 'react';
import client from '../../utils/client';
import axios from 'axios';

export default function HttpParallelAPIs() {
  useEffect(()=>{
    async function fetchData(){
      const promise1=client.get('users')
      const promise2=client.get('todos');
      const promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('response-3'),5000)//if resolve->reject then promise3 will be failed and ultimately whole axios.all will fail and catch block will be executed
      })
      try{//even if any one of promise get failed then then it goes directly to catch block
        let [resp1,resp2,resp3]=await axios.all([promise1,promise2,promise3])
        //console.log(resp1,resp2)
        alert(resp1,resp2,resp3);//resp3 will delay the alert function by 5 sec even if resp1,resp2 are already ready in the network
      }
      catch(err){
        console.log('error occured',err)
      }
    }
    fetchData();//calling the asyncronous function inside  useEffect

  })
  return (
    <div>HttpParallelAPIs</div>
  )
}
