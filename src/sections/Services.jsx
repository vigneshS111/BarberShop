import React from "react";
import service1 from "../assets/service1.png";
import { services } from "../constants";
const Services = () => {
  return (
    <div className="flex flex-col gap-10 py-12 md:pb-[460px] sm:px-20 px-6 justify-center items-center bg-blackVar">
      <h2 className="text-wrap font-poppins md:text-[45px] text-[40px] font-extrabold text-white tracking-wide">
        Barbershop Services
      </h2>
      <div className="flex md:flex-row flex-col gap-16">
        <img src={service1} className="h-[350px]" />
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {services.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col justify-center items-center gap-3 bg-Lightgray rounded-2xl px-8 py-3"
              >
                <img src={item.image} className="w-[80px] h-[80px]" />
                <p className="flex font-poppins font-semibold text-xl">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
