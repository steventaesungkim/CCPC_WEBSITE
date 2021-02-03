import React from "react";
import { Link } from "react-router-dom";

const BodyNavbar = ({ kim, statement, vision, contact }) => {
  return (
    <section className="body__navbar">
      <Link to="#" className="navbar__title">
        {kim}
      </Link>
      <Link to="#" className="navbar__title">
        {statement}
      </Link>
      <Link to="#" className="navbar__title">
        {vision}
      </Link>
      <Link to="#" className="navbar__title">
        {contact}
      </Link>
    </section>
  );
};

export default BodyNavbar;
