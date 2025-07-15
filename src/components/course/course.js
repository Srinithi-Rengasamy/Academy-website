import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './course.css';
import Header from '../header/header';
import Innerbanner from '../innerbanner/innerbanner';
import Footer from '../footer/footer';
function Course() {
  return (
  <>
<Header/>
<Innerbanner/>
<div className="innerpage_wrapper">
<div class="course">
<Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
<Tab eventKey="home" title="Drawing & Painting Classes For Kids">
 <div className="row">
  <div className="col-sm-4 col-md-4">
   <ul className="course-content">
    <li>Basic Drawing</li>
    <li>Pencil Shading</li>
    <li>Poster Colour</li>
    <li>Water Colour</li>
    <li>Oil Pastel</li>
   </ul>
  </div> 
  <div className="col-sm-4 col-md-4"> 
   <ul className="course-content">
    <li>Glass Paintings</li>
    <li>Fabric Paintings</li>
    <li>Mysore Paintings</li>
    <li>Thanjavur Paintings</li>
    <li>Pot Paintings</li>
   </ul>
  </div> 
  <div className="col-sm-4 col-md-4">   
   <ul className="course-content">
    <li>Tile Paintings</li>
    <li>Charcoal Paintings</li>
    <li>Pen Drawing</li>
    <li>Acrylic Painting</li>
    <li>Collage Painting</li>
   </ul>
  </div> 
 </div> 
</Tab>
<Tab eventKey="profile" title="Drawing & Painting Classes For Adults">
 <div className="row">
  <div class="col-sm-4 col-md-4">
   <ul class="course-content">
    <li>Mural & 3D Painting</li>
    <li>NIP Painting</li>
    <li>Rajasthani Painting</li>
    <li>Kerala Mural</li>
    <li>Calligraphy</li>
   </ul>
  </div> 
  <div class="col-sm-4 col-md-4"> 
   <ul class="course-content">
    <li>Glass Paintings</li>
    <li>Fabric Paintings</li>
    <li>Mysore Paintings</li>
    <li>Thanjavur Paintings</li>
    <li>Pot Paintings</li>
   </ul>
  </div> 
  <div class="col-sm-4 col-md-4">   
   <ul class="course-content">
    <li>Tile Paintings</li>
    <li>Charcoal Paintings</li>
    <li>Pen Drawing</li>
    <li>Acrylic Painting</li>
    <li>Collage Painting</li>
   </ul>
  </div> 
 </div> 
</Tab>
<Tab eventKey="contact" title="Special Courses" >
 <div className="row">
 <div class="col-sm-6 col-md-6">
   <ul class="course-content">
    <li>ARCHITECTURE DRAWING</li>
    <li>PERSPECTIVE DRAWING</li>
    <li>ILLUSION DRAWING</li>
   </ul>
  </div> 
  <div class="col-sm-6 col-md-6"> 
   <ul class="course-content">
    <li>ENTRANCE COACHING NATTA</li>
    <li>INTERIOR COURSE</li>
    <li>3D MODELLING</li>
   </ul>
  </div>  
 </div>
</Tab>
</Tabs>      
</div>
</div>
 <Footer/>
</>
  );
}

export default Course;
