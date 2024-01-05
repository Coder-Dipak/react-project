import React,{useState} from 'react';
import productsArr from './products.json';
import ReactPaginate from 'react-paginate';//npm i react-paginate
// 

function Products({productsArr}) {//products is component which will be used in paginate tag below
  return <>
        {productsArr.map((product,ind)=>{ 
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
  </>
}
              //function Paginateditems(itemsperPage)               
export default function ReactPagination() {//this is the main component in which Products component is used
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=4;
  const endOffset = itemOffset + itemsPerPage;//0->4 objects
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);//0->4 objects
  const filteredProducts = productsArr.slice(itemOffset, endOffset);//0->4 objects passed initially
  const pageCount = Math.ceil(productsArr.length / itemsPerPage);

  const handlePageClick = (event) => { //on pagination buuton click event
    const newOffset = (event.selected * itemsPerPage) % productsArr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return <>
  <div className='container'>
    <div className='row'>
        <Products productsArr={filteredProducts}/>{/*Products component used inside a row  */}
        <ReactPaginate                       //copied from paginate library
           breakLabel="..."
           nextLabel="next >"
           onPageChange={handlePageClick}
           pageRangeDisplayed={5}
           pageCount={pageCount}
           previousLabel="< previous"
           renderOnZeroPageCount={null}
        />
    </div>
  </div>

  </>
}

