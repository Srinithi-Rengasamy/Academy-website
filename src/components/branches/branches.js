import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './branches.css';
import Header from '../header/header';
import Innerbanner from '../innerbanner/innerbanner';
import Footer from '../footer/footer';
function Branches() {
  return (
 
    <>
<Header/>
<Innerbanner/>
<div className="innerpage_wrapper">
<div class="branches">
<div className='container'>  
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
<Tab eventKey="home" title="Drawing & Painting Classes For Kids">
 <div className="row">
 <div className="col-sm-4 col-md-4">
   <ul className="branches-content">
    <li>Velachery</li>
    <li>Madippakkam</li>
    <li>Pallikaranai</li>
    <li>Adyar</li>
    <li>Porur</li>
   </ul>
  </div> 
  <div className="col-sm-4 col-md-4">
   <ul className="branches-content">
    <li>Tambaram</li>
    <li>Selaiyur</li>
    <li>Medavakkam</li>
   </ul>
  </div> 
 </div> 
</Tab>
<Tab eventKey="profile" title="Branches in Other Cities">
 <div className="row">
 <div className="col-sm-4 col-md-4">
   <ul className="branches-content">
    <li>Trichy</li>
    <li>Thanjavur</li>
    <li>Kombakkonam</li>
   </ul>
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

export default Branches;
