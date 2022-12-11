import React from 'react';
import "./Hero.css";
import banner from "../../assets/banner.jpg";

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Indigenous Initiatives</h1>
                <p>Explore portal to learn about inspireing indigenous-led work in the teaching, learning 
                reserch and community engement spaces of the university</p>
                <a href='#' className='button'>learn more</a>
            </div>
            <div className='hero-img'>
                <img src={banner} />
            </div>
        </div>
    );
};

export default Hero;