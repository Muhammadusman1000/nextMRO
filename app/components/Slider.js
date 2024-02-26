import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideImage1 from "../../public/cover.jpg";
import SlideImage2 from "../../public/cover2.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={SlideImage1}
            alt="banner image"
            className="h-[90%] w-full"
            width={1000}
            height={450}
            layout="responsive"
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={SlideImage2}
            alt="Description of your image"
            className="w-full h-full"
            width={1000}
            height={1000}
            layout="responsive"
            priority={true}
          />
        </SwiperSlide>
        <div className="w-full h-full bg-gradient-to-t from-gray-700 to-gray-100 opacity-40 absolute top-0 z-[1] "></div>
      </Swiper>
    </>
  );
}
