import React, { useState } from 'react';
import products from'./products.json'
import SearchBar from 'react-js-search';    //after: npm i react-js-search

export default function ReactSearch() {
  let [filteredProducts,setFilteredProducts]=useState(products);

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
          <SearchBar
            // onSearchTextChange={(term, filteredData) => {//onSearchTextChange(predefined method):according to 'term' entered by user 'filteredData' will assigned to  setFilteredProducts which will further assign to states setter function automatically
            //  setFilteredProducts([...filteredData]);
            // }}
            onSearchButtonClick={onSearchClick}//this is user function logic
            placeHolderText={"Search here..."} 
           data={products}   //data=original unfiltered data
          />
          {/* any one of on onSearchTextChange or onSearchButtonClick use*/}
        </div>


        <div className='row'>
        {filteredProducts.map((product,ind)=>{
        return <div className='col-3' key={ind} >
                    <div class="card">
                      <img src={product.image} class="card-img-top" alt="..." height={'180px'}/>
                      <div class="card-body text-center">
                          <h5 class="c rd-title">{product.title}</h5>
                          <h5 class="card-title">{product.category}</h5>
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
