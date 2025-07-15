
import './home.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import banner1  from '../../assets/images/main-banner.jpg';
import banner2  from '../../assets/images/banner.jpg';
import banner3  from '../../assets/images/hw-banner.jpg';
import interiors from '../../assets/images/interiors.jpg';
import painting from '../../assets/images/painting.jpg';
import exhibition from '../../assets/images/exhibition.jpg';
import coaching from '../../assets/images/coaching.jpg';
import children from '../../assets/images/children.jpg';
import owner from '../../assets/images/owner.jpg';
import student from '../../assets/images/student.png';
import branch from '../../assets/images/branch.png';
import experience from '../../assets/images/experience.png';
import award from '../../assets/images/award.png';
import creative1 from '../../assets/images/creative-1.jpg';
import creative2 from '../../assets/images/creative-2.jpg';
import creative3 from '../../assets/images/creative-3.jpg';
import creative4 from '../../assets/images/creative-4.jpg';
import creative5 from '../../assets/images/creative-5.jpg';
import creative6 from '../../assets/images/creative-6.jpg';
import creative7 from '../../assets/images/creative-7.jpg';
import creative8 from '../../assets/images/creative-8.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {

return (
<>
<Header/>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide-inner slide-bg-image" data-background={banner1}>
          <img src={banner1}/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-inner slide-bg-image" data-background={banner2}>
          <img src={banner2}/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-inner slide-bg-image" data-background={banner3}>
           <img src={banner3}/>
        </div>
      </SwiperSlide>

    </Swiper>
    <div className="professional-coures">
    <div className="container">
      <h2>Our Professional Courses</h2>
    <div className="professional-coures-box">
	   <div className="professional-coures-inner-box">
	     <div className="inner-box-details">
	      <img src={interiors}/>
	      <h3>INTERIOR DESIGN</h3>
	      <p>Home Interiors | Kitchen Interiors | Office Interiors</p>
	     </div> 
	   </div>  
     <div className="professional-coures-inner-box">
	    <div className="inner-box-details">
	     <img src={exhibition}/>
	     <h3>THANJAVUR PAINTING</h3>
	     <p>Infinite Expression | Colourfull Expression | Shades of Shole</p>
	    </div> 
  	</div>
    <div className="professional-coures-inner-box">
	   <div className="inner-box-details">
      <img src={painting}/>
      <h3>CURSIVE HANDWRITING</h3>
	    <p>English Handwriting | Tamil Handwriting</p>
	   </div> 
	  </div>   
    <div className="professional-coures-inner-box">
	   <div className="inner-box-details">
	     <img src={coaching}/>
	     <h3>ENTRANCE COACHING NATTA</h3>
	     <p>Thanjavur Painting | Watercolor | Anatomy | Oil Painting | Portrait</p>
	   </div>   	
    </div>
   </div>
  </div> 
</div>   

<div className="our-details">
 <div className="class-details">
  <div className="class-details-image">
    <img src={children}/>
  </div>
  <div className="class-details-content">
    <h2>Welcome to Saraswathi Arts & Craft Academy</h2>
    <hr/>
    <p>Saraswathi Arts And Crafts Academy in Chennai is one of the leading businesses in the Arts & Crafts classes For Children. Also known for Tutorials, Handwriting classes, Drawing classes, Summer Camps, Arts & Crafts classes, Painting classes, Tanjore Painting classes, Calligraphy classes and much more.</p>
  	<p>Established in the year 2003, Saraswathi Arts And Crafts Academy in Velachery, Chennai is a top player in the category Arts & Crafts classes For Children in the Chennai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Chennai.</p>
    <a href="javascript:void(0)" className="button">READ MORE</a>
  </div>
 </div>
 <div className="director-details">
  <div className="director-details-content">
    <h2>About The Director</h2>
    <hr/>
    <p>Established in the year 2003, Saraswathi Arts And Crafts Academy in Velachery, Chennai is a top player in the category Arts & Crafts classes For Children in the Chennai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Chennai. Over the course of its journey, this business has established a firm foothold in it’s industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers, which continues to grow by the day.</p>
    <a href="javascript:void(0)" className="button">READ MORE</a>
  </div>
  <div className="director-details-image">
    <img src={owner}/>
  </div>
 </div>
</div>


<div className="business-info">
<div className="container">
   <h2>There is some reason behind why people choose us<br/> past 21 years.</h2>
<div className="business-box">
 <div className="business-inner-box">
  <div className="business-box-image">
   <img src={student}/>
  </div> 
  <div className="business-box-right">
   <span>2000+</span>
   <h4>No of Student</h4>
  </div>
 </div>
 <div className="business-inner-box">
  <div className="business-box-image">
   <img src={branch}/>
  </div> 
  <div className="business-box-right">
   <span>26</span>
   <h4>Locations</h4>
  </div> 
 </div>
 <div className="business-inner-box">
  <div className="business-box-image">
   <img src={experience}/>
  </div>
  <div className="business-box-right">  
   <span>21</span>
   <h4>Years of experience</h4>
  </div> 
 </div>
 <div className="business-inner-box">
  <div className="business-box-image">
   <img src={award}/>
  </div>
  <div className="business-box-right">  
   <span>22</span>
   <h4>Branches</h4>
  </div> 
 </div>
</div>
</div>
</div>


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
 <div className="creative-button">
   <a href="javascript:void(0)" className="button">view our latest photographs</a> 
 </div>
</div> 
</div>
 <Footer/>
</>
  );
}

export default Home;
