import React from 'react';
import productsArr from './products.json';
import ProductCard from './ProductCard';

export default function Products() {
  return <>
    <div className='container'>
        <div className='row'>  
            {productsArr.map((productObj,index)=>{
                return <div className='col-3' key={index}>
                          <ProductCard productObj={productObj}/>
                        </div>
            })} 
        </div>
    </div>
  </>
}
