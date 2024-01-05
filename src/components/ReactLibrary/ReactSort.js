import React, { useState } from 'react';
import products from'./products.json'
import SearchBar from 'react-js-search';    //after: npm i react-js-search

export default function ReactSort() {
  let [filteredProducts,setFilteredProducts]=useState(products);

  const Ascend=()=>{
               let sortedProducts=products.sort((p1,p2)=>p1.price-p2.price);
               setFilteredProducts([...sortedProducts]); //sorted product given to setter function            
  }
  const Decend=()=>{
              let sortedProducts=products.sort((p1,p2)=>p2.price-p1.price);
              setFilteredProducts([...sortedProducts]);
  }

    let onSearchClick=(searchText)=>{
           let filteredData=products.filter(product=>{
            return JSON.stringify(product).toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
           })
           setFilteredProducts([...filteredData]);
    }
  
return <>
    <div className='container'>
        {/*search functionality code:from npmjs(react-js-seach) */}
        <div className='row'>
          <div className='col-8'>
            <SearchBar onSearchButtonClick={onSearchClick} placeHolderText={"Search here..."}  data={products}   />
          </div>
          <div className='col-4'>
             <button onClick={Ascend}>Accend</button>
             <button onClick={Decend}>Decend</button>
          </div>
        </div>
        <div className='row'>
        {filteredProducts.map((product,ind)=>{
        return <div className='col-3' key={ind} >
                    <div class="card">
                      <img src={product.image} class="card-img-top" alt="..." height={'180px'}/>
                      <div class="card-body text-center">
                          <h5 class="c rd-title">{product.title}</h5>
                          <h5 class="card-title">{product.category}</h5>
                          <h5 class="card-title">{product.price}</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button className='btn btn-primary m-1'>Buy Now</button>
                          <button className='btn btn-warning'>Add to cart</button>
                      </div>
                    </div>  
                </div>
        })}
      </div>
    </div>
  </>
}

