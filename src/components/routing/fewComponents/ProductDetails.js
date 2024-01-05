import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id}=useParams()//useParams() is a predefined function & return a object.

    const [product,setproduct]=useState({});

    const fetchProduct=async function(){
        const resp= await axios.get(`https://fakestoreapi.com/products/${id}`);
        setproduct(resp.data)
    }

    useEffect(()=>{
        fetchProduct();
    },[id])
    console.log(product)

  return (
  <>
  <div>
  <h3>product details of -{id}</h3>
  <div className='col-4 offset-4' >
                    <div class="card">
                      <img src={product.image} class="card-img-top" alt="..." height={'180px'}/>
                      <div class="card-body text-center">
                          <h5 class="card-title">{product.title}</h5>
                          <h5 class="card-title">{product.category}</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>  
                </div>
  </div>



  </>
  )
}
