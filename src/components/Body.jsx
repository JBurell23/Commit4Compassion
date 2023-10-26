import React from 'react';
import "./Body.css";
// import { Carousel } from 'react-responsive-carousel';
import Carousel  from './Carousel';
import Contact from './Contact';
// import { slides } from "../data/carouselData.json";

const Body = () => {
  return (
    <div className='body-container'>
        <div className="main-banner">
            <div className="mb-text-container">
                <div className="mb-title universal-gap">Commit <br/>San Antonio</div>
                <div className="mb-text universal-gap">Show your compassion! Commit to donating blood 4 times a year in 2024</div>
                <button className="commit-btn universal-gap">Commit 4</button>
            </div>
        </div>

        <div className="compassion-container">
          <div className="cc-title universal-gap">Commit 4 Compassion Program</div>
          <div className="cc-text universal-gap">Imagine if every potential blood donor gave four 
          times a year; we'd have all we need and wouldn't have to ask for more. Unfortunately, 
          we're not there yet, and living in the nation's seventh-largest, ever-growing city 
          only increases our need for blood donations. We urgently need 
          your help to contribute to this crucial, 
          life-saving effort. Your participation truly makes a difference.</div>
          <button className="commit-btn">Commit 4</button>
        </div>

        <div className="carousel-container">
          {/* <Carousel/> */}         
        </div>
        <Contact/>
        
    </div>
  )
}

export default Body