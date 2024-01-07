import React from "react";
import { TopComments, hairStyles } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import ReviewCard from "../components/ReviewCard";
const Experience = () => {
  return (
    <div className="bg-secondary">
      <div className="py-12 sm:px-20 px-6 flex flex-col gap-10 justify-center items-center md:absolute md:top-[600px] md:left-[60px]">
        <h2 className="text-wrap font-montserrat md:text-[45px] tracking-wide text-[40px] font-extrabold text-white">
          Experience the Best Haircut <br className="md:block hidden" /> & Shave
          Services{" "}
        </h2>
        <div className="md:grid hidden grid-cols-3 grid-rows-2 gap-5 ">
          {hairStyles.map((item, key) => {
            return (
              <img key={key} src={item} className="max-w-[291px] h-[314px]" />
            );
          })}
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        navigation
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode, Navigation]}
        className="mt-2 max-md:block hidden pb-14 px-5"
      >
        {hairStyles.map((item, key) => (
          <SwiperSlide
            key={key}
            style={{ width: "auto", height: "auto" }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <img src={item} className="max-w-[291px] h-[314px]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col md:pt-[600px] justify-center items-center pb-8 ">
        <h2 className="text-wrap px-6 font-montserrat md:text-[45px] text-[40px] tracking-wide font-extrabold text-white">
          People Comments{""}
        </h2>
        <div className="flex md:flex-row flex-col justify-center py-5  px-6 gap-8 ">
          {TopComments.map((item, key) => {
            return (
              <ReviewCard
                key={key}
                name={item.name}
                image={item.image}
                comment={item.comment}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
