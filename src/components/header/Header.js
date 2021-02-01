import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <img className="logo__image" />
      <h1 className="main__title"></h1>
      <Navbar sermons="Previous Sermons" live="Live Service" about="About" />
    </div>
  );
};
export default Header;
