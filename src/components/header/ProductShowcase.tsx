import React from "react";
import "./ProductShowcase.css";

import mediaBgCover from "../../assets/media-bg-cover.png";
import mediaBgCover1 from "../../assets/media-bg-cover-1.png";
import mediaBgCover2 from "../../assets/media-bg-cover-2.png";
import mediaBgCover3 from "../../assets/media-bg-cover-3.png";

const PhoneIcon = () => (
  <img src="src/assets/call.svg" alt="" />
);
const EmailIcon = () => (
  <img src="src/assets/email.svg" alt="" />
);
const InstagramIcon = () => (
  <img src="src/assets/wins.svg" alt="" />
);
const YoutubeIcon = () => (
  <img src="src/assets/youtube.svg" alt="" />
);
const FacebookIcon = () => (
  <img src="src/assets/facewhite.svg" alt="" />
);
const TwitterIcon = () => (
  <img src="src/assets/tweetwhi.svg" alt="" />
);
const SearchIcon = () => (
  <img src="src/assets/search.svg" alt="" />
);
const CartIcon = () => (
  <img src="src/assets/cart.svg" alt="" />
);
const WishlistIcon = () => (
  <img src="src/assets/love.svg" alt="" />
);

interface ProductCardProps {
  label: string;
  title: string;
  isRight?: boolean;
  onReadMore?: () => void;
  className?: string;
  children: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  label,
  title,
  isRight = false,
  onReadMore,
  className = "",
  children,
}) => (
  <div className={`product-card ${className}`}>
    <div className="product-label">{label}</div>
    {children}
    <div className="product-card-content">
      <div className={`product-title${isRight ? " product-title-alt" : ""}`}>{title}</div>
      <a
        className="product-readmore"
        href="#"
        tabIndex={0}
        onClick={e => {
          e.preventDefault();
          onReadMore?.();
        }}
      >
        Read More
      </a>
    </div>
  </div>
);

const ProductShowcase: React.FC = () => {
  return (
    <div className="showcase-root">
      <header className="top-header">
        <div className="header-left">
          <span className="header-contact">
            <PhoneIcon />
            <span>(225) 555-0118</span>
          </span>
          <span className="header-contact">
            <EmailIcon />
            <span>michelle.rivera@example.com</span>
          </span>
        </div>
        <div className="header-center">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div className="header-right">
          <span>Follow Us :</span>
          <a href="#"><InstagramIcon /></a>
          <a href="#"><YoutubeIcon /></a>
          <a href="#"><FacebookIcon /></a>
          <a href="#"><TwitterIcon /></a>
        </div>
      </header>

      <nav className="main-navbar">
        <div className="navbar-left">
          <span className="brand-name">Bandage</span>
        </div>
        <div className="union">
          <div className="union-left">
            <ul className="navbar-center">
              <li><a href="#">Home</a></li>
              <li>
                <a href="#">Shop <span className="arrow"><img src="src/assets/arrowdown.svg" alt="" /></span></a>
              </li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Pages</a></li>
            </ul>
          </div>
          <div className="union-right">
            <div className="navbar-right">
              <a href="#" className="navbar-link login-link">
                <img className="login-icon" src="src/assets/login.svg" alt="" />
                Login / Register
              </a>  
              <a href="#" className="navbar-icon"><SearchIcon /></a>
              <a href="#" className="navbar-icon badge">
                <CartIcon />
                <span className="badge-number">1</span>
              </a>
              <a href="#" className="navbar-icon badge">
                <WishlistIcon />
                <span className="badge-number">1</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="product-showcase">
        <div className="product-showcase-inner">
          <div className="showcase-left">
            <ProductCard label="5 Items" title="FURNITURE">
              <img src={mediaBgCover} alt="Product" className="product-image product-image-large" />
            </ProductCard>
          </div>
          <div className="showcase-right">
            <ProductCard label="5 Items" title="FURNITURE" isRight>
              <img src={mediaBgCover1} alt="Product" className="product-image product-image-medium" />
            </ProductCard>
            <div className="showcase-bottom-row">
              <ProductCard label="5 Items" title="FURNITURE" isRight>
                <img src={mediaBgCover2} alt="Product" className="product-image product-image-small" />
              </ProductCard>
              <ProductCard label="5 Items" title="FURNITURE" isRight>
                <img src={mediaBgCover3} alt="Product" className="product-image product-image-small" />
              </ProductCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductShowcase;