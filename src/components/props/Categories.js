import React from 'react'
import './Categories.css';
import Category from './Category';


export default function Categories() {
    let Data=[
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},
        {name:'Grocery' , img_url:'https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100'},  
    ];
    return <div className='container-Fluid'>
        <div className='row'>
               {Data.map((dataObj,ind)=>{
                      return <div className='col' key={ind}>
                      <Category name={dataObj.name} img_url={dataObj.img_url}/>
                    </div>
                    })}
        </div>
    </div>
}
