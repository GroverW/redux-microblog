import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  return (
    <div className="NavBar">
      <div className="NavBar-container">
        <NavLink className="NavBar-logo" to="/">Microblog</NavLink>
        <NavLink to="/new">Add Post</NavLink>
      </div>
    </div>
  )
}

export default NavBar;