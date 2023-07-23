import React from "react";
import mystylepro from "./Products.module.css";


const Products =({mydata ,boughtfunction}) =>{
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
                       <button onClick={(e)=>boughtfunction(e , idx)}>Add To Cart</button>    
                    </div>
                </div>
            ))}
          </>
          );
}
export default Products;
