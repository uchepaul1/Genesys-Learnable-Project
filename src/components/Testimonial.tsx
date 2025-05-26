import React from "react";
import "./Testimonial.css";

import user1 from "../assets/user1.png";
import gallery1 from "../assets/unsplash_0y8p69vwIYM.png";
import gallery2 from "../assets/unsplash_ah7yIXWrtKs.png";
import gallery3 from "../assets/unsplash_6_dx4H4yi1Y.png";
import gallery4 from "../assets/unsplash_GHztzvLLOdQ.png";
import gallery5 from "../assets/unsplash_UUTOuXqaExk.png";
import gallery6 from "../assets/unsplash_rhn8ff1G_QY.png";
import gallery7 from "../assets/unsplash_jo40QKbxUP0.png";
import gallery8 from "../assets/unsplash_QLGA5Zv3doo.png";
import gallery9 from "../assets/unsplash_1R1ecHV4i0Y.png";

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-card">
          <h2 className="testimonial-title">What they say about us</h2>
          <div className="testimonial-image">
            <img src={user1} alt="User" className="testimonial-image__img" />
          </div>
          <div className="testimonial-stars" aria-label="4 out of 5 stars">
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star outlined">&#9734;</span>
          </div>
          <p className="testimonial-text">
            Slate helps you see how many more days you need to work to reach your financial goal.
          </p>
          <div className="testimonial-user">
            <span className="testimonial-user__name">Regina Miles</span>
            <span className="testimonial-user__role">Designer</span>
          </div>
        </div>
        <div className="testimonial-gallery">
          <div className="gallery-grid">
            <div className="gallery-image"><img src={gallery1} alt="Gallery 1" /></div>
            <div className="gallery-image"><img src={gallery2} alt="Gallery 2" /></div>
            <div className="gallery-image"><img src={gallery3} alt="Gallery 3" /></div>
            <div className="gallery-image"><img src={gallery4} alt="Gallery 4" /></div>
            <div className="gallery-image"><img src={gallery5} alt="Gallery 5" /></div>
            <div className="gallery-image"><img src={gallery6} alt="Gallery 6" /></div>
            <div className="gallery-image"><img src={gallery7} alt="Gallery 7" /></div>
            <div className="gallery-image"><img src={gallery8} alt="Gallery 8" /></div>
            <div className="gallery-image"><img src={gallery9} alt="Gallery 9" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;