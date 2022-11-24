import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Category1 from '../assets/Images/cat-1.png';
import Category2 from '../assets/Images/cat-2.png';
import Category3 from '../assets/Images/cat-3.png';
import Category4 from '../assets/Images/cat-4.png';
import Category5 from '../assets/Images/cat-5.png';
import Category6 from '../assets/Images/cat-6.png';
import Category7 from '../assets/Images/cat-7.png';
import Category8 from '../assets/Images/cat-8.png';
import Category9 from '../assets/Images/cat-9.png';
import Category10 from '../assets/Images/cat-10.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Mousewheel } from "swiper";

export default function ProductCategory() {
  return (
    <>
    <div className="section-title-wrapper">
                    <span className="title-highlighter highlighter-secondary"> <i className="fa-solid fa-tags"></i> Categories</span>
                    <h2 className="title">Browse by Category</h2>
                </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        mousewheel={true}
        
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide><figure><img className="category-img" src={Category1}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category2}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category3}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category4}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category5}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category6}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category7}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category8}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
        <SwiperSlide><figure><img className="category-img" src={Category9}/><figcaption className="text-center">Hello</figcaption></figure></SwiperSlide>
      </Swiper>
    </>
  );
}
