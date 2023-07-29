import React , {Fragment} from "react";
import Stylecart from "./Cart.module.css"
import App from "../App/App";

const Cart =({list , deletfunction}) =>{
return(
    <Fragment>
         {
            list.map((e ,idx)=> (
                <div className={Stylecart.bought} key={idx}>
                        <hr></hr>
                    <div className={Stylecart.buy}>
                        <img className={Stylecart.img} src={e.image} alt="shopping"/>
                        <div className={Stylecart.buydescription}>
                            <h5 className={Stylecart.h5}>{e.name}</h5>
                            <p className='Stylecart'><sub>EGP</sub><b>{(e.oldPrice-(e.oldPrice*(e.offer/100))).toFixed(2)}</b></p>
                            <span><del>{e.oldPrice}</del>{e.offer}% off</span>
                        </div>
                        <button onClick={(e)=>deletfunction(e, idx)} className={Stylecart.Remove}>Remove</button>
                    </div>
                </div>
            
))}
    </Fragment>
    );

}
export default Cart;
