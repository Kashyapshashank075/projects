import React from "react";
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/P">Courses</NavLink>

      <NavLink to="/">Product</NavLink>
    </div>
  );
};

export default Nav;
