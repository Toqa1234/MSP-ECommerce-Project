import React, { Fragment, useState } from "react";
import"./Products.module.css";
import App from "../App/App";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Products =({mydata ,boughtfunction}) =>{
// const [Product, setProduct]=useState([]);
  // const buying=(e , boughtindex)=>{
  //  mydata= mydata.filter((obj ,index )=> boughtindex !== index )
  // }
     return(
        <>
        {   mydata.map((e,idx)=>
            (
                <div className='sale' key={idx}>
                    <div key={idx} className='photo'>  
                      <img src={e.image} alt='product' id={idx}/>
                    </div>
                    <div className='description'>
                       <h5 className='Kind'>{e.name}</h5>
                       <p><sub>EGP</sub> <b>{(e.oldPrice-(e.oldPrice*(e.offer/100))).toFixed(2)}</b></p>
                       <span><del>{e.oldPrice}</del> {e.offer}% off</span>
                       <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                       <button onClick={(e)=>boughtfunction(e , idx)}>Add To Cart</button>    
                    </div>
                </div>
            ))}
          </>
          );
}
export default Products;