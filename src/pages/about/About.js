import React, { Component } from "react";
<<<<<<< HEAD:src/containers/about/About.js
import {
  BrowserRouter as Router, 
  Route,
}   from 'react-router-dom';

import BodyNavbar from "../../components/navbar/BodyNavbar";
import AboutBodyContainer from "../about/AboutBodyContainer";
// import Bio from "../../containers/kimBio/Bio";
=======
import BodyNav from "../../components/navBar/BodyNav";
>>>>>>> 82ee5bfe4bce7bfd1d9b3a192a1e72b7b6b09748:src/pages/about/About.js

class About extends Component {
  constructor(props) {
    super(props);
    this.state={
      
    }
  }
  render() {
    console.log("i'm here")
    return (
      <>
<<<<<<< HEAD:src/containers/about/About.js
        <BodyNavbar
          Bio="Rev. Ki Kim's Bio"
=======
        <BodyNav
          kim="Rev. Ki Kim's Bio"
>>>>>>> 82ee5bfe4bce7bfd1d9b3a192a1e72b7b6b09748:src/pages/about/About.js
          statement="Mission Statement"
          vision="Vision"
          contact="Contact Us"
        />
<<<<<<< HEAD:src/containers/about/About.js
        <AboutBodyContainer
          // {Bio}
          Bio="Rev. Ki Kim's Bio"
          statement="Mission Statement"
          vision="Vision"
          contact="Contact Us"
        />
        
        {/* <section className="about__container">
          render the results from each Bodynavbar links
        </section> */}
=======
>>>>>>> 82ee5bfe4bce7bfd1d9b3a192a1e72b7b6b09748:src/pages/about/About.js
      </>
    );
  }
}

export default About;
