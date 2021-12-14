import React from 'react';
import '../../App.css';
import Cards_Home from '../Cards_Home';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cards_Home />
      <Footer />
    </>
  );
}

export default Home;
