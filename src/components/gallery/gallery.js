
import './gallery.css';
import 'bootstrap/dist/css/bootstrap.css';
import creative1 from '../../assets/images/creative-1.jpg';
import creative2 from '../../assets/images/creative-2.jpg';
import creative3 from '../../assets/images/creative-3.jpg';
import creative4 from '../../assets/images/creative-4.jpg';
import creative5 from '../../assets/images/creative-5.jpg';
import creative6 from '../../assets/images/creative-6.jpg';
import creative7 from '../../assets/images/creative-7.jpg';
import creative8 from '../../assets/images/creative-8.jpg';
import Header from '../header/header';
import Innerbanner from '../innerbanner/innerbanner';
import Footer from '../footer/footer';
function Gallery() {
  return (
 
  <>
<Header/>
<Innerbanner/>
<div className="creative">
<div className="creative-set">
 <div className="creative-heading">
  <h2>Creative Manifesto</h2>
 </div> 
 <div className="creative-box">
   <div className="creative-box-image">
     <img src={creative1}/>
   </div>
   <div className="creative-box-image">
     <img src={creative2}/>
   </div>
   <div className="creative-box-image">
     <img src={creative3}/>
   </div>
   <div className="creative-box-image">
     <img src={creative4}/>
   </div>
   <div className="creative-box-image">
     <img src={creative5}/>
   </div>
   <div className="creative-box-image">
     <img src={creative6}/>
   </div>
   <div className="creative-box-image">
     <img src={creative7}/>
   </div>
   <div className="creative-box-image">
     <img src={creative8}/>
   </div>
 </div>
</div>
</div> 
<Footer/>

</>
  );
}

export default Gallery;
