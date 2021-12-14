import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection2.css';

class HeroSection2 extends React.Component {
    handle=()=>{
        window.location='./freelance';
    }
    render(){
  return (
    <div className='hero-container1'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>START FREELANCING NOW !!!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns1'>
        <Button
            onClick={this.handle}
          className='btns1'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          START FREELANCING
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          JOIN US NOW 
        </Button> */}
      </div>
    </div>
  );
}
}

export default HeroSection2;
