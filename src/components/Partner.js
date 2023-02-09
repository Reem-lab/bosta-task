import React from 'react';
import '../styles/Partner.css';
import PartnerInfo from './PartnerInfo';

const Partner = () => {
  return (
    <div className='background__partner'>
      <svg width="653" height="1119" viewBox="0 0 654 1119" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M634 0L20 0C8.95428 0 0 8.95433 0 20L0 1098.25C0 1113.67 16.7156 1123.29 30.0488 1115.54L644.049 758.732C650.209 755.153 654 748.565 654 741.44L654 20C654 8.95431 645.046 0 634 0Z" fill="#1DBDCD"></path></svg>

      <PartnerInfo />
    </div>
  )
}

export default Partner
