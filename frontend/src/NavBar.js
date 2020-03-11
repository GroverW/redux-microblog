import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {

  return (
    <div className="NavBar">
      <NavLink to="/">Microblog</NavLink>
      <NavLink to="/new">Add Post</NavLink>
    </div>
  )
}

export default NavBar;