import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="main-nav">
      <h2>NAVBAR</h2>
    <div className="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/courses">Courses</Link>

      <Link className="link" to="/product">Product</Link>
    </div>
    </div>
  );
};

export default Nav;
