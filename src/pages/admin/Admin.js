import React, { Component, lazy } from "react";
import "./Admin.css";
// import "../../stylesheet/Styles.css";
import AdminHeader from "../../components/headers/AdminHeader";
import AdminNav from "../../components/navigations/AdminNav";
import Logo from "../../assets/ccpc_logo.png";

const LiveVideo = lazy(() => import("../../pages/liveVideo/LiveVideo"));
const VideoCenter = lazy(() => import("../../pages/liveVideo/LiveVideo"));

class Admin extends Component {
  state = {};

  render() {
    return (
      <div className="admin">
        <AdminHeader title="CCPC Admin" logo={Logo} />

        <AdminNav
          livevideo="Live Video"
          videocenter="Video Center"
          LiveVideo={LiveVideo}
          VideoCenter={VideoCenter}
        />
      </div>
    );
  }
}

export default Admin;
