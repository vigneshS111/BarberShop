import React from "react";
import elipse1 from "../assets/Ellipse 1.png";
import star1 from "../assets/Star 1.png";
import elipse2 from "../assets/Ellipse 2.png";
import Button from "../components/Button";
const Welcome = () => {
  return (
    <div className="Welcome md:flex hidden py-12 sm:px-20 px-6  relative max-md:flex-col">
      <img src={elipse1} className="h-[450px] z-20" />
      <img src={star1} className="h-[450px] absolute z-10" />
      <img src={elipse2} className="h-[400px] absolute z-30" />
      <div className="flex flex-col justify-start px-7 py-5 gap-3 rounded-xl bg-Lightgray md:w-[600px]  z-40 md:absolute md:bottom-[50px] md:left-[360px]">
        <h2 className="text-wrap font-montserrat md:text-[45px] text-[40px] font-extrabold  ">
          Welcome to the upscale barber studio
        </h2>
        <p className="font-montserrat font-light text-sm text-wrap ">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
