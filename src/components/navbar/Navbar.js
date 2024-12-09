import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";

import "./NavbarStyles.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleNav = () => setNav(!nav);

  const handleTurtleClick = () => {
    setShowImage(true); // Show the image
    setTimeout(() => {
      setShowImage(false); // Hide the image after 3 seconds
    }, 2200);
  };

  return (
    <>
      <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
        <div className={nav ? "logo dark" : "logo"}>
          <h2 onClick={handleTurtleClick} style={{ cursor: "pointer" }}>
            TURTLES
          </h2>
        </div>
        <ul className="nav-menu">
          <Link to="hero" smooth={true} duration={500}>
            <li> Home </li>
          </Link>
          <Link to="blog" smooth={true} duration={500}>
            <li> Blog </li>
          </Link>
          <Link to="donate" smooth={true} duration={500}>
            <li> Donate </li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li> About </li>
          </Link>
          <Link to="campaign-section" smooth={true} duration={500}>
            <li> Campaign </li>
          </Link>
        </ul>
        <div className="nav-icons">
          <BsPerson className="icon" />
        </div>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <HiOutlineMenuAlt4 className="icon" />
          ) : (
            <AiOutlineClose style={{ color: "#000" }} className="icon" />
          )}
        </div>
        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
            <Link to="Hero" smooth={true} duration={500}>
              <li> Home </li>
            </Link>
            <Link to="blog" smooth={true} duration={500}>
              <li> Blog </li>
            </Link>
            <Link to="donate" smooth={true} duration={500}>
              <li> Donate </li>
            </Link>
            <Link to="About" smooth={true} duration={500}>
              <li> About </li>
            </Link>
            <Link to="campaign-section" smooth={true} duration={500}>
              <li> Campaign </li>
            </Link>
          </ul>
          <div className="mobile-menu-bottom">
            <div className="menu-icons">
              <button>Search</button>
              <button>Account</button>
            </div>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaPinterest className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Image Pop-Up */}
      {showImage && (
        <div className="image-popup">
          <img
            src="/images/Turtle-Welcome.jpg"
            alt="Turtle Welcome"
            className="turtle-image"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
