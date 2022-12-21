import React from 'react';
import "./Hero.css";
import banner from "../../assets/banner.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css/autoplay';

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
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    navigation
                    autoplay={true}
                    pagination={{ clickable: true }}>
                    <SwiperSlide>
                        <img src={banner} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;