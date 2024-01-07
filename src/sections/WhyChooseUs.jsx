import React from "react";
import Button from "../components/Button";
const WhyChooseUs = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-end py-12 sm:px-20 px-6 gap-10 WhyChooseUs">
      <div className="flex flex-col justify-start gap-5 w-full text-black md:text-white ">
        <h2 className="text-wrap font-montserrat md:text-[45px] text-[40px] font-extrabold ">
          Why choose us?
        </h2>
        <h3 className="text-wrap font-montserrat md:text-[29px] text-[26px] font-semibold">
          In addition, there 5 more reasons why men prefer Manhattan Barbershop
          N.Y.C:
        </h3>
        <ul className="flex flex-col list-disc text-sm font-montserrat font-light  gap-3 px-5">
          <li className="text-xl">Always welcoming environment</li>

          <li className="text-xl">Our masters focus on the quality</li>

          <li className="text-xl">
            We value both the time and the money of our clients
          </li>

          <li className="text-xl">
            We work only with high-quality, hypoallergenic premium products
          </li>

          <li className="text-xl">
            All surfaces and tools are cleaned, disinfected before and after
            using
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:justify-center justify-start gap-6 w-full bg-white rounded-2xl text-black py-8">
        <h2 className="text-wrap flex justify-center font-montserrat md:text-[45px] text-[40px] font-extrabold text-primary">
          WORKING HOURS
        </h2>
        <ul className="flex flex-col md:justify-center md:items-center  list-none  font-montserrat font-light  gap-3 px-5">
          <li className="text-xl">SUNDAY 10 AM - 5 PM</li>

          <li className="text-xl">MONDAY 9 AM - 7PM</li>

          <li className="text-xl">TUESDAY 8AM - 8PM </li>

          <li className="text-xl">WEDNESDAY 8AM - 8PM </li>

          <li className="text-xl">THURSDAY 8AM - 8PM</li>
          <li className="text-xl">FRIDAY 8AM - 7PM </li>
          <li className="text-xl">SATURDAY 9AM - 6PM </li>
        </ul>
        <div className="flex justify-center w-full">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
