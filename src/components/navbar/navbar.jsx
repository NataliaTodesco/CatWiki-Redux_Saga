import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className="Navbar px-5 py-3">
      <Link to="/" style={{color: 'black'}}>
        <label>CatWiki</label> <i className="fas fa-solid fa-paw"></i>
      </Link>
    </div>
  );
}

export default Navbar;
