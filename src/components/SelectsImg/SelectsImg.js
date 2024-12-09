import React from "react";
import "./SelectsImgStyles.css";

function FeaturedCampaign() {
  return (
    <div className="campaign-section">
      <div className="campaign-container">
        {/* Left Section */}
        <div className="campaign-image">
          <img
            src=" https://musicofnature.com/wp-content/uploads/2018/09/seal_island-800x457.jpg" // Replace with actual image URL
            alt="Campaign"
          />
        </div>
        {/* Right Section */}
        <div className="campaign-content">
          <h3 className="campaign-title">FEATURED CAMPAIGN</h3>
          <h1 className="campaign-heading">Save the Oceans, Feed the World</h1>
          <p className="campaign-description">
            We are restoring the world’s wild fish populations to serve as a
            sustainable source of protein for people.
          </p>
          <button className="campaign-button">Learn More</button>
        </div>
        {/* More Campaigns Section */}
        <div className="more-campaigns">
          <h3>More Campaigns</h3>
          <ul>
            <li>Protect Habitat &raquo;</li>
            <li>Bycatch &raquo;</li>
            <li>Plastics &raquo;</li>
            <li>View All &raquo;</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCampaign;
