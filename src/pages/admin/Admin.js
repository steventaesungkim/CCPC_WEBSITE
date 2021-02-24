import React, { Component } from "react";
import "./Admin.css";
import AdminHeader from "../../components/headers/AdminHeader";
import AdminNav from "../../components/navigations/AdminNav";
import Logo from "../../assets/ccpc_logo.png";

class Admin extends Component {
  state = {};

  render() {
    return (
      <section className="admin">
        <AdminHeader title="CCPC Admin" logo={Logo} />

        <AdminNav livevideo="Live Video" videocenter="Video Center" />
      </section>
    );
  }
}

export default Admin;
