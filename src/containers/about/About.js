import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <BodyNavbar
          kim="Rev. Ki Kim's Bio"
          statement="Mission Statement"
          vision="Vision"
          contact="Contacts"
        />

        <section className="about__container">
          <div className="nav__title">
            <h2>Rev. Ki Kim</h2>
          </div>
          <div>
            <img />
            <p>lorem ipsum</p>
          </div>
        </section>
      </>
    );
  }
}

export default About;
