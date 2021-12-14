import React from 'react';
import '../../App.css';
import Cards_Home1 from '../Cards_Home1';
import HeroSection1 from '../HeroSection1';
import Footer from '../Footer';
import Navbar1 from '../Navbar1';

function Home1() {
  return (
    <>
      <Navbar1/>
      <HeroSection1 />
      <Cards_Home1 />
      <Footer />
    </>
  );
}

export default Home1;
