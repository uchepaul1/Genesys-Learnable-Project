import React from 'react';
import ProductGrid from './components/product/ProductGrid';
import ServicesSection from './components/services/ServicesSection';
import FeaturedPost from './components/FeaturedPost';
import Testimonial from './components/Testimonial';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductShowcase from './components/header/ProductShowcase';

const App: React.FC = () => {
  return (
    <div>
      <ProductShowcase />
      <ProductGrid />
      <ServicesSection />
      <FeaturedPost/>
      <Testimonial />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;