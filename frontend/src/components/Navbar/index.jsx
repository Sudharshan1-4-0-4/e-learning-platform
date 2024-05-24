// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
function Navbar() {
  return (
    <nav className='container'>
      <ul className='align'>
        <li className='item'><Link to="/">Home</Link></li>
        <li className='item'><Link to="/courses">Courses</Link></li>
        <li className='item'><Link to="/login">Login</Link></li>
        <li className='item'><Link to="/cart">Cart</Link></li>
        <li className='item'><Link to="/registrations">Your_Courses</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
