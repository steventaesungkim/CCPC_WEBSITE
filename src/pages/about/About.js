import React, { Component } from "react";
import BodyNav from "../../components/navBar/BodyNav";

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
        <BodyNav
          kim="Rev. Ki Kim's Bio"
          statement="Mission Statement"
          vision="Vision"
          contact="Contact Us"
        />
      </>
    );
  }
}

export default About;
