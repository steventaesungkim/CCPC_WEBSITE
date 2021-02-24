import React from "react";
import "../../stylesheet/Styles.css";
import "./Header.css";
<<<<<<< HEAD:src/components/header/Header.js
import Navbar from "../navbar/Nav.js";
=======
import Navbar from "../navigations/Nav.js";
>>>>>>> 954d61db2025d8c1a65c79e5f74eceb64826f602:src/components/headers/Header.js
import Logo from "../../assets/ccpc_logo.png";

const Header = () => {
  return (
    <div className="header sticky">
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
