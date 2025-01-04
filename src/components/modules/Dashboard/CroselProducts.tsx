"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductsCard from "../products/ProductsCard";
import { FaArrowLeft } from "react-icons/fa6";

interface Props {
  title: string;
  products: any[];
  link?: string;
}

function CroselProducts({ title, products, link }: Props) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const slicedProducts = products.slice(0, 5);
  return (
    <div className="relative">
      <div className="title w-full flex justify-between p-5 ">
        <h1 className="text-3xl font-yBold">{title}</h1>

        {products.length > 3 && link && (
          <a href={link} className="text-primRed">
            مشاهده همه
          </a>
        )}
      </div>

      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
        }}

        spaceBetween={2}
        slidesPerView={3}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        {slicedProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="col-span-1">
              <ProductsCard />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={
          "absolute top-1/2 -left-5 z-10 bg-white border rounded-full p-3 border-red-600"
        }
        onClick={() => swiperInstance?.slideNext()}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}

export default CroselProducts;
