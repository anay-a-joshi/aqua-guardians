import React from "react";
import "./Images.css";

import turtle1 from "../../assets/turtle1.jpg";
import turtle2 from "../../assets/turtle2.jpg";
import turtle3 from "../../assets/turtle3.jpg";
import turtle4 from "../../assets/turtle4.jpg";

const Images = () => {
  return (
    <>
      <div className="blog">
        <h1><strong>🌊 Dive In and Make Waves: Protect Marine Life Today! 🐢</strong></h1>
        <h2>
          Together, we can protect and preserve the oceans and the incredible
          creatures that call them home. Learn about organizations working
          tirelessly to save marine life and how you can make a difference.
        </h2>
      </div>
      <div className="container">
        <div className="image-container">
          <h1>Marine Rescue Alliance</h1>
          <img src={turtle1} alt="Turtle Rescue" />
          <h2>Protecting Turtles</h2>
          <p>
            The Marine Rescue Alliance works globally to save sea turtles from
            threats like plastic pollution, fishing nets, and habitat
            destruction. Join their efforts to ensure these ancient creatures
            thrive for generations to come.
          </p>
        </div>
        <div className="image-container">
          <h1>Ocean Conservation Society</h1>
          <img src={turtle2} alt="Ocean Conservation" />
          <h2>Clean Oceans Initiative</h2>
          <p>
            Ocean Conservation Society is committed to reducing ocean pollution
            and protecting marine habitats. They organize cleanup drives and
            awareness campaigns to safeguard marine ecosystems.
          </p>
        </div>
        <div className="image-container">
          <h1>Blue Planet Defenders</h1>
          <img src={turtle3} alt="Coral Reef Protection" />
          <h2>Preserving Coral Reefs</h2>
          <p>
            Blue Planet Defenders focus on preserving coral reefs, vital to the
            survival of marine species. Their work involves coral restoration
            and educating communities about sustainable practices.
          </p>
        </div>
        <div className="image-container">
          <h1>SeaLife Foundation</h1>
          <img src={turtle4} alt="Marine Awareness" />
          <h2>Advocating for Marine Awareness</h2>
          <p>
            SeaLife Foundation spreads awareness about the importance of marine
            life and its impact on our planet. Their campaigns inspire action to
            protect our oceans for future generations.
          </p>
        </div>
        <div className="image-container">
          <h1>Reef Watch</h1>
          <img
            src="https://i0.wp.com/reefwatchindia.org/wp-content/uploads/2020/12/experiential.jpg?fit=1024%2C683&ssl=1"
            alt="Reef Watch"
          />
          <h2>Monitoring Coral Health</h2>
          <p>
            Reef Watch specializes in monitoring and reporting coral reef
            health. By collaborating with researchers and local communities,
            they work to restore damaged reefs and prevent further decline.
          </p>
        </div>
        <div className="image-container">
          <h1>Plastic-Free Seas</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvYoZIhoq6Wisr3WRxWWgbH2Ezgg_mPjiCw&s"
            alt="Plastic-Free Seas"
          />
          <h2>Ending Ocean Plastic Pollution</h2>
          <p>
            Plastic-Free Seas aims to eliminate plastic waste in the oceans
            through cleanup projects and education campaigns. Their work helps
            protect marine animals from ingesting or becoming entangled in
            plastic debris.
          </p>
        </div>
      </div>
    </>
  );
};

export default Images;
