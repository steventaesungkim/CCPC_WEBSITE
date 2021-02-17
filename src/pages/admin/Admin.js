import React, { Component } from "react";
import "./Admin.css";
import AdminHeader from "../../components/headers/AdminHeader";
import AdminNav from "../../components/navigations/AdminNav";

class Admin extends Component {
  state = {};

  render() {
    return (
      <div className="admin">
        <AdminHeader title="CCPC Admin" />
        <AdminNav livevideo="Live Video" videocenter="Video Center" />
      </div>
    );
  }
}

export default Admin;
