import React from "react";
import heroImg from "../assets/heroImg.png";
import { MdLocationPin } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { branchInfo } from "../constants";
import Button from "../components/Button";
const Hero = () => {
  return (
    <div className=" flex justify-between  pb-12 pt-6 flex-row sm:px-32 px-6 gap-5  ">
      <div className="flex flex-col gap-10  justify-start items-center">
        <h2 className="text-wrap font-montserrat md:text-[48px] text-[44px] font-semibold md:leading-[65px] leading-[65px] ">
          <span className="font-medium md:text-[40px] text-[36px]">
            WELCOME TO
          </span>{" "}
          <br className="md:block hidden" />
          Barbershop in <br className="md:block hidden" /> Manhattan{" "}
          <br className="md:hidden block" /> NEW YORK
        </h2>
        <div className="flex flex-col justify-start w-full gap-3">
          {branchInfo.map((item, key) => {
            return (
              <div key={key} className="flex flex-col gap-3">
                <div className="flex flex-row justify-start items-center w-full gap-2">
                  <MdLocationPin />
                  <p className="font-montserrat">{item.location}</p>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-2">
                  <MdPhoneInTalk />
                  <p className="font-montserrat">{item.phoneNo}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-start  w-full ">
          <Button />
        </div>
      </div>
      <img src={heroImg} className="w-[340px] h-[460px] md:block hidden" />
    </div>
  );
};

export default Hero;
