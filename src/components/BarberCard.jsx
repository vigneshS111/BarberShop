import React from "react";
import barber1 from "../assets/barber1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const BarberCard = ({ name, role, abt, image }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`flex flex-col justify-end  bg-cover bg-center h-[350px] w-64 xl:w-[280px] xl:h-[380px] rounded-2xl px-5 py-5 font-poppins gap-4`}
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0)),url(${image})`,
        }}
      >
        <div>
          <h2 className=" font-semibold tracking-wide uppercase text-white ">
            {name}
          </h2>
          <p className="text-slate-300 font-semibold tracking-wider capitalize">
            {role}
          </p>
        </div>
        <p className="text-white text-sm">{abt}</p>
        <div className="flex gap-5">
          <FaFacebookF className="text-primary" />
          <FaTwitter className="text-primary" />
          <GrInstagram className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default BarberCard;
