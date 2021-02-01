import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ sermons, live, about }) => {
  return (
    <div className="main__navbar">
      <Link className="nav__link">{sermons}</Link>
      <Link to="/live" className="nav__link">
        {live}
      </Link>
      <Link to="/about" className="nav__link">
        {about}
      </Link>
    </div>
  );
};

export default Navbar;
