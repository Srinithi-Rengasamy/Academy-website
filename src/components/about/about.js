
import './about.css';
import owner from '../../assets/images/owner.jpg';
import Header from '../header/header';
import Innerbanner from '../innerbanner/innerbanner';
import Footer from '../footer/footer';
function About() {
  return (
<>
<Header/>
<Innerbanner/>
<div className="innerpage_wrapper">
<div className="about-us">
<div className="container">
 <div className="about-us-details">
  <h2>About Us</h2>
  <p>Established in the year 2003, Saraswathi Arts And Crafts Academy in Velachery, Chennai is a top player in the category Arts & Crafts classes For Children in the Chennai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Chennai. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day. This business employs individuals that are dedicated towards their respective roles and put in a lot of effort to achieve the common vision and larger goals of the company. In the near future, this business aims to expand its line of products and services and cater to a larger client base. In Chennai, this establishment occupies a prominent location in Velachery. It is an effortless task in commuting to this establishment as there are various modes of transport readily available. It is at Vijaya Nagar 3rd Cross Street, Opposite Adyar Anandha Bhavan, which makes it easy for first-time visitors in locating this establishment. It is known to provide top service in the following categories: Tutorials, Handwriting classes, Drawing classes, Summer Camps, Arts & Crafts classes, Painting classes, Tanjore Painting classes, Calligraphy classes.</p>
 </div>
</div>
</div>

<div className="founder">
<div className="container">
 <div className="founder-details">
   <img src={owner}/>
   <h6> N S DURAIRAJ</h6>
   <p>(Founder of Saraswathi Arts & Crafts Academy)</p> 
 </div>  
</div>
</div>  
</div>
<Footer/>

</>
  );
}

export default About;
