import React ,{Fragment,useState}from 'react';
import "./App.css"
import Products from '../Products/Products';
import Cart from '../Cart/Cart'; 
import ReactDOM from 'react-dom'
import {FaShoppingCart} from "react-icons/fa"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faCoffee} />



// import icons
// import images
import image1 from "../images/gloves.jpg";
import image2 from "../images/camera.jpg";
import image3 from "../images/t-shirts.jpg";
import image4 from "../images/pants.jpg";
import image5 from "../images/dress.jpg";
import image6 from "../images/shoes.jpg";
import image7 from "../images/bag.jpg";
import image8 from "../images/hat.jpg";
import image9 from "../images/sunglasses.jpg";
import image10 from "../images/lamp.jpg";
import image11 from "../images/towel.jpg";
import image12 from "../images/chairs.jpg";
import image13 from "../images/cushion.jpg";
import image14 from "../images/coffeeCups.jpg";
import image15 from "../images/curtain.jpg";
import logo from "../images/MSPLogo.svg"
let totalprice =0;
let numofproduct = 15;
let numincart =0;
// make array of images
const images = [image1, image2 ,image3 ,image4 ,image5 ,image6,image7 ,image8 ,image9 ,image10 ,image11 ,image12 ,image13 ,image14 ,image15];
 // array of objects contain data
