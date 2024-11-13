// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/album">Album</Link></li>
        <li><Link to="/singer">Singer</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
