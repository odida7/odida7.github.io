import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { GrTwitter } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa';
import  './Footer.css'


function Footer() {
  return (
    <div className='footer'>
      <div className='tags'>
          <div className='tag'>
              <h1>About us</h1>
              <Link to='/'>About Us</Link>
              <Link to='/'>Career</Link>
              <Link to='/'>Terms and Conditions</Link>
              <Link to='/'>Privacy Policy</Link>             
          </div>

            <div className='tag'>
              <h1>Let Us Help You</h1>
              <Link to='/'>Help & FAQ</Link>
              <Link to='/'>Payment Methods</Link>
              <Link to='/'>Shipping & Delivery</Link>
              <Link to='/'>Contact Us</Link>          
            </div>

            <div className='tagicon'>
              <h1>Join Us</h1>
                <FaFacebookF />
                <GrTwitter />
                <FaLinkedinIn />      
          </div>
      </div>

      <p>&copy; easyshopinternational.org</p>
    </div>
  )
}

export default Footer;