let data = [
  { image: image1, name: "Gloves", oldPrice: 50, offer: 10 },
  { image: image2, name: "Camera", oldPrice: 650, offer: 40 },
  { image: image3, name: "T-Shirts", oldPrice: 1000, offer: 30 },
  { image: image4, name: "Pants", oldPrice: 850, offer: 18 },
  { image: image5, name: "Dress", oldPrice: 680, offer: 44 },
  { image: image6, name: "Shoes", oldPrice: 600, offer: 13 },
  { image: image7, name: "Bag", oldPrice: 300, offer: 5 },
  { image: image8, name: "Hat", oldPrice: 70, offer: 8 },
  { image: image9, name: "Sunglasses", oldPrice: 920, offer: 14 },
  { image: image10, name: "Lamp", oldPrice: 850, offer: 46 },
  { image: image11, name: "Towel", oldPrice: 400, offer: 30 },
  { image: image12, name: "Chairs", oldPrice: 1000, offer: 33 },
  { image: image13, name: "Cushion", oldPrice: 550, offer: 26 },
  { image: image14, name: "CoffeeCups", oldPrice: 140, offer: 28 },
  { image: image15, name: "Curtain", oldPrice: 390, offer: 42 },
];
let deletedsale =[];
function App() {

// set data for products
  let [Shopping ,setShopping]=useState(data);
// set data for cart
  let [cart, setcart]=useState([]);
       // setShopping([...Shopping,...data]);
      const addtocart = (e , boughtindex) => {
        setcart([...cart,{image:data[boughtindex].image , name:data[boughtindex].name ,oldPrice :data[boughtindex].oldPrice , offer :data[boughtindex].offer}]);
        numofproduct--;
        // setShopping(Shopping.filter((obj ,idx)=> boughtindex !== idx ));
        deletedsale.push(data[boughtindex]);
        console.log(deletedsale);
        numincart++;
        console.log(numincart);
        data = data.filter((obj , idx)=> boughtindex !== idx);
        totalprice += (Shopping[boughtindex].oldPrice-(Shopping[boughtindex].oldPrice*(Shopping[boughtindex].offer/100)).toFixed(2));
      }
  const deletefromcart=(e , deleteindex)=>{
    setcart(cart.filter((obj , idx)=> deleteindex !== idx));
    numofproduct++;
    data.push(deletedsale[deleteindex]);
    deletedsale= deletedsale.filter((obj , idx)=> deleteindex !== idx);
    totalprice=0;
    numincart--;
    console.log(numincart);
    for (let i = 0; i < deletedsale.length; i++) {
          totalprice += ((deletedsale[i].oldPrice)-(deletedsale[i].oldPrice*(deletedsale[i].offer/100)).toFixed(2));
    }
    // totalprice =totalprice-((deletedsale[deleteindex].oldPrice)-(deletedsale[deleteindex].oldPrice*(deletedsale[deleteindex].offer/100))) ;
    // setShopping([...Shopping,{image:deletedsale[deletedsale.length-1].image , name:deletedsale[deletedsale.length-1].name ,oldPrice :deletedsale[deletedsale.length-1].oldPrice , offer :deletedsale[deletedsale.length-1].offer}]);
    // data= [...data ,{deletedsale[-1]}]
    // totalprice -= ((deletedsale[deleteindex].oldPrice)-(deletedsale[deleteindex].oldPrice*(deletedsale[deleteindex].offer/100)));
    // setShopping([...Shopping,{image:Shopping[deleteindex].image , name:Shopping[deleteindex].name ,oldPrice :Shopping[deleteindex].oldPrice , offer :Shopping[deleteindex].offer}]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MSP E-COMMERCE</h1>
        </header>
      <div className='title'>
        <h4>{numofproduct}</h4>
        <h1>TOP HOME PICKS</h1>
        </div>
      <section className="content">
        <div className='cards' id='cards'>
           <Products mydata={data} boughtfunction={addtocart}/>
        </div>
        <div className='leftSide'>
            <div className="numincart2">
              <FaShoppingCart className='FaShoppingCart'/>
              <p>{numincart}</p>
            </div>
            <div className='my-car'>
            <Cart list={cart}  deletfunction ={deletefromcart}/>
              </div>
            <div className='total'>
                <h2>TOTAL PRICE:</h2>
                <h3><sub>EGP</sub>{totalprice}</h3>
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;

 // <div className='shoppingcart'></div>

/* <div className='sale'>
                  <div className='photo'>  
                    <img src={image13} alt='product'/>
                  </div>
                  <div className='description'>
                    <h5 className='Kind'>Cushion</h5>
                    <p><sub>EGP</sub> <b>500</b></p>
                    <span><del>150</del> 30% off       
                      <i class="fa-thin fa-circle-check"></i>
                    </span>
                    <button>Add To Cart</button>    
                    </div>

            </div>
            <div className='sale'>               
                <div className='photo'>               
                  <img src={image4} alt='product'/>
                </div>
                <div className='description'>
                <h5 className='Kind'>Cushion</h5>
                <p><sub>EGP</sub> <b>500</b></p>
                <span><del>150</del> 30% off</span>
                <button>Add To Cart</button>
                </div>
            </div>
            <div className='sale'>
                <div className='photo'>   
                   <img src={image5} alt='product'/>   
                </div>
                <div className='description'>
                <h5 className='Kind'>Cushion</h5>
                <p><sub>EGP</sub> <b>500</b></p>
                <span><del>150</del> 30% off</span>
                <button>Add To Cart</button>
                </div>
            </div>
            <div className='sale'>
              <div className='photo'>     
                <img src={image6} alt='product'/>
              </div>
              <div className='description'>
                <h5 className='Kind'>Cushion</h5>
                <p><sub>EGP</sub> <b>500</b></p>
                <span><del>150</del> 30% off </span>
                <button>Add To Cart </button>
                </div>
            </div>
            <div className='sale'>
              <div className='photo'>   
              <img src={image7} alt='product'/>            
              </div>
              <div className='description'>
                <h5 className='Kind'>Cushion</h5>
                <p><sub>EGP</sub> <b>500</b></p>
                <span><del>150</del> 30% off</span>
                <button>Add To Cart</button>
                </div>
            </div>
            <div className='sale'>
                <div className='photo'> 
                    <img src={image8} alt='product'/>
                </div>
                <div className='description'>                
                <h5 className='Kind'>Cushion</h5>
                <p><sub>EGP</sub> <b>500</b></p>
                <span><del>150</del> 30% off</span>
                <button>Add To Cart</button>
                </div>
            </div> */ 
