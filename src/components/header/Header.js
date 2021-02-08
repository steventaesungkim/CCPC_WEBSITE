import React from "react";
import "./Header.css";

import Navbar from "../navbar/Navbar";
// import Logo from "../../assets/CCPC_LOGO_FINAL3.jpg";
import Logo from "../../assets/ccpc_logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__container">
        <img className="logo__image" src={Logo} alt="church logo" />
      </div>
      <div className="main__title">
        <p>Crossings Community</p>
        <p>Presbyterian Church</p>
      </div>
      <Navbar sermons="Previous Sermons" live="Live Service" about="About" />
    </div>
  );
};
export default Header;
