import React from 'react'
import woman from '../images/woman.png'
import '../styles/Flexible.css';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Flexible = () => {
  return (
    <div className='flexible__section'>
             <div className='flexible__img'>
                 <img src={woman} alt='manImg' className='woman__photo' />
              </div>

              <div className='flexible__text'>
                  <h2 className='flexibleSecondary__heading'>Flexible prices for everyone</h2>

                  <div className='wrap__flexible--text'>
                  <p>We customize your pricing plan based on your needs. Tailor your own with our sales team and we guarantee a sky-rocketing shipping experience and sales rates.</p>
                  <p className='p2'><a href='#learnmore'>Learn More</a><CallMadeIcon className='icon--arrow' /> </p>
                  </div>
              </div>
    </div>
  )
}

export default Flexible
