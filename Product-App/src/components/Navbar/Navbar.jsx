import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import shop_logo from '../../assets/shop_logo.png';
import search_icon from '../../assets/search_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
           <img src={shop_logo} alt="" className='logo/'/>
        </div>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt=""/>
        </div>
    </div>
  )
}

export default Navbar
