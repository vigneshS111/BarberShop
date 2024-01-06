import React from "react";
import { pricingChart } from "../constants";

const Pricing = () => {
  return (
    <div className="py-12 sm:px-32 px-16 flex flex-col w-full md:gap-10 gap-8">
      <h2 className="flex justify-center text-wrap font-poppins md:text-[45px] text-[40px] font-extrabold ">
        Our Pricing
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-4 grid-rows-8 gap-y-8 gap-x-32">
        {pricingChart.map((item, key) => {
          return (
            <div
              key={key}
              className="flex flex-row justify-between w-full font-poppins text-xl"
            >
              <p className="font-extralight">{item.title}</p>
              <p className="font-light text-primary">${item.price}+</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
