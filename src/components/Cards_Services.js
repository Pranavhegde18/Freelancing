import React from 'react';
import './Cards_Services.css';
import CardItem from './CardItem';

function Cards_Services() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!!!!!</h1><br/>
      <h1>Start Freelancing and you can add the projects to your resume and you can also earn</h1>
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
            <CardItem
              src='images/webscraping.jpg'
              text='The Beauty of the Web Scraping is that data can be fetched like paragraphs'
              label='Web Scraping'
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
            <CardItem
              src='images/graphic.jpg'
              text='Design the way you like, showcase your skills'
              label='Graphic Designing'
              path='/services1'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/int.jpg'
              text='Market your Skills, Startups, etc. to your fullest'
              label='Internet Marketing'
              path='/services1'
            />
            <CardItem
              src='images/photoshop.jpg'
              text='If you like playing with Photos and Designs, this is heaven made for you'
              label='PhotoShop'
              path='/services1'
            />
            <CardItem
              src='images/comppro.jpg'
              text='To give some work to that gray matter of Yours'
              label='Competetive Programming'
              path='/services1'
            />
          </ul>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1>Over 100 domains available</h1><br/>
          <img src='images/services.png' align='center' alt='Services' href='/services1'/>
        </div>
      </div>
    </div>
  );
}

export default Cards_Services;