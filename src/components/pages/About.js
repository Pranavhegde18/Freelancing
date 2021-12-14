import React from 'react';
import '../../App.css';
import Cards_About from '../Cards_About';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function About() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <Cards_About />
      <Footer />
    </>
  );
}
