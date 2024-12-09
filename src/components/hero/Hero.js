import React, { useState } from "react";
import "./HeroStyles.css";

import Video from "../../assets/bg.mp4";

function Hero() {
  const [popupContent, setPopupContent] = useState(null);

  const handleButtonClick = (topic) => {
    // Hardcoded responses
    const responses = {
      turtle: {
        title: "Turtles",
        content:
          "Turtles are ancient reptiles that have lived on Earth for over 200 million years. They play a vital role in marine ecosystems by maintaining healthy seagrass beds and coral reefs. Unfortunately, they are endangered due to habitat destruction, pollution, and hunting.",
        extraInfo: [
          "Food: Seagrass, algae, and jellyfish",
          "Lifespan: 50-100 years",
        ],
      },
      "marine life": {
        title: "Marine Life",
        content:
          "Marine life encompasses all plants, animals, and organisms living in the ocean. It supports biodiversity, regulates the climate, and provides resources for human survival. Protecting marine life ensures a balanced ecosystem and a sustainable future.",
        extraInfo: [
          "Threats: Pollution, overfishing, and climate change",
          "Importance: Oxygen production, carbon absorption",
        ],
      },
    };

    // Set the content for the selected topic
    setPopupContent(responses[topic]);

    // Automatically close the pop-up after 30 seconds
    setTimeout(() => {
      setPopupContent(null);
    }, 30000);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>
          <strong>Save Marine Life</strong>
        </h1>
        <h3>
          The ocean is the lifeblood of our planet, producing over 50% of the
          oxygen we breathe and supporting countless species, including
          ourselves. By saving marine life, we safeguard biodiversity, fight
          climate change, and ensure a healthier future for generations to
          come. Together, we can turn the tide and protect our blue planet.
        </h3>
        <div className="buttons">
          <button onClick={() => handleButtonClick("turtle")}>
            🐢 Learn About Turtles  
          </button>
          <button onClick={() => handleButtonClick("marine life")}>
            🐠 Marine Life Wonders  
          </button>
        </div>
      </div>

      {popupContent && (
        <div className="popup">
          <div className="popup-content">
            <h2>{popupContent.title}</h2>
            <p>{popupContent.content}</p>
            {popupContent.extraInfo.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
            <button className="close-button" onClick={closePopup}>
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
