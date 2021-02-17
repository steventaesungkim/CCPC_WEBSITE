import React from "react";
import "../../stylesheet/Styles.css";
import ".AdminHeader.css";
import Logo from "../../assets/ccpc_logo.png";

const AdminHeader = ({ title }) => {
  return (
    <div className="AdminHeader sticky">
      <h1>{title}</h1>
      <div className="logo__container">
        <img className="logo__image" src={Logo} alt="church logo" />
      </div>
    </div>
  );
};

export default AdminHeader;
