import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import HowItWorks from '../HowItWorks';
import Contact from '../Contact';

const LandingPage = () => (
  <div className="bg-white text-gray-800 antialiased">
    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default LandingPage;
