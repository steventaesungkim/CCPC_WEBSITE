import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./BodyNavbar.css";

const BodyNavbar = ({ kim, statement, vision, contact, props }) => {
  // console.log(props.location.pathname);
  let { url } = useRouteMatch();

  return (
    <section className="body__navbar">
      <Link to={`${url}/bio`} className="navbar__title">
        {kim}
      </Link>
      <Link to={`${url}/statement`} className="navbar__title">
        {statement}
      </Link>
      <Link to={`${url}/vision`} className="navbar__title">
        {vision}
      </Link>
      <Link to={`${url}/contact`} className="navbar__title">
        {contact}
      </Link>
    </section>
  );
};

export default BodyNavbar;
