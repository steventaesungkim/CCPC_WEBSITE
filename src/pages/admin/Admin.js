import React, { Component } from "react";
import "./Admin.css";
import AdminHeader from "../../components/navigations/AdminNav";

class Admin extends Component {
  state = {};

  render() {
    return (
      <div className="admin">
        <AdminHeader title="CCPC Admin" />
      </div>
    );
  }
}

export default Admin;
