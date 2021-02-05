import React from "react";
import "./Header.css";

import Navbar from "../navbar/Navbar";
// import Logo from "../../assets/CCPC_LOGO_FINAL3.jpg";
import Logo from "../../assets/ccpc_logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo__image" src={Logo} alt="church logo" />
      <h1 className="main__title">Crossings Community Presbyterian Church</h1>
      <Navbar sermons="Previous Sermons" live="Live Service" about="About" />
    </div>
  );
};
export default Header;
