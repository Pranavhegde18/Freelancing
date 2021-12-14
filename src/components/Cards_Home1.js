import React from 'react';
import './Cards_Home.css';
import CardItem from './CardItem';

function Cards_Home1() {
  return (
    <div className='cards'>
      <h1>Start Working on these Projects Now!!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/machine_learning.png'
              text='Both Supervised and Unsupervised projects are available'
              label='Machine Learning'
              path='/services1'
            />
            <CardItem
              src='images/iot.jpg'
              text='Simple projects based on IOT are available to be done'
              label='IOT'
              path='/services1'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/webdev.jpg'
              text='Do you like developing cool websites ? This place is for you'
              label='Web Development'
              path='/services1'
            />
            <CardItem
              src='images/data.png'
              text='If you like playing with numbers , this will be a cakewalk for you'
              label='Data Analytics'
              path='/services1'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards_Home1;
