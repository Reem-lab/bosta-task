// import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/Menu.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// eslint-disable-next-line react/prop-types
const Menu = ({ onclick }) => (
  <>
    <div className="main">
      <div className="menu--list">
        <ul className="ul-menu">
          <li className="li-menu">
            <a onClick={onclick} className="anchor" href="#header">Products</a>
            {' '}
            <KeyboardArrowDownIcon className="arrow__down" />
          </li>
          <hr className="horizontal_dotted_line " />
          <li className="li-menu">
            <a onClick={onclick} className="anchor" href="#works">Integrations</a>
            {' '}
            <KeyboardArrowDownIcon className="arrow__down" />
          </li>
          <hr className="horizontal_dotted_line " />
          <li className="li-menu">
            <a onClick={onclick} className="anchor" href="#about">Use Cases</a>
            {' '}
            <KeyboardArrowDownIcon className="arrow__down" />
          </li>
          <hr className="horizontal_dotted_line " />
          <li className="li-menu">
            <a onClick={onclick} className="anchor" href="#contact">Pricing</a>
            {' '}
          </li>
          <hr className="horizontal_dotted_line " />
          <li className="li-menu">
            <a onClick={onclick} className="anchor" href="#contact">العربية</a>
            {' '}
          </li>
          <hr className="horizontal_dotted_line " />
        </ul>
        <div className="btns">
          <button className="sign__in--menu" type="button">
            Sign In
          </button>
          <button className="sign__up--menu" type="button">
            Sign Up
          </button>
        </div>
      </div>
      <div className="exit-div">
        <AiOutlineClose className="exit" onClick={onclick} />
      </div>
    </div>
  </>
);

// Menu.prototype = {
//   onclick: PropTypes.func,
// };

export default Menu;
