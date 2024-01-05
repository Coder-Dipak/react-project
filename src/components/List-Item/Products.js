import React from 'react';
import products from './products.json';
import { Link, createSearchParams, useNavigate} from 'react-router-dom';

export default function Products() {

  const navigate=useNavigate();
  const navigateHandler = (title, price) => {
    navigate({
      pathname: "/productdetail",
      search: `?${createSearchParams({ title, price })}`,
    });
  };

    let headers = Object.keys(products[0])
  return <>
  <div className='container'>
    {/* product data in card-format*/}
    <div className='row'>
        {products.map((product,ind)=>{
        return <div className='col-3' key={ind} >
                    <div class="card">
                      <img src={product.image} class="card-img-top" alt="..." height={'180px'}/>
                      <div class="card-body text-center">
                          <h5 class="card-title">{product.title}</h5>
                          <h5 class="card-title">{product.category}</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          
                          {/*routing path params */}
                          <button>
                          <Link to={`/productdetails/${product.id}`}> View path-params</Link> 
                          </button>

                          {/* routhing query params */}
                          <button  onClick={() => {
                            navigateHandler(product.title, product.price);}}>view query-params
                          </button>
                      </div>
                    </div>  
                </div>
        })}
    </div>

<hr/><hr/>



    {/* product data in tabular format */}
    {/*}
    <div className='row'>
    <table className='table table-bordered text-center'>
        <thead>
            <tr>
                {headers.map((value,ind)=>{
                        return <th key={value}>{value}</th>
                })}
            </tr>
 
        </thead>
        <tbody>
              {products.map((product,index)=>{
                return <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td><img src={product.image} alt='..' height={'180px'} width={'200px'} /></td>
                        <td>{product.rating.rate}</td>
                        
                </tr>
              })}
        </tbody>
    </table>
    </div>
            */}

  </div>
  
  </>
}
