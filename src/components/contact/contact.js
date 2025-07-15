import Header from '../header/header';
import Innerbanner from '../innerbanner/innerbanner';
import Footer from '../footer/footer';
import './contact.css';
function Contact() {
  return (
    <>
<Header/>
<Innerbanner/>
<div class="innerpage_wrapper">
<div className="contact">
<div className="container">
 <div className="contact-heading">
   <h1>We're based in the heart of Chennai,<br/>India with students coming from around the globe.</h1>
 </div> 
 <ul className="contact-details">
    <h4>Saraswathi Arts & Crafts Academy</h4>
    <li>No.7, 13th Main road, Vijaya Nagar, Velachery, Chennai – 600041</li>
    <li><b>Contact:</b> +91 9884135531, +91 99620 36669 </li>
    <li><b>Email:</b>saraswathiarts@yahoo.com</li>
 </ul>	
</div>
</div>
</div>
<Footer/>
</>
  );
}

export default Contact;
