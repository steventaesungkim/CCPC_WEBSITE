import React, { Component } from "react";
import "./CCPC.css";
// import Header from "../../components/header/Header";
import Divider from "../../assets/Divider.png";
import Video from "../../components/videoDisplay/Video";

class CCPC extends Component {
  render() {
    return (
      <>
        {/* NOTE: Need to decide where to have Header component. Since Header will only be used for the landing and about route, do not need it in the admin route.  */}
        {/* <Header /> */}

        <section className="CCPC__body">
          <div className="titles">
            <h4>Previous Sermon</h4>
            <img src={Divider} alt="" />
            <p>1/19/2021</p>

            <h1>"Receive the Holy Spirit"</h1>
            <h3>John 20:21-23</h3>
          </div>

          <Video />
        </section>
      </>
    );
  }
}

export default CCPC;
