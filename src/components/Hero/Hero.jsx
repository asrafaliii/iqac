import React from 'react';
import "./Hero.css";
import banner from "../../assets/banner.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

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
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                breakpoints={{
                    
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                >
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