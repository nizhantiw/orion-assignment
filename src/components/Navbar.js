import React from 'react'
import { FaBars, FaUser, FaSearch } from 'react-icons/fa';
import './Navbar.css'
import logo from './Logo.jpg'


function Navbar() {
  return (
    <nav>
      <img src={logo} width={30} alt="logo" />
      <div className="logo">ORION</div>
      <div className="search-box">
        <input type="text" placeholder='' />
        <div className='button'><FaSearch/></div>
          
          
      </div>
      <ul className="menu">
        <li><a href="#">Statistics</a></li>
        <li><a href="#">Overview</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Analytics</a></li>
      </ul>
      <div className="icons">
        <FaUser />
        <FaBars />
        
      </div>
      
    </nav>
  );
}

export default Navbar;
