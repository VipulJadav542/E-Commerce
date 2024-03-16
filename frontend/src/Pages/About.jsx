import React from 'react';
import './CSS/About.css';
import aboutImage from '../Components/Assets/about.png'; 

const About = () => {
  return (
    <div className='about-main'>
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>Welcome to our Website,where style meets convenience.Discover the latest trends,curated collections, and timeless classics for men , women , and children.Immerse youeself in a seamless shopping experience , exploring a diverse range of high-quality apparel and accessories.</p>
          <p>Our mission is to make shopping convenient, enjoyable, and affordable for everyone. We are committed to offering high-quality products from trusted brands at competitive prices, ensuring that you get the best value for your money.</p>
          <p>Thank you for choosing our clothing website ! We appreciate your trust and look forward to serving you for all your future shopping needs.</p>
          <p>Happy shopping!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
