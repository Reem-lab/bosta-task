import React from 'react';
import Globe from '../images/Globe';
import { Link } from "react-router-dom"; 
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='leftNav__side'>
        <Globe className="logo" />
      </div>

      <div className='item__list'>
        <h6 className='sixth__heading'>Products</h6>
        <ul>
          <li><a href='#solutions'>Solutions</a></li>
          <li><a href='#dashboard'>Dashboard</a></li>
          <li><a href='#mobileapp'>Mobile App</a></li>
        </ul>
      </div>

      
      <div className='item__list'>
        <h6 className='sixth__heading'>Integrations</h6>
        <ul>
          <li><a href='#Shopify'>Shopify</a></li>
          <li><a href='#WooCommerce'>WooCommerce</a></li>
          <li><a href='#Custom APIs'>Custom APIs</a></li>
        </ul>
      </div>

      
      <div className='item__list'>
        <h6 className='sixth__heading'>Businesses</h6>
        <ul>
          <li><a href='#Businesses'>Businesses</a></li>
          <li><a href='#Use Cases'>Use Cases</a></li>
        </ul>
      </div>

      
      <div className='item__list'>
        <h6 className='sixth__heading'>Company</h6>
        <ul>
          <li><a href='#About us'>About us</a></li>
          <li><a href='#Careers'>Careers</a></li>
          <li><a href='#Pricing'>Pricing</a></li>
          <li><a href='#FAQ'>FAQ</a></li>
          <li><a href='#Help Center'>Help Center</a></li>
        </ul>
      </div>

 
         {/* <a className='link__track' href='#track'>Track Shipment</a> */}
         <Link to="/tracking-shipments" className="link__track">Track Shipment</Link>
    </div>
  )
}

export default Footer
