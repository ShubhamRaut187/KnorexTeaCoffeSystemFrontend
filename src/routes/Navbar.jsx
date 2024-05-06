import React,{useState} from 'react';

import { NavLink,Link,useNavigate } from 'react-router-dom';
import {CodeIcon,HamburgetMenuClose,HamburgetMenuOpen} from './Icon'
import './Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span><i className="fa-solid fa-burger fa-xl" style={{color:'white'}}></i>&nbsp;hungermania</span>
                </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/orders"
                className="nav-links"
                onClick={handleClick}
              >
                Orders
              </Link>
            </li>
            <li className="nav-item">
              {/* {
                Status === 'in' ? <button className='logout_button' onClick={()=>{
                  dispatch(handleLogout(null));

                }}>Logout</button> : <Link
                to="/loginsignup"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </Link> */}
              <Link
                to="/login"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </Link> 
              
            </li>
            </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
        </div>
        
    );
}

export default Navbar;