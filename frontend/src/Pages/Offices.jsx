import React from 'react'
import './CSS/Offices.css'

const Offices = () => {
  return (
    <div className='office-main'>
      <h2>Our Offices</h2>
      <p>We have offices located in various cities:</p>
      <ul>
        <li>
          New York Office : <a href="https://www.google.com/maps/place/New+York">View on Google Maps</a>
        </li>
        <li>
          London Office : <a href="https://www.google.com/maps/place/London">View on Google Maps</a>
        </li>
        
      </ul>
    </div>
  )
}

export default Offices
