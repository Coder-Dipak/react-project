import React,{useState} from 'react';
import productsArr from './products.json';
import ReactPaginate from 'react-paginate';
import './pagination.css';


function Products({productsArr}) {
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
export default function ReactPaginationCss() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=4;
  const endOffset = itemOffset + itemsPerPage;
  const filteredProducts = productsArr.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productsArr.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productsArr.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return <>
  <div className='container'>
    <div className='row'>
        <Products productsArr={filteredProducts}/>
        <ReactPaginate                       
           breakLabel="..."
           nextLabel="next >"
           onPageChange={handlePageClick}
           pageRangeDisplayed={5}
           pageCount={pageCount}
           previousLabel="< previous"
           renderOnZeroPageCount={null}
           //diff. props fro styling part
           containerClassName='pagination'// a prop(containerClassName) for adding css styling to Reactpaginate with class(pagination)
           pageLinkClassName='pageNumber'
           previousClassName='pageNumber'
           nextClassName='pageNumber'
           previousLinkClassName='pageNumber'
           nextLinkClassName='pageNumber'
           activeClassName='active'
        />
    </div>
  </div>

  </>
}

