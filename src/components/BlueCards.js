import React from 'react';
import leftBlue from '../images/blue square to left.svg';
import rightBlue from '../images/bluesquaretoright.svg';
import leftRed from '../images/redsquaretoleft.svg';
import rightRed from '../images/redsquaretoright.svg';
import '../styles/BlueCards.css';

const BlueCards = () => {



  return (
    <div className='blue__cards'>
    <div className='blue__card right__side--card'>
      <img className='blueCard__visible' src={rightBlue} alt='Merchants'/>
        <p><b>
        15,000 
          </b>
        Merchants
      </p>
      </div>

      <div className='blue__card left__side--card'>
      <img src={leftBlue} alt='Merchants' className='blue-card--mv'/>
      {/* <img src={leftRed} alt='hub' className='red-card--mv' /> */}
        <p>   <b>+25</b>
          Hubs
      </p>
      </div>

      <div className='blue__card right__side--card'>
      <img src={rightBlue} alt='sucessfull parcels' className='blue-card--mv'/>
      {/* <img src={rightRed} alt='successfull parcels' className='red-card--mv' /> */}
        <p> 
          <b>10,000,000</b>
        Successfull parcels
      </p>
      </div>

      <div className='blue__card left__side--card'>
      <img src={leftBlue} alt='stars'/>
        <p>
          <b>1,000</b>
          Stars
      </p>
      </div>

    </div>
  )
}

export default BlueCards
