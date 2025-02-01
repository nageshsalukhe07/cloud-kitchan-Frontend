import React from 'react';
import Header from '../Layout/Header';
import { Link, Outlet } from 'react-router-dom';
import '../Bootstrap/home1.css';
import '../Bootstrap/home2.css';
import home3 from '../Images/home3.jpg';
// import home1 from '../Images/home1.jpg';
// import home2 from '../Images/home2.jpg';
// import home22 from '../Images/home22.webp';
import homee1 from '../Images/homee1.png';
import homee2 from '../Images/homee2.png';
import homee3 from '../Images/homee3.png';
import catagory1 from '../Images/catagory1.jpg';
import catagory2 from '../Images/catagory2.jpg';
import catagory3 from '../Images/catagory3.jpg';
import resta1 from '../Images/resta1.jpg';
import resta2 from '../Images/resta2.jpg';
import resta3 from '../Images/resta3.jpg';



export default function Home() {
  return (
    <div>
      <Header />
      <br /><br /><br />
      
      {/* Bootstrap Carousel */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to='/menuitem'><img src={homee1} className="d-block w-100" alt="Slide 1" /></Link>
            <div className="container">
              
            </div>
          </div>
          <div className="carousel-item">
          <Link to='/menuitem'><img src={homee2} className="d-block w-100" alt="Slide 2" /></Link>
            <div className="container">
              
            </div>
          </div>
          <div className="carousel-item">
          <Link to='/menuitem'><img src={homee3} className="d-block w-100" alt="Slide 3" /></Link>
            <div className="container">
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      {/* Feature Sections */}
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
           <Link to='/menuitem'><img src={catagory3}  className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Icon 1" /></Link> 
            <h2>Fast Foods</h2>
            <p>Frequently linked with ease and cost-effectiveness, 
              fast food is a preferred option for individuals leading hectic lives</p>
            <p> <Link to='/menuitem'>View details &raquo; </Link></p>
          </div>
          <div className="col-lg-4">
          <Link to='/menuitem'><img src={catagory1} className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Icon 2" /></Link>
            <h2>Non-Veg</h2>
            <p>Often associated with rich flavors and high protein content, 
              non-vegetarian food is a popular choice for those seeking a hearty and satisfying meal.</p>
            <p> <Link to='/menuitem'>View details &raquo;</Link></p>
          </div>
          <div className="col-lg-4">
          <Link to='/menuitem'><img src={catagory2}  className="bd-placeholder-img rounded-circle" width="140" height="140" alt="Icon 3" /></Link>
            <h2>Veg</h2>
            <p>Known for their freshness and nutritional value, 
              vegetarian foods are a popular choice for those seeking a healthy and balanced diet.</p>
            <p> <Link to='/menuitem'>View details &raquo;</Link></p>
          </div>
        </div>
      </div>

      <hr className="featurette-divider" />
      
      {/* Featurette Sections */}
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Enjoy Every Bite <span className="text-muted">Where every bite tells a story.</span></h2>
          <p className="lead">Offering a blend of delicious cuisine and welcoming ambiance, 
            restaurants are a go-to destination for those looking to enjoy a satisfying dining experience.</p>
        </div>
        <div className="col-md-5">
          <img src={resta1} className="featurette-image img-fluid mx-auto" width="500" height="500" alt="Feature 1" />
        </div>
      </div>
      
      <hr className="featurette-divider" />
      
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">A Place for Every Taste<span className="text-muted">Where flavors come to life.</span></h2>
          <p className="lead">Known for serving a variety of flavorful dishes,
             restaurants provide a perfect setting for enjoying meals with family and friends.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src={resta2} className="featurette-image img-fluid mx-auto" width="500" height="500" alt="Feature 2" />
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
}
