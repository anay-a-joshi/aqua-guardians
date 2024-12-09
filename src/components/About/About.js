import React from "react";
import "./AboutStyles.css";

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          At TURTLES, our mission is to protect and preserve marine life,
          ensuring a sustainable future for our oceans and the incredible
          creatures within them. Together, we strive to create awareness,
          inspire action, and drive meaningful change for the health of our
          planet.
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to combat ocean pollution, conserve endangered marine
            species, and promote sustainable practices. We aim to restore
            balance to marine ecosystems and educate communities about the
            importance of protecting our oceans.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a world where marine life thrives, free from the threats
            of pollution and exploitation. A future where oceans remain a source
            of life, beauty, and inspiration for generations to come.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Impact</h2>
          <ul>
            <li>Saved over 10,000 marine animals through rescue operations.</li>
            <li>Organized 500+ coastal cleanup drives globally.</li>
            <li>Partnered with 200 NGOs and conservation groups worldwide.</li>
            <li>Educated 1M+ individuals on sustainable practices.</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Get Involved</h2>
          <p>
            Whether you want to volunteer, donate, or partner with us, there are
            countless ways to get involved. Join us in making a lasting impact
            on our oceans and marine life.
          </p>
          <button className="get-involved-button">Join Us</button>
        </div>
      </div>
    </div>
  );
}

export default About;
