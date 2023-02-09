import React, { useState, useEffect } from 'react'
import '../../styles/TrackingShipments.css';
import Globe from '../../images/Globe';
import { useSelector, useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { displayShipment, loadShipments } from '../../redux/actions/ShipmentsAction';
import ShipmentInfo from './ShipmentInfo';

const TrackingShipments = () => {
  const [trackingCode, setTeackingCode] = useState('');
  const shipments = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadShipments(shipments));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(displayShipment(trackingCode));
  }

  return (
    <>
      <div className='track--nav'>
        <div className='leftNav__side'>
          <Globe className="logo" />
        </div>
        <span className='en'>
          En
          <div className='arrow__down'>
            <KeyboardArrowDownIcon className='arrow__down' />
          </div>
        </span>
      </div>
      <div className='tracking__shipments'>
        <h3 className='modal__heading--track'>Track your shipment</h3>
        <div className='search__bar--track'>
          <form onSubmit={handleSubmit}>
            <input
              className='input__search--track'
              type="text"
              onChange={(e) => { setTeackingCode(e.target.value) }}
              placeholder="Tracking No." />
            <button type='submit' className='bg-search--track'>
              <svg className='bg-search-img--track' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L28 28" stroke="white" stroke-width="" stroke-linecap="round"></path><circle cx="13" cy="13" r="11" stroke="white" stroke-width="3"></circle></svg>
            </button>
          </form>
        </div>

        <ShipmentInfo shipments={shipments}/>
      </div>
    </>
  )
}

export default TrackingShipments
