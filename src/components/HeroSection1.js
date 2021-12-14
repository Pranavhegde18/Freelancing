import { render } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import About1 from './pages/About1';
import Login from './pages/login';

class HeroSection1 extends React.Component{
     startf=()=>{
        window.location='./freelance';
     }
render(){
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>START FREELANCING NOW !!!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          onClick={this.startf}
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
              START FREELANCING
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}>
          JOIN US NOW 
        </Button> */}
      </div>
    </div>
  );
}
}

export default HeroSection1;
