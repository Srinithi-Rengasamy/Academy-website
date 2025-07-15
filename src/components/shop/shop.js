import 'bootstrap/dist/css/bootstrap.css';
import { Link,Location} from "react-router-dom"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './shop.css';
import Header from '../header/header';
import Innerbanner from '../innerbanner/innerbanner';
import Footer from '../footer/footer';
import shop1 from '../../assets/images/s1.jpg';
import shop2 from '../../assets/images/s2.jpg';
import shop3 from '../../assets/images/s3.jpg';
import shop4 from '../../assets/images/km1.jpg';
import shop5 from '../../assets/images/km2.jpg';
import shop6 from '../../assets/images/km3.jpg';
import {useState, useEffect } from 'react';
function Shop() {
const [first, setFirst] =useState(false);
// const changeEvent =() =>{
//   setFirst(true)
// }
const changeEvent =() =>{
  <Link className="nav-link active"  to="/shop1" >HOME</Link>
}
const changeOver =() =>{
  setFirst(isShown => !isShown);
}

return (
 
<>
<Header/>
<Innerbanner/>
<div className="innerpage_wrapper">
<div class="shop">
<div className='container'>
<Tabs
      defaultActiveKey="painting1"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
<Tab eventKey="painting1" title="Thanjavur Painting">
 <div className="row">
  <div className="col-sm-4 col-md-4">
   <div className='shop-content' onClick={changeEvent}>
     <img src={shop1}/>
     <h4>Thanjavur Painting</h4>
     <p>₹15,000</p>
   </div>
     {/* {first === true && <div> <Link className="nav-link active"  to="/shop1" >HOME</Link></div>} */}
  </div> 
  <div className="col-sm-4 col-md-4"> 
   <img src={shop2}/> 
   <h4>Thanjavur Painting</h4>
   <p>₹14,000</p>
  </div> 
  <div className="col-sm-4 col-md-4">   
   <img src={shop3}/>
   <h4>Thanjavur Painting</h4>
   <p>₹12,000</p>
  </div> 
 </div> 
</Tab>
<Tab eventKey="painting2" title="Kerala Mural">
 <div className="row">
  <div class="col-sm-4 col-md-4">
   <img src={shop4}/>
  </div> 
  <div class="col-sm-4 col-md-4"> 
   <img src={shop5}/>
  </div> 
  <div class="col-sm-4 col-md-4">   
   <img src={shop6}/>
  </div> 
 </div> 
</Tab>
<Tab eventKey="painting3" title="Mysore Painting" >
 <div className="row">
 <div class="col-sm-4 col-md-4">
   <img src={shop1}/>
  </div> 
  <div class="col-sm-4 col-md-4"> 
   <img src={shop2}/>
  </div> 
  <div class="col-sm-4 col-md-4">   
   <img src={shop3}/>
  </div> 
 </div>
</Tab>
<Tab eventKey="painting4" title="Kalamkari Painting" >
 <div className="row">
 <div class="col-sm-4 col-md-4">
   <img src={shop4}/>
  </div> 
  <div class="col-sm-4 col-md-4"> 
   <img src={shop5}/>
  </div> 
  <div class="col-sm-4 col-md-4">   
   <img src={shop6}/>
  </div> 
 </div>
</Tab>
<Tab eventKey="painting5" title="Wood Craving & Traditional Furniture" >
 <div className="row">
 <div class="col-sm-4 col-md-4">
   <img src={shop1}/>
  </div> 
  <div class="col-sm-4 col-md-4"> 
   <img src={shop2}/>
  </div> 
  <div class="col-sm-4 col-md-4">   
   <img src={shop3}/>
  </div> 
 </div>
</Tab>
</Tabs>      
</div>
</div>
</div>  
 <Footer/>
</>
  );
}

export default Shop;
