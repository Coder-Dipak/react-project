import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function ProductDetail() {
  const [searchParams] = useSearchParams();//useSearchParams() is predefined function
  // console.log(searchParams);//inside search params entries have the data
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);//this will convert entry format data to object format data
    //or
    console.log(searchParams.get('title'),searchParams.get('price'))//this is also fine to read data
    console.log(currentParams);
  }, [searchParams]);

  return ( <>
    <div>ProductDetail:</div>
    <p>data we recieved from query params are :{searchParams.get('title')} and {searchParams.get('price')}</p>
     
    </>
    
  )
}


