import React from 'react';
import './CSS/Contactus.css';

const Contactus = () => {
  return (
    <div className='contactus-main'>
      <div className="contactus-container">
        <h1>Contact Us</h1>
        <div className="contactus-fields">
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="text">Subject</label>
          <input type="text" id="subject" name="email" required />
          
          <label htmlFor="text">How can we help ?</label>
          <input type="text" id="help" name="email" required />
        </div>
        <button>SEND</button> 
      </div>
      
    </div>
  );
}

export default Contactus;

