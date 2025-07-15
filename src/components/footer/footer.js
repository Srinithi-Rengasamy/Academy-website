import './footer.css';
import logo from '../../assets/images/logo.jpg';
function Footer() {
  return (
    <div className="footer"> 
    <div className="footer-widget">
    <div className="container">
     <div className="row">
      <div className="footer-widget-box col-sm-3 col-md-3">
        <div className="widget-image">
           <a href="/home"><img src={logo}/></a>
        </div>
        <div className="widget-content">
         <div className="address">
           <p><i className="fa fa-map-marker" aria-hidden="true"></i><b>Address:</b></p>
           <p><a href="https://maps.app.goo.gl/szuFFBb7LBBnG8oG8?g_st=aw">No.7, 13th Main road, Vijaya Nagar, Velachery, Chennai – 600041</a></p>
         </div>
         <div className="personal-details">
           <li><b><i className="fa fa-envelope-o" aria-hidden="true"></i>Email:</b>saraswathiarts@yahoo.com</li>
           <li><i className="fa fa-phone" aria-hidden="true"></i><b>Mobile:</b>+91 9884135531,<br/>+91 9962036669</li>
           <li><i className="fa fa-clock-o" aria-hidden="true"></i>Mon - Sunday: 10.00am to 7.30pm</li>
         </div>
        </div>
      </div>
      <div className="footer-widget-box col-sm-3 col-md-3">
        <ul className="link-content main-menu">
          <h5>Main Menu</h5>
          <li><a href="/about">About </a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/branches">Branches</a></li>
          <li><a href="/gallery"> Gallery</a></li>
          <li><a href="/contact">Contact</a></li>	
          <li><a href="/video">Videos</a></li>
          <li><a href="/shop">Shop</a></li>	
        </ul>
      </div>
      <div className="footer-widget-box col-sm-3 col-md-3">
        <ul className="link-content">
          <h5>Professional Courses</h5>
          <li><a href="javascript:void(0)">Interior Design</a></li>
          <li><a href="javascript:void(0)">Thanjavur Painting</a></li>
          <li><a href="javascript:void(0)">Cursive Handwriting</a></li>
          <li><a href="javascript:void(0)">Entrance Coaching NATTA</a></li>
        </ul>
      </div>
      <div className="footer-widget-box col-sm-3 col-md-3">
        <ul className="link-content">
          <h5>Social Media</h5>
          <li><a href="http://wa.me/+919962036669"><i className="fa fa-whatsapp" aria-hidden="true"></i>Connect with on WhatsApp</a></li>
          <li><a href="https://www.instagram.com/saraswathiarts?igsh=MWdzOGw4MXB6Z20ydA==&utm_source=ig_contact_invite"><i className="fa fa-instagram" aria-hidden="true"></i>Follow us on Instagram</a></li>
          <li><a href="https://www.facebook.com/share/1DsxXvRXtk/"><i className="fa fa-facebook" aria-hidden="true"></i>Follow us on Facebook</a></li>
        </ul>
      </div>	
      </div>
     </div>	
    </div>
  </div>
  );
}

export default Footer;
