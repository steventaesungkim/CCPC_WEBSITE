import React, { Component } from "react";
// import Header from "../../components/header/Header";
import Video from "../../components/videoDisplay/Video";

class CCPC extends Component {
  render() {
    return (
      <>
        {/* NOTE: Need to decide where to have Header component. Since Header will only be used for the landing and about route, do not need it in the admin route.  */}
        {/* <Header /> */}

        <section className="CCPC__body">
          <div className="titles">
            <h5>Body Title</h5>
            {/* <img /> */}
            <p>1/19/2021</p>

            <h1>Video Title</h1>
            <h3>Sub Title</h3>
          </div>

          <Video />
        </section>
      </>
    );
  }
}

export default CCPC;
