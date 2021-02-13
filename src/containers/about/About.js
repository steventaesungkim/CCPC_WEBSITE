import React, { Component } from "react";
import {
  BrowserRouter as Router, 
  Route,
}   from 'react-router-dom';

import BodyNavbar from "../../components/navbar/BodyNavbar";
import AboutBodyContainer from "../about/AboutBodyContainer";
// import Bio from "../../containers/kimBio/Bio";

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
        <BodyNavbar
          Bio="Rev. Ki Kim's Bio"
          statement="Mission Statement"
          vision="Vision"
          contact="Contact Us"
        />
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
      </>
    );
  }
}

export default About;
