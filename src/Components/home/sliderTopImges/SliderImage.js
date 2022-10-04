import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// Imgaes
import banner1 from '../../../image/banner-1.jpg'
import banner2 from '../../../image/banner-2.jpg'
import banner3 from '../../../image/banner-3.jpg'
import banner4 from '../../../image/banner-4.jpg'
import banner5 from '../../../image/banner-5.jpg'
import banner6 from '../../../image/banner-6.jpg'
import banner7 from '../../../image/banner-7.jpg'
import banner8 from '../../../image/banner-8.jpg'

const SliderImage = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner7} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner8} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner6} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="banner" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default SliderImage;