import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-header-row">
        <div className="footer-brand">Bandage</div>
        <div className="footer-socials" aria-label="Social Media">
          <a href="#" className="footer-social" aria-label="Facebook">
            <img src="src/assets/facebook.svg" alt="" />
          </a>
          <a href="#" className="footer-social" aria-label="Instagram">
            <img src="src/assets/ant-design_instagram-outlined.svg" alt="" />
          </a>
          <a href="#" className="footer-social" aria-label="Twitter">
            <img src="src/assets/twitter.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-main-row">
        <div className="footer-col">
          <div className="footer-col-title">Company Info</div>
          <ul className="footer-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Legal</div>
          <ul className="footer-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Features</div>
          <ul className="footer-list">
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Resources</div>
          <ul className="footer-list">
            <li><a href="#">IOS &amp; Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
        <div className="footer-col footer-col-touch">
          <div className="footer-col-title">Get In Touch</div>
          <form className="footer-form" onSubmit={e => e.preventDefault()} aria-label="Subscribe">
            <input type="email" className="footer-input" placeholder="Your Email" aria-label="Your Email" required />
            <button className="footer-btn" type="submit">Subscribe</button>
          </form>
          <div className="footer-col-desc">Lore imp sum dolor Amit</div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;