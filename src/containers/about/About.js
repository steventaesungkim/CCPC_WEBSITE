import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <section className="body__navbar">
          <Link to="#" className="navbar__title">
            Rev. Ki Kim's Bio
          </Link>
          <Link to="#" className="navbar__title">
            Mission Statement
          </Link>
          <Link to="#" className="navbar__title">
            Vision
          </Link>
          <Link to="#" className="navbar__title">
            Contact
          </Link>
        </section>

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
