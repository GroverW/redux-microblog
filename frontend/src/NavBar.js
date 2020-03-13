import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

function NavBar() {

  return (
    <div className="NavBar">
      <NavLink className="NavBar-logo" to="/">Microblog</NavLink>
      <NavLink to="/new">Add Post</NavLink>
    </div>
  )
}

export default NavBar;