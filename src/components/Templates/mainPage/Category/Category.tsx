'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CategoryCard from '@/components/modules/MainPage/CategoryCard';


function Category() {
  return (
    <Swiper
    spaceBetween={10}
    slidesPerView={6}
    breakpoints={{
      // when window width is >= 640px
      300: {

        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 6,
      },
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><CategoryCard title='دکور خانه' img='/category/Frame 26087966.png'/></SwiperSlide>
    <SwiperSlide><CategoryCard title='لباس' img='/category/Frame 26087966-1.png'/></SwiperSlide>
    <SwiperSlide><CategoryCard title='لوازم تحریر' img='/category/Frame 26087966-2.png'/></SwiperSlide>
    <SwiperSlide><CategoryCard title='اکسسوری' img='/category/Frame 26087966-3.png'/></SwiperSlide>
    <SwiperSlide><CategoryCard title='کارت تبریک' img='/category/Frame 26087966-4.png'/></SwiperSlide>
    <SwiperSlide><CategoryCard title='قاب موبایل' img='/category/Frame 26087966-5.png'/></SwiperSlide>


  </Swiper>
)
}

export default Category