import './innerbanner.css';
import innerimg from '../../assets/images/footer-bg.jpg';
function Innerbanner() {
  return (
    <div className="inner-banner">
  <div className="inner-banner-image">
     <img src={innerimg}/>
   <div className="inner-banner-content">
    <div className="inner-banner-details">
     <p>Welcome to</p>  
	   <h3>Saraswathi Arts & Craft Academy</h3>
	</div> 
   </div>	 
  </div>
</div>
  );
}

export default Innerbanner;
