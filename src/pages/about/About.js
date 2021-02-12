import React, { Component } from "react";
import BodyNavbar from "../../components/navbar/BodyNavbar";

// import Bio from "../../containers/kimBio/Bio";
// import MissionStatement from "../../containers/missionStatement/MissionStatement";
// import Vision from "../../containers/vision/Vision";
// import Contact from "../../containers/contact/ContactUs";

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
