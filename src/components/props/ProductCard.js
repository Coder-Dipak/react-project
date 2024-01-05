import React from 'react';
import './Products.css';

export default function ProductCard(props) {
  return <div class="card">
  <img src={props.productObj.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.productObj.title}</h5>
      <p class="card-text">{props.productObj.category}</p>
      <b>price: {props.productObj.price} rupees</b>
      <div>
        <button className='btn btn-secondary m-1'>ratings:{props.productObj.rating.rate}</button>
        <button className='btn btn-secondary'>{props.productObj.rating.count} availble</button>
      </div>
      <button className='btn btn-warning'>Buy Now</button>
    </div>
 </div>
}
