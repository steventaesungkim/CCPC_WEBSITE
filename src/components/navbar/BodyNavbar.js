import React from "react";
import { Link } from "react-router-dom";

const BodyNavbar = ({ Bio, statement, vision, contact }) => {
  return (
    <section className="body__navbar">
      <Link to="/about/bio" className="navbar__title">
        {Bio}
      </Link>
      <Link to="/about/statement" className="navbar__title">
        {statement}
      </Link>
      <Link to="/about/vision" className="navbar__title">
        {vision}
      </Link>
      <Link to="/about/contact" className="navbar__title">
        {contact}
      </Link>
    </section>
  );
};

export default BodyNavbar;
