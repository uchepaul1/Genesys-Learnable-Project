import React from "react";
import background from "../assets/background.png";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
      }}
      aria-label="Hero Section"
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-subtitle">Designing Better Experience</div>
          <h1 className="hero-title">
            Problems trying to resolve<br />
            the conflict between
          </h1>
          <p className="hero-description">
            Problems trying to resolve the conflict between the two major realms of Classical physics:
          </p>
          <div className="hero-price">$16.48</div>
          <button className="hero-cta" type="button">
            ADD YOUR CALL TO ACTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;