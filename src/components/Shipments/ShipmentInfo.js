import React from 'react';
import '../../styles/ShipmentsInfo.css';


const ShipmentInfo = ({ shipments }) => {

  return (
    <div>
      {!shipments.data && shipments.loaded && (
        <div className="no-shipments--div">
          <svg width="40" height="30" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.70522 14.7029L9.19066 3.73717C9.32716 3.51214 9.51936 3.32608 9.7487 3.19696C9.97805 3.06783 10.2368 3 10.5 3C10.7632 3 11.022 3.06783 11.2513 3.19696C11.4806 3.32608 11.6728 3.51214 11.8093 3.73717L18.2948 14.7029C18.4285 14.9345 18.4992 15.197 18.5 15.4644C18.5007 15.7318 18.4315 15.9947 18.299 16.227C18.1666 16.4594 17.9757 16.6529 17.7452 16.7886C17.5148 16.9242 17.2528 16.9971 16.9854 17H4.01456C3.74718 16.9971 3.48523 16.9242 3.25477 16.7886C3.02431 16.6529 2.83337 16.4594 2.70095 16.227C2.56854 15.9947 2.49926 15.7318 2.50001 15.4644C2.50075 15.197 2.57151 14.9345 2.70522 14.7029ZM9.71281 7.05453C9.74621 6.87008 9.84332 6.70322 9.98719 6.58305C10.1311 6.46289 10.3126 6.39707 10.5 6.39707C10.6875 6.39707 10.869 6.46289 11.0128 6.58305C11.1567 6.70322 11.2538 6.87008 11.2872 7.05453L11.3 7.19853V11.1985L11.2872 11.3425C11.2538 11.527 11.1567 11.6939 11.0128 11.814C10.869 11.9342 10.6875 12 10.5 12C10.3126 12 10.1311 11.9342 9.98719 11.814C9.84332 11.6939 9.74621 11.527 9.71281 11.3425L9.70001 11.1985V7.19853L9.71281 7.05453ZM9.71281 13.856C9.74621 13.6716 9.84332 13.5047 9.98719 13.3846C10.1311 13.2644 10.3126 13.1986 10.5 13.1986C10.6875 13.1986 10.869 13.2644 11.0128 13.3846C11.1567 13.5047 11.2538 13.6716 11.2872 13.856L11.3 14L11.2872 14.144C11.2538 14.3285 11.1567 14.4954 11.0128 14.6155C10.869 14.7357 10.6875 14.8015 10.5 14.8015C10.3126 14.8015 10.1311 14.7357 9.98719 14.6155C9.84332 14.4954 9.74621 14.3285 9.71281 14.144L9.70001 14L9.71281 13.856Z" fill="#B42318"></path></svg>
          <p>
            No record of this tracking number can be found at this time, please check the number and try again later. For further assistance, please contact Customer Service.
          </p>
          </div>
      )}
      {shipments.data && shipments.loaded && (
        <div className="shipments__info" key={shipments.data.id}>
          <span className="tracking__num">Shipment No. {shipments.data.trackingNumber}</span>
          <h2 className="tracking__heading">{shipments.data.state}</h2>
          {shipments.data.state === 'DELIVERED' ? <div className="lines">
              <hr className="line"></hr>
              <hr className="line"></hr>
              <hr className="line"></hr>
          </div> : 
          <div className="lines">
          <hr className="line"></hr>
          <hr className="line"></hr>
          <hr className="line3"></hr>
         </div>}
          <p>
            {shipments.data.state === 'DELIVERED' ? 
            <p className="tracking-para">
              Your shipper requested a pickup. Bosta will pick it up soon
              <span className="tracking-time">{shipments.data.timestamp}</span>
            </p> : <p className="tracking-para">
            Order is canceled and it will be returned back to the shipper
            <span className="tracking-time">{shipments.data.timestamp}</span>
              </p>}
          </p>
        </div>
      )}
    </div>
  )
}

export default ShipmentInfo;
