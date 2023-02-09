import React, { useState } from 'react';
import  '../images/Globe';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/NavBar.css';
import Globe from '../images/Globe';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { displayShipment } from '../redux/actions/ShipmentsAction';
import { useNavigate } from "react-router-dom";



const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [shipment, setShipment] = useState('');
  const shipments = useSelector((state) => state.ShipmentsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(displayShipment(shipment));
  navigate('/tracking-shipments')
}
  

  const toggleModal = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <nav>
    <div className='nav'>
      <div className='leftNav__side'>
        <Globe className="logo" />
        <HiOutlineMenuAlt4 className="navbar__hamburger" />
      </div>

      <div className='middleNav__side'>
         <span>
         Products
         <div className='arrow__down'>
         <KeyboardArrowDownIcon />
         </div>
         </span>
         <span>
         Integrations
         <div className='arrow__down'>
         <KeyboardArrowDownIcon />
         </div>
         </span>
         <span>
         Use Cases
         <div className='arrow__down'>
         <KeyboardArrowDownIcon  />
         </div>
         </span>
         <span>
          <a className='anchor__link' href='#pricing'>
          Pricing
          </a>
         </span>
      </div>
       
       <div className='rightNav__side'>
          <span className='trackShipment--mobile' onMouseOver={toggleModal}>
            Track Shipment
            <div className='arrow__down' >
            <KeyboardArrowDownIcon />
            </div>
         </span>

        
      
      <p className='en-mobile'>
          En
          <div className='arrow__down'>
          <KeyboardArrowDownIcon className='arrow__down' />
          </div>
         </p>
    

         {modal && (
        <div className="modal">
          <div onMouseLeave={toggleModal} className="modal-content">
             <h3 className='modal__heading'>Track your shipment</h3>
             <form className="form" onSubmit={handleSubmit}>
              <input
             className='input__search'
              type="text"
              onChange={(e) => { setShipment(e.target.value) }}
             placeholder="Tracking No." />
          <button type='submit' className='bg-search'>
          <svg className='bg-search-img' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L28 28" stroke="white" stroke-width="" stroke-linecap="round"></path><circle cx="13" cy="13" r="11" stroke="white" stroke-width="3"></circle></svg>
          </button>
              </form>
          </div>
        </div>
      )}

          <a className='sign__in' href='#signin'>Sign In</a>
          <a className='sign__up'  href='#signin'>Sign Up</a>
       </div>
    </div>
    </nav>
  )
}

export default NavBar
