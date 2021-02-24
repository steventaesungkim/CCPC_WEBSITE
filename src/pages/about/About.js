import React, { Component } from "react";
<<<<<<< HEAD
import BodyNav from "../../components/navbar/BodyNav";
=======
import BodyNav from "../../components/navigations/BodyNav";
>>>>>>> 954d61db2025d8c1a65c79e5f74eceb64826f602

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
