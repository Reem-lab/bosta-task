/* eslint-disable max-len */
import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';
import '../styles/PartnerInfo.css';
import PartnersLogos from './PartnersLogos';
import PartnersTracks from '../images/partnersTracks.PNG';
import partnerTrackRB from '../images/partnersTracks-removebg-preview.png';

const PartnerInfo = () => (
  <div className="wrap__partner--section">
    <h3>Egypt’s #1 Shipping Partner For:</h3>
    <div className="cutomer__business">
      <div className="business">
        <svg width="2em" height="2em" viewBox="0 0 30 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="">
          <circle opacity="0.5" cx="15.4737" cy="8.73684" r="6.73684" stroke="#0098A5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }} />
          <path d="M15.4737 20.5263C9.40411 20.5263 4.2719 24.5397 2.58601 30.0574C1.94048 32.1701 3.79086 34 6 34H24.9474C27.1565 34 29.0069 32.1701 28.3614 30.0574C26.6755 24.5397 21.5433 20.5263 15.4737 20.5263Z" stroke="#E30613" strokeWidth="3" style={{ color: '#fff' }} />
        </svg>
        <h5>Business</h5>
        <p>
          Bosta can equip
          your logistic
          operations with efficient tools and innovative
          tech solutions — dashboard, plugins,
          and API integrations
        </p>
        <p className="p3">
          <a href="#learnmore">Start with Bosta</a>
          <CallMadeIcon className="icon--arrow__partner" />
          {' '}

        </p>
      </div>

      <div className="customer">
        <svg width="2em" height="2em" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="">
          <path d="M18 24V26" stroke="#E30613" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path opacity="0.5" d="M2 21L13 22C13 22 14.5 19 18 19C21.5 19 23 22 23 22L34 21" stroke="#0098A5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12C2 9.79086 3.79086 8 6 8H30C32.2091 8 34 9.79086 34 12V30C34 32.2091 32.2091 34 30 34H6C3.79086 34 2 32.2091 2 30V12Z" stroke="#E30613" strokeWidth="3" style={{ color: '#fff' }} />
          <path d="M25 8V6C25 3.79086 23.2091 2 21 2H15C12.7909 2 11 3.79086 11 6V8" stroke="#E30613" strokeWidth="3" style={{ color: '#fff' }} />
        </svg>
        <h5>Small & Medium Business</h5>
        <p>We ensure seamless delivery operations for your small or mid-sized hustle with our super-smooth mobile app.</p>
        <p className="p3">
          <a href="#learnmore">Start with Bosta</a>
          <CallMadeIcon className="icon--arrow__partner" />
          {' '}

        </p>
      </div>
    </div>

    <h4>Trusted by top companies in the region</h4>
    <PartnersLogos />

    <div className="partners__tracks--last">
      <img className="partner-tracks--dt" src={PartnersTracks} alt="partnersTracks" />
      <img className="partner-tracks--mv" src={partnerTrackRB} alt="partnersTracks" />
      <h5 className="fivth__heading">Sign Up & Start Shipping Today</h5>
      <button className="partner__btn" type="button">Start Shipping</button>
    </div>
  </div>
);

export default PartnerInfo;
