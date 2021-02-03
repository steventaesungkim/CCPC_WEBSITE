import React, { Component } from "react";
import { Link } from "react-router-dom";
import BodyNavbar from "../../components/navbar/BodyNavbar";

class About extends Component {
  render() {
    return (
      <>
        <BodyNavbar
          kim="Rev. Ki Kim's Bio"
          statement="Mission Statement"
          vision="Vision"
          contact="Contact Us"
        />

        <section className="about__container">
          {/* render the results from each Bodynavbar links */}
        </section>
      </>
    );
  }
}

export default About;
