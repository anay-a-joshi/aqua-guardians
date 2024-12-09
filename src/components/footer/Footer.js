import React from "react";
import "./FooterStyles.css";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          {/* <h3>TURTLES</h3> */}
          <p>
            Dedicated to preserving marine life and creating a sustainable
            future for our oceans.
          </p>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="links">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="hero" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="blog" smooth={true} duration={500}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="donate" smooth={true} duration={500}>
                  Donate
                </Link>
              </li>
              <li>
                <Link to="campaign-section" smooth={true} duration={500}>
                  Campaign
                </Link>
              </li>
            </ul>


          </div>
          <div className="legal">
            <h4>Legal</h4>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="contact">
            <h4>Contact Us</h4>
            <ul>
              <li>Email: info@turtles.org</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: Ocean Drive, Marine City</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
