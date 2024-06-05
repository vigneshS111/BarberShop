import React from "react";
import abt from "../assets/abt.png";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <div className=" flex justify-between py-6 flex-row sm:px-32 px-6 gap-5 xl:pb-24 ">
      <div className="flex flex-col gap-10  justify-start">
        <h2 className="text-wrap font-montserrat md:text-[48px] text-[44px] font-semibold md:leading-[65px] leading-[65px] ">
          ABOUT US
        </h2>
        <h2 className="text-wrap font-montserrat md:text-[58px] text-[54px] font-extrabold md:leading-[65px] leading-[65px] ">
          Licensed
          <br className="md:block hidden" /> Professional{" "}
          <br className="md:block hidden" /> Barbers
        </h2>

        <div className="flex justify-start  w-full ">
          <a href="#bookNow">
            <div className="border-black border rounded-md px-5 py-4 hover:bg-gray-500 text-white bg-black cursor-pointer font-semibold font-montserrat tracking-wide">
              BOOK AN APPOINTMENT
            </div>
          </a>
        </div>
      </div>
      <img src={abt} className=" h-[460px] md:block hidden" />
    </div>
  );
};

export default AboutUs;
