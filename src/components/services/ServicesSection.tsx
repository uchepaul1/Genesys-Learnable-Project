import image_1 from "../../assets/bx_bxs-book-reader.svg";
import image_2 from "../../assets/uil_arrow-growth.svg";
import image_3 from "../../assets/icon cool-icon-153.svg";
import React from 'react';
import './ServicesSection.css';

const ServicesSection: React.FC = () => (
  <section className="services-section">
    <header className="services-header">
      <p className="services-header__suptitle">Featured Products</p>
      <h1 className="services-header__title">THE BEST SERVICES</h1>
      <p className="services-header__subtitle">
        Problems trying to resolve the conflict between
      </p>
    </header>
    <div className="services-list">
      <div className="service-card">
        <div className="service-card__icon" aria-hidden="true">
          <img src={image_1} alt="" />
        </div>
        <h2 className="service-card__title">Easy Wins</h2>
        <p className="service-card__desc">
          Get your best looking smile now!
        </p>
      </div>
      <div className="service-card">
        <div className="service-card__icon" aria-hidden="true">
          <img src={image_3} alt="" />
        </div>
        <h2 className="service-card__title">Concrete</h2>
        <p className="service-card__desc">
          Defalcate is most focused in helping you discover your most beautiful smile
        </p>
      </div>
      <div className="service-card">
        <div className="service-card__icon" aria-hidden="true">
          <img src={image_2} alt="" />
        </div>
        <h2 className="service-card__title">Hack Growth</h2>
        <p className="service-card__desc">
          Overcame any hurdle or any other problem.
        </p>
      </div>
    </div>
  </section>
);

export default ServicesSection;