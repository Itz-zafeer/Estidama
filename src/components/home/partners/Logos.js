"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperButtons from "./SwiperButtons";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";

const Logos = () => {
  const [swiperGap, setSwiperGap] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setSwiperGap(
      window?.innerWidth > 768 ? (window?.innerWidth / 100) * 6.04166666667 : 40
    );
  }, []);
  return (
    <Swiper
      data-aos="fade-up"
      slidesPerView={"auto"}
      navigation={true}
      modules={[Navigation]}
      pagination={{
        type: "fraction"
      }}
      className="swiper partnersSwiper   lg:w-[85.4166666667vw] mt56 justify-center flex"
      spaceBetween={swiperGap}
    >
      {/* <div className="flex flex-wrap gap-y-[20px] gap-x-[30px] sm:gap-x-[40px] lg:gap-x-[6.04166666667vw] items-center mt56"> */}
      {/* <div className="flex flex-wrap gap-y-[20px] gap-x-[30px]   items-center mt56"> */}
      <SwiperSlide className="relative lg:w-[5.46875vw] lg:h-[5.46875vw] w-[24%] h-[70px]">
        <Image fill src="/images/home/partners/1.svg" alt="partners" />
      </SwiperSlide>
      <SwiperSlide className="relative lg:w-[14.0625vw] lg:h-[5vw] sm:w-[41%] w-[65%] sm:h-[107px] h-[86px]">
        <Image fill src="/images/home/partners/2.png" alt="partners" />
      </SwiperSlide>
      <SwiperSlide className="relative lg:w-[5.46875vw] lg:h-[5.46875vw] w-[24%] h-[70px]">
        <Image fill src="/images/home/partners/1.svg" alt="partners" />
      </SwiperSlide>
      <SwiperSlide className="relative lg:w-[7.5vw] lg:h-[5.46875vw] w-[28%] h-[70px]">
        <Image fill src="/images/home/partners/3.svg" alt="partners" />
      </SwiperSlide>

      {isMobile || <SwiperButtons />}
      {/* </div> */}
    </Swiper>
  );
};

export default Logos;
